# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Run the TypeScript compiler to build the app
RUN npx tsc

# Start the Node.js server
CMD ["node", "server.js"]
