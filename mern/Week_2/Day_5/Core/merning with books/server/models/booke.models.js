import { model,Schema } from "mongoose"
const Books= new Schema(
    {
        title:{ 
            type: String,
            required: [true, "First title is required"],
            minlength: [2, "First  title be at least 2 characters long"] , 
            maxlength:[255,"max tile be 255 characters long  "]
        } , 
        outhor:{
            type: String,
            required: [true, "First  outhor is required"],
            minlength: [2, "First   outhor be at least 2 characters long"] , 
            maxlength:[255,"max outhor be 255 characters long  "]
        } , 
        page:{
            type:String,
            require:[ true ,"first page required" ], 
            minlength:[1,"first page be least 1 charactes long"] 

        }, 
        isAvailable:{  
            type:Boolean,
            default:false
        },

    } ,{ timestamps: true }
)
const Book=model("book",Books) 
export default Book