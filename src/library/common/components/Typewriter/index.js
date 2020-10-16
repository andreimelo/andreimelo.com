import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
	typewriter_name,
	typewriter_title,
	typewriter_desc,
	typewriter_wrapper,
	typewriter_cursor,
} from '../../../../../styles/components_style/typewriter.module.css';

function Typewriter({ title, name, data, children }){
	const [
		text,
		setText,
	] = useState('');
	const [
		isDeleting,
		setIsDeleting,
	] = useState(false);
	const [
		loop,
		setLoop,
	] = useState(0);
	const [
		speed,
		setSpeed,
	] = useState(150);

	useEffect(
		() => {
			setTimeout(() => handleType(), speed);
		},
		[
			text,
			isDeleting,
			loop,
		],
	);

	function handleType(){
		const i = loop % data.length;
		const fullText = data[i];
		setText(

				isDeleting ? fullText.substring(0, text.length - 1) :
				fullText.substring(0, text.length + 1),
		);
		setSpeed(

				isDeleting ? 30 :
				150,
		);

		if (!isDeleting && text === fullText) {
			setTimeout(() => setIsDeleting(true), 150);
		}
		else if (isDeleting && text === '') {
			setIsDeleting(false);
			setLoop(loop + 1);
		}
	}
	return (
		<React.Fragment>
			<div className={typewriter_wrapper}>
				<div className={typewriter_title}>{title}</div>
				<div className={typewriter_name}>{name}</div>
				<div className={typewriter_desc}>
					{text}
					<span id={typewriter_cursor} />
				</div>
				{children}
			</div>
		</React.Fragment>
	);
}

Typewriter.propTypes = {
	data     : PropTypes.array.isRequired,
	title    : PropTypes.string,
	name     : PropTypes.string,
	children : PropTypes.any,
};

export default React.memo(Typewriter);
