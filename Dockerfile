# Use an official Node runtime as a parent image
FROM node:14-alpine as build

# Set the working directory inside the container
WORKDIR /tran_tu_ui_garden

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight web server to serve the build
FROM node:14-alpine

# Install serve
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /tran_tu_ui_garden

# Copy the build files from the previous stage
COPY --from=build /tran_tu_ui_garden/build .

# Expose port 8083 to the outside world
EXPOSE 8083

# Command to run the application
CMD ["serve", "-s", ".", "-l", "8083"]
