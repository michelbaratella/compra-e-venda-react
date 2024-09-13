# Step 1: Use an official Node.js runtime as a parent image
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR .

# Step 3: Copy the package.json and package-lock.json files
COPY ./package.json

# Step 4: Install the app dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Use a smaller image for serving the app
FROM nginx:alpine

# Step 8: Copy the built React app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 to the outside world
EXPOSE 80

# Step 10: Define the default command to run the nginx server
CMD ["nginx", "-g", "daemon off;"]
