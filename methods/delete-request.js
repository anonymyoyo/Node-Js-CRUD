module.exports=(req, res) =>{
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    // console.log(baseUrl);
    let id = req.url.split("/")[3];
    const regexV4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{3}-[89AB] [0-9A-F]{3}-[0-9A-F]{12}$/i);
    
};