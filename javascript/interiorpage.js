var items = [
    {src: 'Content/img-content/1.jpg', description: 'Description for Item 1'},
    {src: 'Content/img-content/2.jpeg', description: 'Description for Item 2'},
    {src: 'Content/img-content/3.jpg', description: 'Description for Item 3'},
    {src: 'Content/img-content/4.jpg', description: 'Description for Item 4'},
    {src: 'Content/img-content/5.jpg', description: 'Description for Item 5'},
    {src: 'Content/img-content/6.jpg', description: 'Description for Item 6'},
    {src: 'Content/img-content/7.jpg', description: 'Description for Item 7'},
    {src: 'Content/img-content/8.webp', description: 'Description for Item 8'},
    {src: 'Content/img-content/9.jpg', description: 'Description for Item 9'},
    {src: 'Content/img-content/10.jpg', description: 'Description for Item 10'},
    {src: 'Content/img-content/13.jpg', description: 'Description for Item 11'},
    {src: 'Content/img-content/15.jpg', description: 'Description for Item 12'}
    // Add more items as needed
];

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.onload = function() {
    var itemIndex = getParameterByName('item') - 1;  // 'item' is the URL parameter
    if (itemIndex >= 0 && itemIndex < items.length) {
        var itemDisplay = document.getElementById('item-display');
        var item = items[itemIndex];
        itemDisplay.innerHTML = '<img src="' + item.src + '"><p>' + item.description + '</p>';
    }
};
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the element with the "fade-in" class
    var itemDisplay = document.querySelector("#item-display");

    // Set a timeout to add the "show" class after 5 seconds
    setTimeout(function() {
        itemDisplay.classList.add("show");
    }, 1); // 5000 milliseconds = 5 seconds
});
