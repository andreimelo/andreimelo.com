import React from 'react';
import {
	footer_wrapper,
	footer_container,
	item,
} from 'styles/components_style/footer.module.css';
import IconLink from 'src/library/common/components/IconLink';
import { STRINGS } from 'src/library/common/constants/strings';
import { IMAGES } from 'src/library/common/constants/images';

function Footer(){
	return (
		<footer className={footer_wrapper}>
			<div className={footer_container}>
				<div>
					<IconLink
						href={STRINGS.LINK.NEXTJS}
						target={'_blank'}
						rel={'noopener noreferrer'}
						desc={STRINGS.BUILT_WITH_NEXTJS}
						source='none'
					/>
				</div>
				<div>
					<IconLink
						href={STRINGS.LINK.GITHUB}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={item}
						source={IMAGES.GITHUB}
					/>
					<IconLink
						href={STRINGS.LINK.LINKEDIN}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={item}
						source={IMAGES.LINKED_IN}
					/>
					<IconLink
						href={STRINGS.LINK.TWITTER}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={item}
						source={IMAGES.TWITTER}
					/>
					<IconLink
						href={STRINGS.LINK.DEV}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={item}
						source={IMAGES.DEV}
					/>
					<IconLink
						href={STRINGS.LINK.INSTAGRAM}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={item}
						source={IMAGES.INSTAGRAM}
					/>
					<IconLink
						href={STRINGS.LINK.FACEBOOK}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={item}
						source={IMAGES.FACEBOOK}
					/>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
