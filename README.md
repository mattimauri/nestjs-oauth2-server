Ecco un esempio di file `README.md` per il tuo progetto NestJS con Docker, che include tutte le istruzioni necessarie per configurare, eseguire e testare il server.

---

# NestJS OAuth2 Server with Docker

Questo progetto è un server NestJS che gestisce l'autenticazione OAuth2 e restituisce un token e un refresh token. Il server è containerizzato utilizzando Docker.

## Prerequisiti

- **Node.js**: Versione 18.x o superiore.
- **Docker**: Installato e configurato correttamente.
- **Docker Compose**: Installato e configurato correttamente.

## Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/tuo-username/nestjs-oauth2-server.git
   cd nestjs-oauth2-server
   ```

2. Installa le dipendenze:

   ```bash
   npm install
   ```

## Configurazione

1. Configura le variabili d'ambiente:

   Crea un file `.env` nella root del progetto e aggiungi le seguenti variabili:

   ```env
   CLIENT_ID=your_client_id
   CLIENT_SECRET=your_client_secret
   JWT_SECRET=your_jwt_secret_key
   OAUTH2_AUTHORIZATION_URL=https://your-oauth2-provider.com/auth
   OAUTH2_TOKEN_URL=https://your-oauth2-provider.com/token
   CALLBACK_URL=http://localhost:3000/auth/callback
   ```

   Sostituisci i valori con quelli corretti per il tuo provider OAuth2.

## Esecuzione con Docker

1. Costruisci l'immagine Docker:

   ```bash
   docker-compose build
   ```

2. Avvia il container:

   ```bash
   docker-compose up
   ```

   Il server sarà disponibile all'indirizzo `http://localhost:3000`.

## Esecuzione senza Docker

1. Avvia il server in modalità sviluppo:

   ```bash
   npm run start:dev
   ```

   Il server sarà disponibile all'indirizzo `http://localhost:3000`.

## Endpoint

### `/auth/login`

- **Metodo**: GET
- **Descrizione**: Avvia il processo di autenticazione OAuth2. Reindirizza l'utente al provider OAuth2 per l'autenticazione.

### `/auth/callback`

- **Metodo**: GET
- **Descrizione**: Gestisce la callback dal provider OAuth2 e restituisce un token e un refresh token.

   **Risposta**:

   ```json
   {
     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   }
   ```

## Test

Puoi testare l'endpoint `/auth/login` utilizzando un browser o uno strumento come `curl` o Postman.

1. Apri il browser e vai a:

   ```
   http://localhost:3000/auth/login
   ```

2. Completa il processo di autenticazione con il provider OAuth2.

3. Dopo l'autenticazione, verrai reindirizzato a `/auth/callback` e riceverai i token.

## Sviluppo

### Struttura del progetto

- `src/auth`: Contiene il modulo di autenticazione, inclusi controller, servizi e strategie.
- `src/main.ts`: Punto di ingresso dell'applicazione.
- `Dockerfile`: Configurazione per il container Docker.
- `docker-compose.yml`: Configurazione per Docker Compose.

### Comandi utili

- **Avvia il server in modalità sviluppo**:

  ```bash
  npm run start:dev
  ```

- **Esegui i test**:

  ```bash
  npm run test
  ```

- **Lint del codice**:

  ```bash
  npm run lint
  ```

- **Formatta il codice**:

  ```bash
  npm run format
  ```

## Contribuire

Se desideri contribuire al progetto, segui questi passaggi:

1. Fork del repository.
2. Crea un nuovo branch (`git checkout -b feature/nuova-funzionalità`).
3. Fai commit delle tue modifiche (`git commit -am 'Aggiungi nuova funzionalità'`).
4. Push del branch (`git push origin feature/nuova-funzionalità`).
5. Crea una Pull Request.

## Licenza

Questo progetto è rilasciato sotto la licenza MIT. Vedi il file [LICENSE](LICENSE) per ulteriori dettagli.

---

### Note aggiuntive

- Assicurati di sostituire i valori di esempio (come `your_client_id`, `your_client_secret`, ecc.) con quelli corretti per il tuo provider OAuth2.
- Se utilizzi un provider OAuth2 diverso (ad esempio, Google, Facebook, GitHub), dovrai configurare le URL e i parametri di autenticazione di conseguenza.

Questo `README.md` fornisce una guida completa per configurare, eseguire e testare il tuo server NestJS con Docker. Puoi personalizzarlo ulteriormente in base alle tue esigenze specifiche.