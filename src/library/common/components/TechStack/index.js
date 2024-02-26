import React from 'react';
import { STRINGS } from 'src/library/common/constants/strings';
import Card from 'src/library/common/components/Card';
import { techStackImageData } from '../../constants/tech';

function TechStack(){
	return (
		<section id={STRINGS.NAVIGATION_DATA[1]}>
			<h2>{STRINGS.NAVIGATION_DATA[1]}</h2>
			<hr />
			<Card data={techStackImageData} />
			<hr />
		</section>
	);
}

export default TechStack;
