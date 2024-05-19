export function formatDate(isoDateString) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const date = new Date(isoDateString);
    const day = date.getDate();
    const month = months[date.getMonth()];

    const today = new Date();
    const isToday =
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

    if (isToday) {
        return `Today ${day} ${month}`;
    } else {
        return `${day} ${month}`;
    }
}
