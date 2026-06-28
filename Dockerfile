FROM node:18-alpine
DIR /app
copy . .
EXPOSE 3000
CMD["node", "app.js"]
