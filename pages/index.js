import Helmet from 'src/library/common/components/Helmet';
import LayoutProvider from 'src/library/common/components/LayoutProvider';
import Navigation from 'src/library/common/components/Navigation';
import Home from 'src/library/common/components/Home';
import AboutMe from 'src/library/common/components/AboutMe';
// import Projects from '../src/library/common/components/Projects';
// import Contact from '../src/library/common/components/Contact';
import WhatIdo from 'src/library/common/components/WhatIdo';
import Footer from 'src/library/common/components/Footer';
import { STRINGS } from 'src/library/common/constants/strings';
import { IMAGES } from 'src/library/common/constants/images';

function IndexPage(){
	return (
		<React.Fragment>
			<Helmet
				title={STRINGS.TITLE}
				titleContent={STRINGS.TITLE}
				image={IMAGES.UNSPLASH_BAG}
				description={STRINGS.INTRO2}
			/>
			<Navigation logo={IMAGES.MY_LOGO} data={STRINGS.NAVIGATION_DATA} />
			<LayoutProvider>
				<Home />
				<WhatIdo />
				<AboutMe />

				{/* <Projects/>
				<Contact/> */}
			</LayoutProvider>
			<Footer />
		</React.Fragment>
	);
}

export default IndexPage;
