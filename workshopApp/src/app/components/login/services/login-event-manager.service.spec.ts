import { TestBed } from '@angular/core/testing';

import { LoginEventManagerService } from './login-event-manager.service';

describe('LoginEventManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginEventManagerService = TestBed.get(LoginEventManagerService);
    expect(service).toBeTruthy();
  });
});
