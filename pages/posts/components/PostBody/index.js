import React from 'react';
import RichText from 'src/library/common/components/RichText';
import { post_body_container } from '../../../../styles/components_style/postbody.module.css';

const PostBody = ({ post }) => {
	if (!post) return;
	const { content } = post.fields;
	return (
		<div className={post_body_container}>
			{content && <RichText content={content} />}
		</div>
	);
};

export default PostBody;
