const  express=require('express');
const  router=express.Router();
const foodController =require ('../controller/foodController')

router.post('/create',foodController.create)
router.get('/read',foodController.read)
router.post('/update/:id',foodController.update)
router.get('/readOne/:id',foodController.readOne)
router.get('/delete/:id',foodController.delete)
module.exports=router;