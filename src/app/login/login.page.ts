import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = 'giogarrey@gmail..com';
  password: string = '';

  constructor() {}

  ngOnInit() {
  }
  
  login() {
    // Si usuario=admijn y password=admin
    //Entonces console.log('Login Correcto')
    //Si no console.log('Login Incorrecto')
    if(this.email === 'admin'
    && this.password === 'admin'){
      console.log('Login Correcto');
    }
    else{
      console.log('Login Incorrecto');
    }
  }

}
