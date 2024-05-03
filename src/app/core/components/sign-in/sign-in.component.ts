import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, LoaderComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signInForm!: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

 ngOnInit(): void {
     this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
     })
 }

 onSubmit() {
  if (this.signInForm.valid) {
    const { email, password } = this.signInForm.value;
    this.authService.login(email, password).subscribe({
      next: (response: any) => {
        this.isLoading = true;
        console.log('Login successful!', response);
        localStorage.setItem('token', response.token);
        setTimeout(() => {
          this.router.navigate(['/vote'])
        }, 2500);
      }
    })
  } else {
    console.error('Form is not valid.');
    this.isLoading = false;
    this.signInForm.markAllAsTouched();
  }
 }
}
