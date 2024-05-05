import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, LoaderComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
      this.signUpForm = new FormGroup({
        firstname: new FormControl('', [Validators.required]),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)

      })
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { firstname, lastname, email, password } = this.signUpForm.value;
      this.authService.register(firstname, lastname, email, password).subscribe({
        next: (response) => {
          console.log("register successful", response);
          this.isLoading = true;
          localStorage.setItem('token', response.token);
          setTimeout(() => {
            this.router.navigate(['/vote'])
          }, 2500);
        }
      })
      
    } else {
      console.log("form is not valid");
      this.isLoading = false;
    }
  }

}
