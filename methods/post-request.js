module.exports=(req, res) =>{
    if (req.url === '/api/movies'){
        try {
            console.log('Request Body: ', req.body);
        } catch (error) {
            
        }
    }
};