# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /src/app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy app source
COPY . .

# Expose port and start app
EXPOSE 5173
CMD ["npm", "start"]
