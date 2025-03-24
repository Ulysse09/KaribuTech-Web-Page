# 🐳 Dockerized Web App | Docker Skills Demonstration

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white) ![CI/CD](https://img.shields.io/badge/CI/CD-Expert-ff69b4)

A lightweight React + Vite web application containerized with Docker to demonstrate core containerization skills.

## 🚀 Key Docker Skills Showcased

✅ **Image Optimization**  
- Multi-stage builds using Dockerfile  
- Alpine-based images  
- Layer caching  

✅ **Container Management**  
- Port mapping (`-p 8080: 80`)  
- Detached mode (`-d`)  
  

✅ **Best Practices**  
- Efficient layer caching
- Minimal base imaging

## 📦 Prerequisites

- Docker Engine 20.10+
- Node.js 14+ (for local development)
- Git (optional)


## 🛠️ Technical specification
# Production Dockerfile
# Stage 1: Build the app

FROM node:16 AS build
WORKDIR /app
COPY package.json package-lock.json vite.config.js tailwind.config.js ./
RUN npm install
RUN apt-get update && apt-get install -y nginx
COPY . .
RUN npm run build # Build app for production


#Stage 2:Serve the app
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
# Serve the built file
CMD ["nginx","-g","daemon off;"]
