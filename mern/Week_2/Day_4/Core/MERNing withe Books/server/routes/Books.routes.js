import NewBooks from "../controllers/Books.controllers.js"; 
import { Router } from "express";  
const router=Router()
router.route("/book") 
.post(NewBooks.AddBooks)  // ajoute 
.get(NewBooks.AllBooks) //affiche
router.route("/book/:id") 
.get(NewBooks.OneBook)  
.put(NewBooks.EditBooks) //edite
.delete(NewBooks.deletBooks)
export default router