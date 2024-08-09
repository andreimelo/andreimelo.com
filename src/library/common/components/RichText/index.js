import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';
import { code_editor } from 'styles/components_style/richtext.module.css';

const options = {
	renderText : (text) => {
		return text.split('\n').flatMap((line, i) => [
			i > 0 && <br key={i} />,
			line,
		]);
	},
	renderMark : {
		[MARKS.CODE]: (text) => {
			return <code className={code_editor}>{text}</code>;
		},
	},
};
const RichText = ({ content }) => {
	return <div>{documentToReactComponents(content, options)}</div>;
};

export default RichText;
