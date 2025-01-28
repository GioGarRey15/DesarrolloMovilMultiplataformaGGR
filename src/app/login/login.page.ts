import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  // Importa NgForm


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login(form: NgForm) {
    console.log('Formulario:', form.value);  // Verifica si los datos del formulario están correctos
  
    if (!form.valid) {
      alert('Por favor, complete todos los campos');
      return;
    }
  
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
  
    if (this.email === storedEmail && this.password === storedPassword) {
      console.log('Credenciales correctas');
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/inicio']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}  