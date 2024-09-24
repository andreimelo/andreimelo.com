import { useState, useRef, useEffect } from 'react';

const useScrollReveal = () => {
	const [
		isVisible,
		setIsVisible,
	] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
					else {
						setIsVisible(false);
					}
				});
			},
			{ threshold: 0.2 },
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, []);

	return { isVisible, ref: elementRef };
};

export default useScrollReveal;
