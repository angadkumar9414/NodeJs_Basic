import { Router } from "express";
const router = Router();
router.get('/signup',function(req,res){
    // const name = req.body
res.send('sign up');
})

export default router;