import React from 'react';
import 'styles/globals.css';
import { motion, useScroll } from 'framer-motion';
import LayoutProvider from 'src/library/common/components/LayoutProvider';
import Navigation from 'src/library/common/components/Navigation';
import Footer from 'src/library/common/components/Footer';
import { IMAGES } from 'src/library/common/constants/images';
import { STRINGS } from 'src/library/common/constants/strings';
import { progressBar } from 'styles/pages_style/framer.module.css';

function MyApp({ Component, pageProps }){
	const { scrollYProgress } = useScroll();
	return (
		// rf
		<React.Fragment>
			<LayoutProvider>
				<motion.div className={progressBar} style={{ scaleX: scrollYProgress }} />
				<Navigation logo={IMAGES.MY_LOGO} data={STRINGS.NAVIGATION_DATA} />
				<Component {...pageProps} />
			</LayoutProvider>
			<Footer />
		</React.Fragment>
	);
}

export default MyApp;
