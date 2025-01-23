import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = 'admin';
  password: string = 'admin';

  constructor() {}

  ngOnInit() {
  }
  
  login(form : NgForm) {
    // Si usuario=admijn y password=admin
    //Entonces console.log('Login Correcto')
    //Si no console.log('Login Incorrecto')
    
    
    //Obtener los valores del formulario
    console.log(form.value);

    //Validar formulario
    console.log('valid:', form.valid);

    //Si form es inválido
    //console.log ('Todos los campos son requeridos')
    //return

    if(form.invalid){
    console.log ('Todos los campos son requeridos');
    return;
    }
    if(this.email === 'admin'
    && this.password === 'admin'){
      console.log('Login Correcto');
    }
    else{
      console.log('Login Incorrecto');
    }
  }

}
