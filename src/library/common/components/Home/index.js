import React from 'react';
import Typewriter from 'src/library/common/components/Typewriter';
import {
	home_wrapper,
	coding_isometric,
	button_medium,
	icon,
} from 'styles/pages_style/home.module.css';
import { STRINGS } from 'src/library/common/constants/strings';
import { IMAGES } from 'src/library/common/constants/images';
import { downloadPdf } from 'src/library/helpers/pdf';
import Button from 'src/library/common/components/Button';

function Home(){
	return (
		<div>
			<section id={STRINGS.NAVIGATION_DATA[0]} className={home_wrapper}>
				<Typewriter
					title={STRINGS.TYPEWRITER.TITLE}
					name={STRINGS.TYPEWRITER.NAME}
					data={STRINGS.TYPE_DATA}
				>
					<Button
						imgSrc={IMAGES['RESUME_WHITE']}
						altImage={'buttonIcon'}
						variant={button_medium}
						imgClass={icon}
						onClick={() => downloadPdf()}
					/>
				</Typewriter>
				<img
					className={coding_isometric}
					src={IMAGES.CODING_ISO}
					alt='codingIsometric'
				/>
			</section>
		</div>
	);
}

export default Home;
