# NestJS Auth Server with Keycloak and MySQL

This project is a NestJS-based authentication server that integrates with Keycloak for OAuth2 and JWT-based authentication. It uses MySQL as the database.

## Prerequisites

- Docker
- Docker Compose

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nest-auth-server.git
   cd nest-auth-server
   ```

2. **Set up environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```env
   DB_HOST=db
   DB_PORT=3306
   DB_USERNAME=user
   DB_PASSWORD=password
   DB_DATABASE=nest_auth
   KEYCLOAK_URL=http://keycloak:8080/auth
   KEYCLOAK_REALM=your_realm
   KEYCLOAK_CLIENT_ID=your_client_id
   KEYCLOAK_CLIENT_SECRET=your_client_secret
   KEYCLOAK_PUBLIC_KEY=your_public_key
   ```

3. **Start the application:**

   Run the following command to start the Docker containers:

   ```bash
   docker-compose up --build
   ```

   This will start:
   - A MySQL database.
   - A Keycloak server for authentication.
   - The NestJS application.

4. **Access the services:**

   - **NestJS API:** `http://localhost:3000`
   - **Keycloak Admin Console:** `http://localhost:8080`
     - Username: `admin`
     - Password: `admin`

## API Endpoints

- **POST /auth/login**: Authenticate a user and return a JWT token.
  - Request Body:
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - Response:
    ```json
    {
      "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ...",
      "refresh_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ..."
    }
    ```

- **GET /auth/profile**: Get the user profile (requires a valid JWT token).
  - Headers:
    ```
    Authorization: Bearer <access_token>
    ```
  - Response:
    ```json
    {
      "userId": "123",
      "username": "your_username",
      "roles": ["user"]
    }
    ```

## Stopping the Application

To stop the application, run:

```bash
docker-compose down
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

---

### Conclusione

Ora hai tutto il necessario per avviare il progetto e documentarlo correttamente. Se hai bisogno di ulteriori chiarimenti o modifiche, fammi sapere! 😊