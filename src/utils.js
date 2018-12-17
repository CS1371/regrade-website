export function formatDate(dateStr) {
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    var date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
}
