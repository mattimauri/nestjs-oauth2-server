import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { KeycloakStrategy } from './keycloak.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'keycloak' })],
  providers: [AuthService, KeycloakStrategy],
  controllers: [AuthController],
})
export class AuthModule {}