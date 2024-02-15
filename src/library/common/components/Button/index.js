import PropTypes from 'prop-types';

function Button({ variant, title, onClick, imgClass, imgSrc, altImage }){
	return (
		<button className={variant} onClick={onClick}>
			{title}
			{imgSrc && <img className={imgClass} src={imgSrc} alt={altImage} />}
		</button>
	);
}

Button.propTypes = {
	variant  : PropTypes.string,
	title    : PropTypes.string,
	onClick  : PropTypes.func.isRequired,
	imgClass : PropTypes.string,
	imgSrc   : PropTypes.string,
	altImage : PropTypes.string,
};

Button.defaultProps = {
	variant  : '',
	title    : '',
	onClick  : () => {},
	imgClass : '',
	imgSrc   : '',
	altImage : '',
};

export default React.memo(Button);
