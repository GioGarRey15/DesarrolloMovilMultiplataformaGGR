import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';  // Importa NgForm

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
  standalone: false
})
export class RegistrarsePage {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  email: string = '';  // Asegúrate de que la variable email esté definida

  constructor(private router: Router) {}

  // Método para el registro
  register(form: NgForm) {
    // Verificar si el formulario es válido
    if (!form.valid) {
      alert('Por favor complete todos los campos correctamente.');
      return;
    }

    // Verificar si las contraseñas coinciden
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Verificar si el nombre de usuario, correo y contraseña están completos
    if (!this.username || !this.password || !this.email) {
      alert('Por favor, complete todos los campos');
      return;
    }

    // Guardar las credenciales en LocalStorage
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    localStorage.setItem('email', this.email);

    alert('Registro exitoso. Ahora puede iniciar sesión.');
    this.router.navigate(['/login']); // Redirigir al login
  }
}
