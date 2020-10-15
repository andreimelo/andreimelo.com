import {
	footer_wrapper,
	footer_container,
	item_made,
	item_container,
	item,
} from '../../../../../styles/components_style/footer.module.css';
import IconLink from '../IconLink';
import { STRINGS } from '../../constants/strings';
import { IMAGES } from '../../constants/images';

function Footer(){
	return (
		<React.Fragment>
			<footer className={footer_wrapper}>
				<div className={footer_container}>
					<div className={item_made}>
						<IconLink
							href={'https://nextjs.org/'}
							target={'_blank'}
							rel={'noopener noreferrer'}
							desc={STRINGS.BUILT_WITH_NEXTJS}
						/>
					</div>
					<div className={item_container}>
						<IconLink
							href={'https://github.com/andreimelo'}
							target={'_blank'}
							rel={'noopener noreferrer'}
							className={item}
							source={IMAGES.GITHUB}
						/>
						<IconLink
							href={'https://www.linkedin.com/in/andrei-melo-4a4635191/'}
							target={'_blank'}
							rel={'noopener noreferrer'}
							className={item}
							source={IMAGES.LINKED_IN}
						/>
						<IconLink
							href={'https://twitter.com/imdreimelo'}
							target={'_blank'}
							rel={'noopener noreferrer'}
							className={item}
							source={IMAGES.TWITTER}
						/>
					</div>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default Footer;
