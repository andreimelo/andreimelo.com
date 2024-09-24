import {
	about_wrapper,
	about_article,
	my_emoticon,
	avatar,
	about_description,
} from 'styles/pages_style/about.module.css';
import { motion } from 'framer-motion';
import useScrollReveal from 'src/library/hooks/useScrollReveal';
import { IMAGES } from 'src/library/common/constants/images';
import { STRINGS } from 'src/library/common/constants/strings';

function AboutMe(){
	const { isVisible, ref } = useScrollReveal();
	return (
		<section id={STRINGS.NAVIGATION_DATA[2]} className={about_wrapper}>
			<h2>{STRINGS.NAVIGATION_DATA[2]}</h2>
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 50 }}
				animate={

						isVisible ? { opacity: 1, y: 0 } :
						null
				}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<div className={avatar}>
					<img
						src={IMAGES.IOS_EMOTICON}
						className={my_emoticon}
						alt='myEmoticon'
					/>
				</div>
			</motion.div>

			<article className={about_article}>
				<p className={about_description}>
					{STRINGS.INTRO1} {STRINGS.INTRO2}
				</p>
			</article>
		</section>
	);
}

export default AboutMe;
