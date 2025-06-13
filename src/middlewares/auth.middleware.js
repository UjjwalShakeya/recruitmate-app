const auth = (req,res,next)=>{
    // here we are checking if the session has userEmail then only we are going for the next middlewares mentioned in the the index.js
    
    if(req.session.user){
        next();
    }else{
        // if no userEmail exist we are not going to let user access other middlewares in the index.js we are simply going to get user redirect to the login page
        res.render('404'); 
    }
}
export default auth;