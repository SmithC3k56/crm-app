
import { title } from "@/components/primitives";


export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
		</div>
	);
}


// // This function gets called at build time
// export async function getStaticPaths() {
// 	// Call an external API endpoint to get posts
// 	const res = await fetch('https://.../posts')
// 	const posts = await res.json()

// 	// Get the paths we want to pre-render based on posts
// 	const paths = posts.map((post:any) => ({
// 			params: { id: post.id },
// 	}))

// 	// We'll pre-render only these paths at build time.
// 	// { fallback: false } means other routes should 404.
// 	return { paths, fallback: false }
// }


// // This also gets called at build time
// export async function getStaticProps({ params}: any) {
// 	// params contains the post `id`.
// 	// If the route is like /posts/1, then params.id is 1
// 	const res = await fetch(`https://.../posts/${params.id}`)
// 	const post = await res.json()

// 	// Pass post data to the page via props
// 	return { props: { post } }
// }