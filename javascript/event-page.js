var items = [
    {src: 'Content/img-art/silde-img1.jpg', description: 'Description for ItemDescription for ItemDescription for ItemDescription for Item 1', date: '2024/03/05'},
    {src: 'Content/img-art/img5.jpg', description: 'Description for ItemDescription for ItemDescription for ItemDescription for Item 2', date: '2024/03/06'},
    {src: 'Content/img-art/silde-img3.jpg', description: 'Description for ItemDescription for ItemDescription for ItemDescription for Item 3', date: '2024/03/07'},
    {src: 'Content/img-art/silde-img4.jpg', description: 'Description for ItemDescription for ItemDescription for ItemDescription for Item 4', date: '2024/03/08'}
    // Add more items as needed
];

window.onload = function() {
    var itemIndex = getParameterByName('item') - 1;  // 'item' is the URL parameter
    if (itemIndex >= 0 && itemIndex < items.length) {
        var itemDisplay = document.getElementById('item-display');
        var item = items[itemIndex];
        itemDisplay.innerHTML = '<img src="' + item.src + '"><p>' + item.description + '</p>';

        // Display date section for the selected item
        var dateSection = document.getElementById('date-section');
        var dateList = document.createElement('ul');

        // Filter items to find the item with the same src as the selected item
        var matchingItem = items.find(function(item) {
            return item.src === items[itemIndex].src;
        });

        // If a matching item is found, add its date to the date list
        if (matchingItem) {
            var listItem = document.createElement('li');
            listItem.textContent = 'Date: ' + matchingItem.date;
            dateList.appendChild(listItem);
        }

        // Append the list to the date section
        dateSection.appendChild(dateList);
    }
};

// Function to get URL parameter by name
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the element with the "fade-in" class
    var itemDisplay = document.querySelector("#item-display");

    // Set a timeout to add the "show" class after 5 seconds
    setTimeout(function() {
        itemDisplay.classList.add("show");
    }, 1); // 5000 milliseconds = 5 seconds
});
