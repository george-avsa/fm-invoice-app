export function dateToText(date, format='dotted') {
    const day = date.getDate()+1 < 10 ? `0${date.getDate()}` : date.getDate();
    const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
    const dateString = date.toString();
    const dateMatch = dateString.match(/\w+\s(\w+)\s(\d+)\s(\d+)/);
    return format === 'dotted' 
        ? `${day}.${month}.${date.getFullYear()}` 
        : `${dateMatch[2]} ${dateMatch[1]} ${dateMatch[3]}`;
}