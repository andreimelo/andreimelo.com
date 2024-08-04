import React from 'react';
import Typewriter from 'src/library/common/components/Typewriter';
import {
	home_wrapper,
	coding_isometric,
	button_medium,
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
						title={'Download Resume'}
						altImage={'buttonIcon'}
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
		</div>
	);
}

export default Home;
