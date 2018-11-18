export function createCard(data) {
    fetch('http://localhost/fetchTest.php', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(txt => {
        console.log(txt.text()); })
    .catch(err => console.log(err));
}