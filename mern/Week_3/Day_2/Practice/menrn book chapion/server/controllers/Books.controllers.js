import Book from "../models/booke.models.js";
const NewBooks = {
    AddBooks: async (req, res,next) => {
        try {
            const NewBook = await Book.create(req.body)
            res.json(NewBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err) 
            next(err)
        }
    },
    AllBooks: async (req, res,next) => {
        try {
            const allBook = await Book.find()
            res.json(allBook)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err) 
            next(err)
        }
    },  
    OneBook: async(req,res,next)=>{
        try {
            const OneBook = await Book.findById(req.params.id)
            res.json(OneBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err) 
            next(err)
        }
    
    },

    EditBooks: async (req, res,next) => {  
        const options = {
            new: true,
            runValidators: true
        }
        try {
            const EditBook=await Book.findByIdAndUpdate(req.params.id,req.body,options) 
            res.json(EditBook)
        }

        catch (err) {
            console.log(err)
            res.status(400).json(err) 
            next(err)
        }
    } , 
    deletBooks:async (req,res,next)=>{ 
        try{ 
            const deletBook= await Book.findByIdAndDelete(req.params.id) 
            res.json({deletBook})
        }  
        catch (err){
            console.log(err)  
            res.status(400).json(err) 
            next(err)
            

        }
    }

}

export default NewBooks