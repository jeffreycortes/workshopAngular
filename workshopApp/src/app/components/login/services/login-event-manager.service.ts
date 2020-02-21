import { Injectable } from '@angular/core';
import { IEventoLogin } from '../interfaces/IEventoLogin';

@Injectable({
  providedIn: 'root'
})
class LoginEventManagerService {
  public listaEventosSignIn: IEventoLogin[];

  constructor() {
    this.listaEventosSignIn = [];
  }

  registrarEvento(evento: IEventoLogin) {
    this.listaEventosSignIn.push(evento);
  }

  obtenerEventosLogin(): Array<IEventoLogin> {
    return this.listaEventosSignIn;
  }
}

export {LoginEventManagerService, IEventoLogin};
