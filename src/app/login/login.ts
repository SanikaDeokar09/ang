import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = '';
  password = '';

  constructor(private router: Router) {}

  loginUser() {

    const data:any = localStorage.getItem('user');

    const user = JSON.parse(data);

    if (
      this.email == user.email &&
      this.password == user.password
    ) {

      alert('Login Successful');

      this.router.navigate(['/profile']);

    } else {

      alert('Invalid Email or Password');

    }
  }
}