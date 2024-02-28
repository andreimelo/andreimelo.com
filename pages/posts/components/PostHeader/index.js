import React from 'react';
import ContentfulImage from 'pages/posts/components/ContentfulImage';
import DateComponent from '../Date';

const PostHeader = ({ post }) => {
	const { title, picture, date } = post.fields;
	const image = picture;
	return (
		<div>
			<h2>{title}</h2>

			<ContentfulImage
				alt={`Picture for ${title}`}
				src={image.fields.file.url}
				width={image.fields.file.details.image.width}
				height={image.fields.file.details.image.height}
				placeholder='blur'
				layout='responsive'
				blurDataURL={image.fields.file.url}
			/>
			<DateComponent dateString={date} />
		</div>
	);
};

export default PostHeader;
