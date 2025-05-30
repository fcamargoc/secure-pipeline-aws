// index.js
const http = require('http');

const port = 80; // El puerto en el que tu servidor escuchará DENTRO del contenedor

const server = http.createServer((req, res) => {
  // Cuando llegue una solicitud HTTP
  if (req.url === '/') { // Si la solicitud es para la raíz
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from secure CI/CD pipeline! Now with an HTTP server!\n');
  } else if (req.url === '/health') { // Un endpoint de ejemplo para health checks
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('OK\n');
  } else { // Para cualquier otra ruta
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found\n');
  }
});

server.listen(port, () => {
  // Este console.log se mostrará en los logs del contenedor cuando el servidor inicie
  console.log(`Server running and listening on port ${port}`);
  console.log("Hello from secure CI/CD pipeline! (HTTP server started)");
});