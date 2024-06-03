module.exports =(req, res) =>{
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
    let id = req.url.split("/");
    const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{3}-[89AB] [0-9A-F]{3}-[0-9A-F]{12}$/i);
    console.log(id);
    if (req.url === "/api/movies") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else if(!regexV4.test(id)){
        res.writeHead(400, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: 'VALIDATION FAILED', message:'URL ID IS NOT VALID'}));
    }
    else if(regexV4.test(id)){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        let filteredMovie = req.movies.filter((movie) =>{
            return movie.id === id;
        })

        if(filteredMovie.length > 0){
            res.statusCode = 200;
            res.write(JSON.stringify(filteredMovie));
            res.end();
        }
        else{
            res.statusCode = 404;
            res.write(JSON.stringify({title: 'NOT FOUND', message:'Movie Not Found'}));
        }
        // res.write();
        // res.end();
    }
    else{
        
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: 'NOT FOUND', message:'Route Not Found'}));
    }
};