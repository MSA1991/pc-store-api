# Express API for Product Categories and Products

This is a simple Express.js application that provides endpoints to retrieve product categories and individual products.

## Endpoints

### Get Product Categories

Endpoint: GET /categories

This endpoint retrieves a list of product categories. It has a delay of 2000 milliseconds (2 seconds) to simulate a slow response time.

**Example:**
http://localhost:4000/categories

### Get Individual Product

Endpoint: GET /:products/:id

This endpoint retrieves an individual product based on the product type and product ID. It also has a delay of 2000 milliseconds.

Replace :products with the desired product type (e.g., "cpu") and :id with the product ID.

**Example:**
http://localhost:4000/cpu/amd-ryzen7-5800x3d

### Error Handling

- If a product is not found, the server responds with a 404 status and an error message: { error: 'Product not found' }.
- If there is an internal server error, the server responds with a 500 status and an error message: { error: 'Internal Server Error' }.

### Configuration

The server uses the environment variable PORT to determine the port on which it will listen. If PORT is not specified, the default port is 4000.
