import React from 'react';
import PropTypes from 'prop-types';
import {
	nav_wrapper,
	nav_container,
	mylogo,
	nav_item_container,
	nav_item,
} from '../../../../../styles/components_style/navigation.module.css';
import { Link } from 'react-scroll';

function Navigation({ logo, data }){
	return (
		<div className={nav_wrapper}>
			<nav className={nav_container}>
				<img className={mylogo} src={logo} alt='my Logo' />
				<div className={nav_item_container}>
					{data.map((item, i) => (
						<div key={i} className={nav_item}>
							<Link smooth offset={-70} hashSpy to={item}>
								<a href={`#${item}`}>{item}</a>
							</Link>
						</div>
					))}
				</div>
			</nav>
		</div>
	);
}

Navigation.propTypes = {
	logo : PropTypes.string,
	data : PropTypes.array.isRequired,
};

export default React.memo(Navigation);
