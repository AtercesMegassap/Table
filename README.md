# Table API

This is a simple Node.js API built with Express that generates the multiplication table of a given number from 1 to 10. It listens for requests and calculates the multiplication table based on the provided number.

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AtercesMegassap/Table.git
```
Navigate to the project directory:
```bash
cd Table
```
Install dependencies:
```bash
npm install
```

Usage
Start the server:
```bash
node index.js
```
The server will start running at http://localhost:3000.

se an API client (e.g., Postman) to send a GET request to http://localhost:3000/Table with the following parameter in the request body, in JSON format:
```
{
  "number": 5
}
```

The API will respond with the multiplication table of the provided number from 1 to 10.

Example Request:
```
GET http://localhost:3000/Table
Request Body:
{
  "number": 5
}
```
Example Response:
```The multiplication table from 1 to 10 of the number 5 is 5,10,15,20,25,30,35,40,45,50.```

Please note that you need to use an API client (e.g., Postman) to make requests to the API, and the provided number should be a valid natural number.

Multiplication Table Calculation
The API generates the multiplication table of the given number from 1 to 10. It calculates the multiplication of the provided number with each integer from 1 to 10.