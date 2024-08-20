const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
    
        res.write('<html>');
        res.write('<head><title>Nyobain node</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }else if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',  (chunk)=>{
            body.push(chunk);
            console.log(chunk);
        });
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode = 302;   
                res.setHeader('Location', '/');
                return res.end();
            });
            
        });
        
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Nyobain node</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from node JS server</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: 'Some Hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hard coded text';

// exports.handler = requestHandler;
// exports.someText = 'Some Hard coded text';