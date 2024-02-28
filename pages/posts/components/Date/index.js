import { formatDate } from 'src/library/utils/format';

const DateComponent = ({ dateString, options, ...rest }) => {
	return (
		<time dateTime={dateString} {...rest}>
			{formatDate(dateString, options)}
		</time>
	);
};

export default DateComponent;
