export function formatDate(dateStr: string): string {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
}
