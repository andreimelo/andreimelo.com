import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import {
	nav_wrapper,
	nav_container,
	mylogo,
	nav_item_container,
	nav_item,
} from 'styles/components_style/navigation.module.css';
import { Link } from 'react-scroll';
import { useRouter } from 'next/router';

function Navigation({ logo, data }){
	const router = useRouter();
	const isBlogPostsPath = router.pathname === '/posts';
	return (
		<div className={nav_wrapper}>
			<nav className={nav_container}>
				<img className={mylogo} src={logo} alt='my Logo' />
				<div className={nav_item_container}>
					{!isBlogPostsPath &&
						data.map((item, i) => {
							return (
								item && (
									<div key={i} className={nav_item}>
										<Link
											href={`#${item}`}
											smooth
											offset={-70}
											hashSpy
											to={item}
										>
											{item}
										</Link>
									</div>
								)
							);
						})}
					{isBlogPostsPath &&
						data.map((item, i) => {
							return (
								item && (
									<div key={i} className={nav_item}>
										<NextLink href={`/`}>{item}</NextLink>
									</div>
								)
							);
						})}
					<div className={nav_item}>
						<NextLink href='/posts'>Blog </NextLink>
					</div>
				</div>
			</nav>
		</div>
	);
}

Navigation.propTypes = {
	logo : PropTypes.string,
	data : PropTypes.array.isRequired,
};

Navigation.defaultProps = {
	logo : '',
	data : [],
};

export default React.memo(Navigation);
