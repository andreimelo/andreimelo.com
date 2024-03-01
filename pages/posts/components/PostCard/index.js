import React from 'react';
import Link from 'next/link';
import ContentfulImage from 'pages/posts/components/ContentfulImage';
import DateComponent from '../Date';
import { post_container, container } from 'styles/components_style/postcard.module.css';

const PostCard = ({ keyPost, post }) => {
	if (!post) return;
	const { title, slug, excerpt, picture, date } = post.fields;
	const image = picture;
	return (
		<div key={keyPost} className={post_container}>
			<Link href={`/posts/${slug}`}>
				<div>
					<ContentfulImage
						alt={`Picture for ${title}`}
						src={image.fields.file.url}
						width={image.fields.file.details.image.width}
						height={image.fields.file.details.image.height}
						placeholder='blur'
						layout='responsive'
						blurDataURL={image.fields.file.url}
					/>
					<div className={container}>
						<h3>{title}</h3>
						<DateComponent dateString={date} />
					</div>
					<div>{excerpt}</div>
				</div>
			</Link>
		</div>
	);
};

export default PostCard;
