import Typewriter from '../Typewriter';
import {
	home_wrapper,
	coding_isometric,
	button_medium,
} from '../../../../../styles/pages_style/home.module.css';
import { STRINGS } from '../../../common/constants/strings';
import { IMAGES } from '../../constants/images';
import { downloadPdf } from '../../../utils/pdf';
import Button from '../Button';
import Card from '../Card';
import WhatIdo from '../WhatIdo';

function Home(){
	return (
		<>
		<section id={STRINGS.NAVIGATION_DATA[0]} className={home_wrapper}>
			<Typewriter
				title={STRINGS.TYPEWRITER.TITLE}
				name={STRINGS.TYPEWRITER.NAME}
				data={STRINGS.TYPE_DATA}
			>
				<Button
					title='Download Resume'
					variant={button_medium}
					onClick={() => downloadPdf()}
				/>
			</Typewriter>
			<img
				className={coding_isometric}
				src={IMAGES.CODING_ISO}
				alt='codingIsometric'
			/>
		</section>
		<WhatIdo/>
		</>
	);
}

export default Home;
