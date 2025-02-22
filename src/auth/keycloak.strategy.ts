import { Strategy } from 'passport-keycloak';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor() {
    super({
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      callbackURL: 'YOUR_CALLBACK_URL',
      authServerURL: 'YOUR_AUTH_SERVER_URL',
      realm: 'YOUR_REALM',
      redirectUri: 'YOUR_REDIRECT_URI',
    });
  }

  validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
    done(null, profile);
  }
}
