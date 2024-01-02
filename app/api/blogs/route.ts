import { addPost } from './../../lib/data';
import { getPosts } from "@/app/lib/data";
import { NextResponse } from "next/server";



export const GET = async (req: Request, res: Response) => {
 try {
  const posts = getPosts();
  return NextResponse.json({
   message: 'Success', posts
  },{
   status: 200
  })
 } catch (err) {
  return NextResponse.json({
   message: 'Error', err
  }, {
   status: 500,
  })
 }
}


export const POST = async (req: Request, res: Response) => {
 const {title, desc} = await req.json();
 try {
  const post = {
   title : title,
   desc : desc,
   date : new Date(),
   id: Date.now().toString()
  }
  addPost(post);
  return NextResponse.json({
   message: 'Success', post
  },{
   status: 201
  })
 }catch (err) {
  return NextResponse.json({
   message: 'Error', err
  }, {
   status: 500,
  })
 }
}

