import 'styles/globals.css';
import LayoutProvider from 'src/library/common/components/LayoutProvider';
import Navigation from 'src/library/common/components/Navigation';
import { IMAGES } from 'src/library/common/constants/images';
import { STRINGS } from 'src/library/common/constants/strings';

function MyApp({ Component, pageProps }){
	return (
		<LayoutProvider>
			<Navigation logo={IMAGES.MY_LOGO} data={STRINGS.NAVIGATION_DATA} />
			<Component {...pageProps} />
		</LayoutProvider>
	);
}

export default MyApp;
