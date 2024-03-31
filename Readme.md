# Node.js gRPC Client Project

This project demonstrates how to create a simple Node.js server that acts as a client to a gRPC service.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installing

Navigate to the project directory:

```bash
cd nodejs-grpc-client
```

Install the dependencies:

```bash
npm install
```

### Running the server

Start the server:

```bash
node server.js
```
or you can use the `Makefile` :)

The server will start running on `http://localhost:3000`. You can access the health check endpoint at `http://localhost:3000/healthcheck`.

## Built With

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) - gRPC library for Node.js
- [@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader) - Utility package for loading `.proto` files