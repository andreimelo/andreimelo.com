import { contact_wrapper } from 'styles/pages_style/contact.module.css';
import { STRINGS } from 'src/library/common/constants/strings';

function Contact(){
	return (
		<section id={STRINGS.NAVIGATION_DATA[3]} className={contact_wrapper}>
			<h2>{STRINGS.NAVIGATION_DATA[3]}</h2>
		</section>
	);
}

export default Contact;
