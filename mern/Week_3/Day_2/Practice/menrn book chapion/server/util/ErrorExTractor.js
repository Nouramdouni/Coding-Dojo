import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from './config/mongoose.config.js';
import router from './routes/Books.routes.js';
const app = express();
app.use(express.json(), cors());
app.use("/api",router)
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    err.name = "Not Found";
    next(err);
});
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    err.name = "Not Found";
    next(err);
});


app.use((err, req, res, next) => {
    console.log(err.statusCode);
    err.name === "ValidationError" ? err.statusCode = 400 : "";

    const normalizedError = {
        statusCode: err.statusCode || 500,
        message: err.message || 'Something went wrong',
        name: err.name || 'Server Error', 
        validationErrors:extractValidationErrors(err)
    };
  
    res.status(normalizedError.statusCode).json(normalizedError);
}); 
function extractValidationErrors(err) {
    const validationErrors = {};
    if (err.name === 'ValidationError') {
        for (const field in err.errors) {
            console.log(field);
            if (err.errors.hasOwnProperty(field)) {
                const errorMessage = err.errors[field].message;
                validationErrors[field] = errorMessage;
            }
        }
    }
    return validationErrors;
}


