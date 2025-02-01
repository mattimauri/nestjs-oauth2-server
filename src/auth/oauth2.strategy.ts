import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-oauth2';

@Injectable()
export class OAuth2Strategy extends PassportStrategy(Strategy, 'oauth2') {
  constructor() {
    super({
      authorizationURL: 'https://your-oauth2-provider.com/auth', // URL di autorizzazione OAuth2
      tokenURL: 'https://your-oauth2-provider.com/token', // URL del token OAuth2
      clientID: 'your_client_id', // ID client OAuth2
      clientSecret: 'your_client_secret', // Segreto client OAuth2
      callbackURL: 'http://localhost:3000/auth/callback', // URL di callback
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
    const user = {
      accessToken,
      refreshToken,
      profile,
    };
    done(null, user);
  }
}