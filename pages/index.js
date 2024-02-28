import React from 'react';
import Helmet from 'src/library/common/components/Helmet';
import Home from 'src/library/common/components/Home';
import AboutMe from 'src/library/common/components/AboutMe';
// import Projects from '../src/library/common/components/Projects';
// import Contact from '../src/library/common/components/Contact';
import TechStack from 'src/library/common/components/TechStack';
import Footer from 'src/library/common/components/Footer';
import { STRINGS } from 'src/library/common/constants/strings';
import { IMAGES } from 'src/library/common/constants/images';

function IndexPage(){
	return (
		<div>
			<Helmet
				title={STRINGS.TITLE}
				titleContent={STRINGS.TITLE}
				image={IMAGES.UNSPLASH_BAG}
				description={STRINGS.INTRO2}
			/>
			<Home />
			<TechStack />
			<AboutMe />
			{/* <Projects/>
				<Contact/> */}
			<Footer />
		</div>
	);
}

export default IndexPage;
