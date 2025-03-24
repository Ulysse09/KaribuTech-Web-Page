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

