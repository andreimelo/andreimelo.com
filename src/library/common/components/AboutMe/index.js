import {
	about_wrapper,
	about_article,
	my_emoticon,
	avatar,
} from 'styles/pages_style/about.module.css';
import { IMAGES } from 'src/library/common/constants/images';
import { STRINGS } from 'src/library/common/constants/strings';

function AboutMe(){
	return (
		<section id={STRINGS.NAVIGATION_DATA[2]} className={about_wrapper}>
			<h2>{STRINGS.NAVIGATION_DATA[2]}</h2>
			<div className={avatar}>
				<img src={IMAGES.IOS_EMOTICON} className={my_emoticon} alt='myEmoticon' />
			</div>
			<article className={about_article}>
				<p>
					{STRINGS.INTRO1} {STRINGS.INTRO2}
				</p>
			</article>
		</section>
	);
}

export default AboutMe;
