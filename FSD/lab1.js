const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    const now = new Date();
    const hours = now.getHours();

    const greeting = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";

    res.end(`
        <h1>Hello from Node.js Server</h1>
        <p>${greeting}</p>
        <p>Current server time: ${now.toLocaleTimeString()}</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});