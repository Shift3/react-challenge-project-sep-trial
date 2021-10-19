
export const convertUnixtoHHMMSS = (date) => {
    const hours = `${date.getHours()}`.padStart(2, '0');
    const minutes = `${date.getMinutes()}`.padStart(2, '0');
    const seconds = `${date.getSeconds()}`.padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}