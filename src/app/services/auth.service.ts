import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>; // Observable para el estado del usuario

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState; // Obtiene el estado de autenticación actual
  }

  // Registro de usuario
  async register(email: string, password: string) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error en el registro:", error);
      throw error;
    }
  }

  // Inicio de sesión de usuario
  async login(email: string, password: string) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error en el login:", error);
      throw error;
    }
  }

  // Cerrar sesión
  async logout() {
    return await this.afAuth.signOut();
  }

  // Devuelve el estado del usuario actual
  getAuthState(): Observable<any> {
    return this.user$; // Devuelve el observable de authState
  }
}
