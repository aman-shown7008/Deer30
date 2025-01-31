# Stage 1: Build Stage
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Build the project (assuming build command creates the 'build' folder)
RUN npm run build

# Stage 2: Production Stage
FROM node:18-alpine

# Install 'serve' globally to serve static files
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy only the 'build' folder from the build stage
COPY --from=build /app/build ./build

# Expose port 80 to allow external access
EXPOSE 80

# Serve the application on port 80
CMD ["serve", "-s", "build", "-l", "80"]
