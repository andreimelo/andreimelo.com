import React from 'react';
import { client } from 'src/library/contentful/client';
import { useRouter } from 'next/router';
import PostHeader from './components/PostHeader';
import PostBody from './components/PostBody';
import Helmet from '../../src/library/common/components/Helmet';

const Post = ({ post, preview }) => {
	const router = useRouter();
	if (!post) return;
	const { title, description, picture } = post.fields;
	return (
		<section className='section'>
			{preview && <div>Preview Alert</div>}
			<div className='container'>
				<article>
					{
						router.isFallback ? <div>Loading....</div> :
						<div>
							<Helmet
								title={title}
								image={picture.fields.file.url}
								description={description}
							/>
							<PostHeader post={post} />
							<PostBody post={post} />
						</div>}
				</article>
			</div>
		</section>
	);
};

export const getStaticProps = async ({ params, preview = false }) => {
	// const cfClient = preview ? previewClient : client;
	const { slug } = params;
	const response = await client.getEntries({
		content_type  : 'blog',
		'fields.slug' : slug,
	});
	if (!response.items.length) {
		return {
			redirect : {
				destination : '/posts',
				permanent   : false,
			},
		};
	}

	return {
		props : {
			post       : response.items[0],
			preview,
			revalidate : 60,
		},
	};
};

export const getStaticPaths = async () => {
	const response = await client.getEntries({ content_type: 'blog' });
	const paths = response.items.map((item) => ({
		params : { slug: item.fields.slug },
	}));

	return {
		paths,
		fallback : true,
	};
};

export default Post;
