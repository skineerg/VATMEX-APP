import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    try {
      await this.authService.login(this.email, this.password);
      console.log('Usuario autenticado');
      this.router.navigate(['/home']); // Redirige a la página principal
    } catch (error) {
      console.error('Error en el login:', error);
      // Puedes mostrar un mensaje de error aquí
    }
  }
}
