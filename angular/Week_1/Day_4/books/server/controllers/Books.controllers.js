import Book from "../models/booke.models.js";
const NewBooks = {
    AddBooks: async (req, res) => {
        try {
            const NewBook = await Book.create(req.body)
            res.json(NewBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },
    AllBooks: async (req, res) => {
        try {
            const allBook = await Book.find()
            res.json(allBook)
        }
        catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    },  
    OneBook: async(req,res)=>{
        try {
            const OneBook = await Book.findById(req.params.id)
            res.json(OneBook)
        } catch (err) {
            console.log(err)
            res.status(400).json(err)
        }
    
    },

    EditBooks: async (req, res) => {  
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
        }
    } , 
    deletBooks:async (req,res)=>{ 
        try{ 
            const deletBook= await Book.findByIdAndDelete(req.params.id) 
            res.json({deletBook})
        }  
        catch (err){
            console.log(err)  
            res.status(400).json(err)

        }
    }

}

export default NewBooks