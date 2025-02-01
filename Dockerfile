# Usa l'immagine ufficiale di Node.js
FROM node:16

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di progetto
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il resto del codice
COPY . .

# Esponi la porta 3000
EXPOSE 3000

# Avvia l'applicazione
CMD ["npm", "run", "start:prod"]