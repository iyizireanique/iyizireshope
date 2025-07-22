FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.25-alpine

# Gusiba default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Gushyiramo frontend build
COPY --from=build /app/dist /usr/share/nginx/html

# Gushyiramo config yacu iha nginx port 8000
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Guhindura port container izajya yumvaho
EXPOSE 8000

# Gutangiza nginx
CMD ["nginx", "-g", "daemon off;"]
