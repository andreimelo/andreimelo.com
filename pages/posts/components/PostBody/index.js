import React from 'react';
import RichText from 'src/library/common/components/RichText';

const PostBody = ({ post }) => {
	const { content } = post.fields;

	return (
		<div>
			<RichText content={content} />
		</div>
	);
};

export default PostBody;
