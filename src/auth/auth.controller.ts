import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  async login() {
    // La gestione della richiesta di login è delegata a Passport
  }

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  async callback(@Req() req) {
    const user = req.user;
    const tokens = await this.authService.generateTokens(user);
    return tokens;
  }
}