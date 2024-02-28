import React from 'react';
import { client } from 'src/library/contentful/client';
import PostCard from 'pages/posts/components/PostCard';
import { container } from 'styles/components_style/postcard.module.css';

const Post = ({ posts }) => {
	console.log(posts, 'pekpek');
	return (
		<section className='section'>
			<div className='container'>
				<ul className={container}>
					{posts.map((post, i) => (
						<PostCard key={post.fields.slug} post={post} />
					))}
				</ul>
			</div>
		</section>
	);
};

export const getStaticProps = async () => {
	const response = await client.getEntries({ content_type: 'blog' });
	return {
		props : {
			posts      : response.items,
			revalidate : 60,
		},
	};
};

export default Post;
