import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.KEYCLOAK_PUBLIC_KEY, // Usa la chiave pubblica di Keycloak
      issuer: process.env.KEYCLOAK_URL, // URL di Keycloak
      audience: process.env.KEYCLOAK_CLIENT_ID, // Client ID di Keycloak
    });
  }

  async validate(payload: any) {
    // Qui puoi aggiungere logica aggiuntiva per validare l'utente
    return {
      userId: payload.sub,
      username: payload.preferred_username,
      roles: payload.realm_access?.roles || [],
    };
  }
}