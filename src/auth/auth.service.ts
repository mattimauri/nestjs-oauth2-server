import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import axios from 'axios';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(username: string, password: string) {
    // Configurazione per ottenere il token da Keycloak
    const keycloakUrl = process.env.KEYCLOAK_URL;
    const realm = process.env.KEYCLOAK_REALM;
    const clientId = process.env.KEYCLOAK_CLIENT_ID;
    const clientSecret = process.env.KEYCLOAK_CLIENT_SECRET;

    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('client_id', clientId || "");
    data.append('client_secret', clientSecret || "");
    data.append('username', username);
    data.append('password', password);

    try {
      const response = await axios.post(
        `${keycloakUrl}/realms/${realm}/protocol/openid-connect/token`,
        data,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      };
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
      throw new Error('Failed to authenticate with Keycloak');
    }
  }
}