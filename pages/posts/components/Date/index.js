import { formatDate } from 'src/library/utils/format';

const DateComponent = ({ dateString, options, ...rest }) => {
	if (!dateString) return;
	return (
		<time dateTime={dateString} {...rest}>
			{formatDate(dateString, options)}
		</time>
	);
};

export default DateComponent;
