# Dockerfile

# Tahap build
FROM node:lts-alpine AS build-stage

# Set working directory
WORKDIR /app

# Salin file package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin semua file project
COPY . .

# Ekspos port default Nuxt (3001)
EXPOSE 3001

# Jalankan aplikasi dalam mode development
CMD ["npm", "run", "dev"]
