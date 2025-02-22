# Usa un'immagine Node.js versione 20 come base
FROM node:20

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file di configurazione del progetto
COPY package.json yarn.lock* ./

# Installa le dipendenze
RUN yarn install

# Copia tutto il codice sorgente
COPY . .

# Esponi la porta su cui gira il server
EXPOSE 3000

# Avvia il server
CMD ["yarn", "start:dev"]