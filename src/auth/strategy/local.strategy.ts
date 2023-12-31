import { AuthService } from './../auth.service';
import { Passport } from 'passport';
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  validate(email: string, password: string) {
    return this.authService.validateUser(email, password);
  }
}
