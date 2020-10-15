import PropTypes from 'prop-types';

function IconLink({ className, source, target, href, rel, desc }){
	return (
		<a href={href} target={target} rel={rel}>
			{
				desc ? desc :
				<img src={source} className={className} alt='socialLogo' />}
		</a>
	);
}

IconLink.propTypes = {
	className : PropTypes.string,
	source    : PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
	]).isRequired,
	target    : PropTypes.string,
	href      : PropTypes.string,
	rel       : PropTypes.string,
};

export default React.memo(IconLink);
