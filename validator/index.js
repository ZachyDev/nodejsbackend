exports.postValidator =(req,res,next)=>{
    //title validation
    req.check('title','enter title').notEmpty()
    req.check('title','please the title that is between 4 and 150').isLength({
        min:4,
        max:150
    })
    req.check('body','enter body').notEmpty()
    req.check('body','please the body that is between 4 and 2000').isLength({
        min:4,
        max:2000
    })
    //check for errors
   const errors = req.validationErrors();
   //show errors as they appear
   if(errors){
       const firstError = errors.map((error)=>error.msg)[0]
       return res.status(400).json({
           error:firstError
       })
   }
   next();
}
