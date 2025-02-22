// import { Injectable } from '@nestjs/common';
// import { KeycloakConnectOptions, KeycloakConnectOptionsFactory } from 'keycloak-connect';

// @Injectable()
// export class KeycloakConfigService implements KeycloakConnectOptionsFactory {
//   createKeycloakConnectOptions(): KeycloakConnectOptions {
//     return {
//       realm: process.env.KEYCLOAK_REALM,
//       authServerUrl: process.env.KEYCLOAK_URL,
//       clientId: process.env.KEYCLOAK_CLIENT_ID,
//       secret: process.env.KEYCLOAK_CLIENT_SECRET,
//     };
//   }
// }