export const convertUnixToTime = (unixTimestamp, timezone) => {
    const date = new Date((unixTimestamp + timezone) * 1000);
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
};