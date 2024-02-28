import React from 'react';
import PropTypes from 'prop-types';
import { container } from 'styles/components_style/layoutprovider.module.css';

function LayoutProvider({ children }){
	return <main className={container}>{children}</main>;
}

LayoutProvider.propTypes = {
	children : PropTypes.node.isRequired,
};

export default React.memo(LayoutProvider);
