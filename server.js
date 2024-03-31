const http = require('http');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './protos/health_check_service.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const healthCheckProto = grpc.loadPackageDefinition(packageDefinition).health_check;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/healthcheck') {
    const client = new healthCheckProto.HealthCheckService('localhost:9000', grpc.credentials.createInsecure());
    client.Check({}, (error, response) => {
      if (!error) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: response.status, message: response.message }));
      } else {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: false, message: 'Health check failed' }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
