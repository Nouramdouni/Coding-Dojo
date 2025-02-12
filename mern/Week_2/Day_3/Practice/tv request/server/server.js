import express from "express"  
import router from "./routes/tv.routes.js";
const app = express()
const PORT = 5000 
app.use(express.json())  
app.use("/api", router)
app.listen(PORT, () => console.log(`Server is Running and ready for REQ and RES ${PORT}`))