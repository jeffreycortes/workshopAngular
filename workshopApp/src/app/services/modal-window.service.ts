import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {

  constructor() { }

  ShowModalAlert(mensaje: string) {
    alert(mensaje);
  }
}
