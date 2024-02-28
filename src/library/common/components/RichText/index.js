import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';
const options = {
	renderMark : {
		[MARKS.CODE]: (text) => {
			return (
				<pre>
					<code>{text}</code>
				</pre>
			);
		},
	},
};
const RichText = ({ content }) => {
	return <div>{documentToReactComponents(content, options)}</div>;
};

export default RichText;
