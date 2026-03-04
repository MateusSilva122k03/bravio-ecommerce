FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source
COPY . .

# Build project
RUN npm run build

FROM nginx:alpine

# Copy build
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx roda em 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]