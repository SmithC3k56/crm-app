type Post = {
 id: string,
 title: string,
 desc: string,
 date: Date
}

let Posts: Post[] = [];


export const getPosts = () => Posts;


export const addPost = (post: Post) => {
 Posts.push(post);
}

export const deletePost = (id: string) => {
 Posts = Posts.filter((post) => post.id !== id);

}

export const updatePost = (id: string, tittle: string, desc: string) => {
 const post = Posts.find((post) => post.id === id);
 if (post) {
  post.title = tittle;
  post.desc = desc;
 } else {
  throw new Error("Post not found");
 }
}

export const getPostById = (id: string) => Posts.find((post) => post.id === id);