import { getPostById } from "@/app/lib/data";
import { NextResponse } from "next/server";

export const GET = async(req:Request, res:Response) =>{
 const id = req.url.split("blogs/")[1];
 const post = getPostById(id);
 if(!post){
  return NextResponse.json({
   message: "Post not found"
  }, {
   status: 404
  })
 }else{
  return NextResponse.json({
   message: "Success", post
  }, {
   status: 200
  })
 }
}