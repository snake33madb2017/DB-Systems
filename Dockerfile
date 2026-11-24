# Stage 1: Build Vite React TypeScript PWA
FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve static PWA with Nginx on Render's dynamic $PORT
FROM nginx:1.27-alpine AS runner
ENV PORT=10000

COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 10000
CMD ["nginx", "-g", "daemon off;"]
