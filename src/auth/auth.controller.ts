import { Controller, Post, Body, UnauthorizedException, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(username, password);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('check-token')
  async checkToken(@Request() req) {
    return req.user;
  }

}




