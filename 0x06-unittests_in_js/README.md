# API Project

## Overview

This project consists of a simple API built using Node.js and Express. It includes various endpoints for managing payment methods, user login, and cart functionalities. The API is tested using Mocha and Chai for unit testing.

## Project Structure
project-directory/ ├── 10-api/ │ ├── api.js # Main API file with endpoints │ ├── api.test.js # Test file for the API │ ├── package.json # Project metadata and dependencies └── README.md # Project documentation


## Getting Started

### Prerequisites

- Node.js (>=16.0.0)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>/10-api
Install the dependencies:
bash
Copy code
npm install
Running the API
Start the API server:

bash
Copy code
node api.js
The server will run on http://localhost:7865.

API Endpoints
GET /available_payments Returns an object with the available payment methods. Response:

json
Copy code
{
  "payment_methods": {
    "credit_cards": true,
    "paypal": false
  }
}
POST /login Returns a welcome message for the user. Request Body:

json
Copy code
{
  "userName": "string"
}
Response:

json
Copy code
{
  "message": "Welcome :username"
}
GET /cart/
Returns payment methods for the cart with a specified ID. Response (if
is a number):

json
Copy code
{
  "payment_methods": {
    "credit_cards": true,
    "paypal": false
  }
}
Response (if
is not a number): 404 Not Found

Testing
To run the test suite, use the following command:

bash
Copy code
npm test api.test.js
Dependencies
express: Framework for building the API.
chai: Assertion library for testing.
chai-http: HTTP integration testing for Chai.
mocha: JavaScript test framework for Node.js.
Contributing
Feel free to submit issues and pull requests for any enhancements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
Thanks to the contributors and the open-source community for their support.
