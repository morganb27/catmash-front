import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;

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
          this.router.navigate(['/vote'])
        }
      })
      
    } else {
      console.log("form is not valid")
    }
  }

}
