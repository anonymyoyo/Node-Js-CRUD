const requestBodyparser = require('../util/body-parser');
const writeToFile = require('../util/write-to-file');
;module.exports= async (req, res) =>{
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    // console.log(baseUrl);
    let id = req.url.split("/")[3];
    const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{3}-[89AB] [0-9A-F]{3}-[0-9A-F]{12}$/i);
  
    if(!regexV4.test(id)){
        // res.statusCode = 200;
        // res.writeHeader("Content-Type", "application/json");
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: 'VALIDATION FAILED', message:'UUID IS NOT VALID',}));
    }
    else if(baseUrl === '/api/movies/' && regexV4.test(id)){
        try {
            let body = await requestBodyparser(req);

            const index = req.movies.findIndex((movie) => {
                return movie.id === id;
            });
            if (index === -1) {
                res.statuCode=404;
                res.write(JSON.stringify({title: 'NOT FOUND', message:'Route Not Found'}));
                res.end();
            }
            else{
                req.movies[index]={id,...body};
                writeToFile(req.movies);
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(req.movies[index]));
            }
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