import { Component, OnInit } from '@angular/core';
import { LoginEventManagerService, IEventoLogin } from '../services/login-event-manager.service';

@Component({
  selector: 'app-login-events',
  templateUrl: './login-events.component.html',
  styleUrls: ['./login-events.component.scss']
})
export class LoginEventsComponent implements OnInit {

  constructor(private loginEventManagerService: LoginEventManagerService) { }

  ngOnInit() {
  }

  obtenerEventosLogin(): Array<IEventoLogin> {
    return this.loginEventManagerService.obtenerEventosLogin();
  }
}
