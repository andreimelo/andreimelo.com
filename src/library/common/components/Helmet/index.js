import Head from 'next/head';
import PropTypes from 'prop-types';

function Helmet({ title, titleContent, image, description }){
	return (
		<Head>
			<title>{title}</title>
			<meta property='og:title' content={titleContent} />
			<meta property='og:image' content={image} />
			<meta property='og:description' content={description} />
		</Head>
	);
}

Helmet.propTypes = {
	title        : PropTypes.string.isRequired,
	titleContent : PropTypes.string.isRequired,
	image        : PropTypes.string,
	description  : PropTypes.string,
};

Helmet.defaultProps = {
	title        : '',
	titleContent : '',
	image        : '',
	description  : '',
};

export default React.memo(Helmet);
