import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private router = inject(Router)
  userName=""
  Pass=''

  login(){
    console.log("clicked buy user ")
    this.router.navigate(['/dashboard'])
  }
}
