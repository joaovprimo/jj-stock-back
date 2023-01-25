import { Request, Response, NextFunction } from "express";
function testeMid (req:Request, res:Response, next:NextFunction){
    let { name, email, password, storesId } = req.body;
console.log(name)

}

export { testeMid }