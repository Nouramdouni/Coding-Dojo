import {  Router } from "express"; 
import TvCreate from "../controllers/tv.controllers.js";
const router=Router() 
router.route("/tv")
    .get(TvCreate.Redall);   
router.route('/tv/:year') 
    .get(TvCreate.Yearall) 
router.route("/tv/:title")
    .delete(TvCreate.deletetv)
    .patch(TvCreate.update)
export default router
