# Express API for Product Categories and Products

This is a simple Express.js application that provides endpoints to retrieve product categories and individual products.

## API Endpoints

1. **/categories**
   Method\*\*: GET
   Description: Returns a list of product categories.

2. **/products**
   Method: GET
   Description: Returns a list of all products.

3. **/:products/:id**
   Method: GET
   Description: Returns details for a specific product identified by its category and ID.
   Parameters:
   :products - The product category.
   :id - The ID of the specific product within the category.
   Error Handling: If the specified product is not found, a 404 error with an appropriate message is returned.

### Configuration

The server uses the environment variable PORT to determine the port on which it will listen. If PORT is not specified, the default port is 4000.
