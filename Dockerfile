# Stage 1: Build the application
FROM node:alpine AS builder

# Create a directory for the application
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (outputs to the dist folder)
RUN npm run build

# Stage 2: Create the final image
FROM node:alpine

# Set the working directory in the new image
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist  

# Expose the port your application will listen on
EXPOSE 3000

# Define the command to start your application from the dist folder
CMD ["node", "dist/index.cjs"]

