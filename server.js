const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/data.txt`);

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        console.log('server responding');
        const list = [];
        readStream.on('data', (chnk) => {
            console.log(chnk);
            list.push(chnk);
        });
        readStream.on('end', () => {
            const parsebody = Buffer.concat(list).toString();
            console.log(parsebody);
            res.write(parsebody);
            res.end();
        });
    } else if (req.url === '/about') {
        console.log('server responding');
        res.write('about');
        res.end();
    } else {
        console.log('server responding');
        res.write('not found');
        res.end();
    }
});

server.listen(3000);
