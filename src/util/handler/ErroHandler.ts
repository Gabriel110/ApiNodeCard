import {ErrorRequestHandler} from 'express';
import {ValidationError} from 'yup';

interface ValidationErrors {
  [key:string]:string[];
}

const erroHandler:ErrorRequestHandler = (error,req,res,next)=>{
  console.error(error);
  if(error instanceof ValidationError){
    let errors:ValidationErrors = {}
    error.inner.forEach( e =>{
      errors[e.path!!] = e.errors;
    });
    return res.status(400).json({message:'Validations fails',errors})
  }
  return res.status(500).json({message:'Internal server error'});
}

export default erroHandler;