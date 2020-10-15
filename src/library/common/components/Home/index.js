import Typewriter from '../Typewriter';
import {
	home_wrapper,
	coding_isometric,
} from '../../../../../styles/pages_style/home.module.css';
import { STRINGS } from '../../../common/constants/strings';
import { IMAGES } from '../../constants/images';

function Home(){
	return (
		<section id={STRINGS.NAVIGATION_DATA[0]} className={home_wrapper}>
			<Typewriter
				title={STRINGS.TYPEWRITER.TITLE}
				name={STRINGS.TYPEWRITER.NAME}
				data={STRINGS.TYPE_DATA}
			/>
			<img
				className={coding_isometric}
				src={IMAGES.CODING_ISO}
				alt='codingIsometric'
			/>
		</section>
	);
}

export default Home;
