import React from 'react';
import ContentfulImage from 'pages/posts/components/ContentfulImage';
// import DateComponent from '../Date';
import {
	post_image_container,
	post_image_bg,
} from '../../../../styles/components_style/postheader.module.css';

const PostHeader = ({ post }) => {
	if (!post) return;
	const { title, picture } = post.fields;
	const image = picture;
	return (
		<div>
			<h2>{title}</h2>
			<div className={post_image_bg}>
				<div className={post_image_container}>
					<ContentfulImage
						alt={`Picture for ${title}`}
						src={image.fields.file.url}
					/>
				</div>
			</div>
			{/* <DateComponent dateString={date} /> */}
		</div>
	);
};

export default PostHeader;
