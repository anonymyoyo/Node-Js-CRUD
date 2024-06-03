module.exports =(req, res) =>{
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
    let id = req.url.split("/");
    console.log(id);
    
    if (req.url === "/data/movies") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else{
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({title: 'NOT FOUND', message:'Route Not Found'}));
    }
};