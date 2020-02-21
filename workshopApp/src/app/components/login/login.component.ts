import { Component, OnInit } from '@angular/core';
import { ModalWindowService } from 'src/app/services/modal-window.service';
import { LoginEventManagerService } from './services/login-event-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // Propiedades
  public login: string;
  public password: string;
  public readonly TOKEN_AUTENTICACION = 'token_on';

  constructor(private modalWindowService: ModalWindowService,
              private loginEventManagerService: LoginEventManagerService) {

  }

  ngOnInit() {
    this.login = '';
  }

  signIn(): void {
    const mensaje = this.autenticarUsuario(this.login, this.password) ?
      'Usuario autenticado!!' :
      'Error: !Credenciales incorrectas!';

    this.modalWindowService.ShowModalAlert(mensaje);
  }

  autenticarUsuario(login: string, password: string): boolean {
    this.registrarEventoDeSignIn(login);
    return (password === this.TOKEN_AUTENTICACION);
  }

  registrarEventoDeSignIn(login: string): void {
    this.loginEventManagerService.registrarEvento({fechaSignIn: new Date(), login});
  }

  keypress(evt: any): void {
    const charCode = evt.charCode || evt.keyCode;

    if (charCode === 13) {
      this.signIn();
    }
  }
}
