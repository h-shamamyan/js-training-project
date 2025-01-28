document.body.innerHTML += '<button id="alertButton">Click Me!</button>';
document.getElementById('alertButton').addEventListener('click', () => {
    alert('Button clicked!');
});