const adminAuth= (req,res,next) =>{
    console.log("Admin auth is getting chcked!");
    const token="xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unAuthorized request!");

    }else{
        next();

    };
};

const userAuth= (req,res,next) =>{
    console.log("user auth is getting chcked!");
    const token="xyyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
        res.status(401).send("unAuthorized request!");

    }else{
        next();

    };
};
module.exports ={
    adminAuth,
    userAuth,
};