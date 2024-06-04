const crypto = require('crypto');
const requestBodyparser = require('../util/body-parser');
module.exports= async (req, res) =>{
    if (req.url === '/api/movies'){
        try {
            let body = await requestBodyparser(req);
            body.id = crypto.randomUUID();
            // console.log('Request Body: ', body);
            req.movies.push(body);
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
};