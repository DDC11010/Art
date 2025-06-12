var items = [
    {src: '../Content/item-list/21.jpeg', description: '1 Description for Item  1 Description for Item  1 Description for Item  1 Description for Item 1'},
    {src: '../Content/item-list/5.jpg', description: '2 Description for Item  2 Description for Item  2 Description for Item  2 Description for Item 2'},
    {src: '../Content/item-list/24.jpeg', description: '3 Description for Item  3 Description for Item  3 Description for Item  3 Description for Item 3'},    
    {src: '../Content/item-list/10.jpg', description: '4 Description for Item  4 Description for Item  4 Description for Item  4 Description for Item '},
    {src: '../Content/item-list/11.jfif', description: '5 Description for Item  5 Description for Item  5 Description for Item  5 Description for Item '},
    {src: '../Content/item-list/23.jpeg', description: '6 Description for Item  6 Description for Item  6 Description for Item  6 Description for Item '},
    {src: '../Content/item-list/14.jfif', description: '7 Description for Item  7 Description for Item  7 Description for Item  7 Description for Item '},
    {src: '../Content/item-list/22.jpeg', description: '8 Description for Item  8 Description for Item  8 Description for Item  8 Description for Item '},
    {src: '../Content/item-list/13.jpeg', description: '9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item9 Description for Item 9'},
    {src: '../Content/item-list/25.jpeg', description: '10 Description for Item 10 Description for Item 10 Description for Item 10 Description for Item '},
    {src: '../Content/item-list/26.jpeg', description: '11 Description for Item 11 Description for Item 11 Description for Item 11 Description for Item '},
    {src: '../Content/item-list/27.jpeg', description: '12 Description for Item 12 Description for Item 12 Description for Item 12 Description for Item'},
    {src: '../Content/item-list/28.jpeg', description: '13 Description for Item 13 Description for Item 13 Description for Item 13 Description for Item '},
    {src: '../Content/item-list/29.jpeg', description: '14 Description for Item 14 Description for Item 14 Description for Item 14 Description for Item '},
    {src: '../Content/item-list/30.jpeg', description: '15 Description for Item 15 Description for Item 15 Description for Item 15 Description for Item '},
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


window.onload = function() {
    var itemIndex = getParameterByName('item') - 1;  // 'item' is the URL parameter
    if (itemIndex >= 0 && itemIndex < items.length) {
        var itemDisplay = document.getElementById('item-display');
        var item = items[itemIndex];
        itemDisplay.innerHTML = '<img src="' + item.src + '"><p>' + item.description + '</p>';
        itemDisplay.classList.add('show'); // Add the 'show' class to trigger the fade-in effect
    }
};