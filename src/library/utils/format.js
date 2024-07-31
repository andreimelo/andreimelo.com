export function formatDate(
	dateString,
	options = { year: 'numeric', month: 'long', day: 'numeric' },
){
	const { format } = new Intl.DateTimeFormat('en-US', options);
	return format(new Date(dateString));
}
