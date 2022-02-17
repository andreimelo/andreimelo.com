import { projects_wrapper } from 'styles/pages_style/projects.module.css';
import { STRINGS } from 'src/library/common/constants/strings';

function Projects(){
	return (
		<section id={STRINGS.NAVIGATION_DATA[2]} className={projects_wrapper}>
			<h2>{STRINGS.NAVIGATION_DATA[2]}</h2>
		</section>
	);
}

export default Projects;
