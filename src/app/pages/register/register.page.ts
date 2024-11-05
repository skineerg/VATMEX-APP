import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onRegister() {
    try {
      await this.authService.register(this.email, this.password);
      console.log('Usuario registrado');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error en el registro:', error);
      // Puedes mostrar un mensaje de error aquí
    }
  }
}
