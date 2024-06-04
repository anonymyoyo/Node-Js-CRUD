const crypto = require('crypto');
const requestBodyparser = require('../util/body-parser');
const writeToFile = require('../util/write-to-file');
module.exports= async (req, res) =>{
    if (req.url === '/api/movies'){
        try {
            let body = await requestBodyparser(req);
            body.id = crypto.randomUUID();
            // console.log('Request Body: ', body);
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201, {'Content-Type': 'application/json'});
            res.end();
        } catch (error) {
            console.log(error);

            res.writeHead(400, {'Content-Type': 'application/json'})
            res.end(
                res.end(JSON.stringify({title: 'VALIDATION FAILED', message:'REQUEST BODY IS NOT VALID',}))
            );
        }
    }
    else{
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: 'NOT FOUND', message:'Route Not Found'}));
    }
};