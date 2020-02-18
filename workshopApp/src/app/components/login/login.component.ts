import { Component, OnInit } from '@angular/core';

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
  public listaEventosSignIn: IEventoSignIn[];

  constructor() {
  }

  ngOnInit() {
    this.login = '';
    this.listaEventosSignIn = [];
  }

  signIn(): void {
    const mensaje =
      this.autenticarUsuario(this.login, this.password) ?
      'Usuario autenticado!!' :
      'Error: !Credenciales incorrectas!';

    alert(mensaje);
  }

  autenticarUsuario(login: string, password: string): boolean {
    this.registrarEventoDeSignIn(login);
    return (password === this.TOKEN_AUTENTICACION);
  }

  registrarEventoDeSignIn(login: string): void {
    this.listaEventosSignIn.push({fechaSignIn: new Date(), login});
  }

  keypress(evt: any): void {
    const charCode = evt.charCode || evt.keyCode;

    if (charCode === 13) {
      this.signIn();
    }
  }

}

interface IEventoSignIn {
  fechaSignIn: Date;
  login: string;
}
