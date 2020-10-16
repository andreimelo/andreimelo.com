import PropTypes from 'prop-types';

function Button({ variant, title, onClick }){
	return (
		<button className={variant} onClick={onClick}>
			{title}
		</button>
	);
}

Button.propTypes = {
	variant : PropTypes.string,
	title   : PropTypes.string,
	onClick : PropTypes.func.isRequired,
};

export default React.memo(Button);
