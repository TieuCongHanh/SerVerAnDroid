const http = require("http")
const fs = require('fs');
const { join } = require("path");
server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.writeHead(200, "OK", { 'Content-type': 'text/html' });
        res.write('<h1>Day la trang home</h1>', (err) => {
            console.log(err);
        });
        res.end();
    }
    else {
        // đọc file bất kỳ theo tên file được truyền trên url
        // console.log(req.url);
        // đọc file.VD:  url =  /a.html ==> req.url.substring(1) --> lấy tên file từ ký tự thứ 1 đến hết
        fs.readFile(req.url.substring(1), (err, data) => {
            if (err) {
                // throw err
                res.writeHead(404, { 'Content-type': 'text/html' });
                return res.end();
            };
            if (req.url.indexOf('.css') > 0)
                res.writeHead(200, "OK", { 'Content-type': 'text/css' });
            else
                res.writeHead(200, "OK", { 'Content-type': 'text/html' });
           
            res.write(data.toString('utf8'))
            return res.end();
        })

    }


});
server.listen(8080);
console.log("server dang chay port 80");