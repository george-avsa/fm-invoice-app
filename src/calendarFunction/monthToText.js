export default function (monthDate) {
    const monthTextAll = monthDate.toString();
    const monthMatch = monthTextAll?.match(/\w+\s(\w+)\s\d+\s(\d+)/);
    return `${monthMatch[1]} ${monthMatch[2]}`
}