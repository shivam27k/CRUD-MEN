# Node API for Product Management

This Node.js application serves as an API for managing products. It allows users to perform CRUD (Create, Read, Update, Delete) operations on products stored in a MongoDB database.

## Installation

1. Clone or download this repository to your local machine.
2. Install dependencies by running `npm install`.

## Usage

1. Start the server by running `npm start`.
2. Access the API endpoints using a REST client like Postman or by integrating it into your frontend application.

### Endpoints

-   **GET /api/products**: Retrieves all products.
-   **GET /api/products/:id**: Retrieves a specific product by ID.
-   **POST /api/products**: Adds a new product.
-   **PUT /api/products/:id**: Updates an existing product.
-   **DELETE /api/products/:id**: Deletes a product.

## Folder Structure

-   models/
    -   product.model.js // Defines the Product schema and model
-   routes/
    -   product.route.js // Defines the API routes for product management
-   app.js // Entry point of the application, sets up the Express server

## Dependencies

-   **Express**: Web application framework for Node.js.
-   **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.

## Database

This application uses MongoDB as its database. Ensure that you have MongoDB installed and running locally or provide the appropriate connection URI for a MongoDB instance in the `mongoose.connect()` method call.

> This README provides an overview of the Node API for Product Management, including installation instructions, usage guidelines, folder structure, dependencies, database setup, and licensing information.

> NOTE:
> If you are about to reuse this project, search for words **yourUsername**, **yourPassword** and **yourMongoDbLink**, and replace them with your **username**, **password** and **link**.
