var express = require('express')
var router = express.Router()


router.get('/' , function(req , res , next){
    res.send("This is the purchase page.")
});

router.get('/:purchaseId' , function(req , res , next){
    if(req.params.purchaseId === '0'){
       return next('route')
    }
    res.send("Sending response for purchase number: "+ req.params.purchaseId)
});

router.get('/:purchaseId', function(req , res ){
    res.send("Lucky You!!! Not everybody gets this response")
})

module.exports = router;