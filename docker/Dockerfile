# ==========================================
# STAGE 1: The Kitchen (Build Environment)
# ==========================================
FROM node:18-alpine AS builder
WORKDIR /app

# Point directly to the exact folder holding package.json
COPY website/dreamsphere/package*.json ./

RUN npm install

# Copy the rest of the React code from that specific folder
COPY website/dreamsphere/ .

RUN npm run build


# ==========================================
# STAGE 2: The Waiter (Production Server)
# ==========================================
FROM nginx:alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]