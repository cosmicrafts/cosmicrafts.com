# Use the official Node.js image as the base
FROM node:latest

# Enable Corepack for Yarn 4.x support
RUN corepack enable && corepack prepare yarn@4.1.0 --activate

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files and install dependencies
COPY package.json ./
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5173

# Ensure dependencies are installed and start in dev mode
CMD ["sh", "-c", "yarn install && yarn dev"]
