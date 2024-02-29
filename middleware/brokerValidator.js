const brokerValidator=(req,res,next)=>{
    if(req.user.role==="broker"){
        next();
    }
    else{
        res.this.status(403).json({error:"Available for broker"})
    }
}
module.exports={
    brokerValidator,
}