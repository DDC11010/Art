document.addEventListener('DOMContentLoaded', function() {
    var loadMoreButton = document.querySelector('#load-more2');
    var itemsContainer = document.querySelector('.items2');
    var footer = document.querySelector('#Footer'); // Selecting the footer element

    var items = [
        '<div class="item"><a href="interiorpage.html?item=4"><img src="Content/img-content/4.jpg"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=5"><img src="Content/img-content/5.jpg"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=6"><img src="Content/img-content/6.jpg"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=7"><img src="Content/img-content/7.jpg"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=8"><img src="Content/img-content/8.webp"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=9"><img src="Content/img-content/9.jpg"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=10"><img src="Content/img-content/10.jpg"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=11"><img src="Content/img-content/13.jpg"></a></div>',
        '<div class="item"><a href="interiorpage.html?item=12"><img src="Content/img-content/15.jpg"></a></div>'

        // Add more items as needed...
    ];

    var currentItemIndex = 0;

    function generateItems() {
        var newItems = '';
        for (var i = 0; i < 3; i++) {
            if (currentItemIndex < items.length) {
                newItems += items[currentItemIndex];
                currentItemIndex++;
            }
        }
        return newItems;
    }

    loadMoreButton.addEventListener('click', function() {
        var newItems = generateItems();
        itemsContainer.innerHTML += newItems;
        // Add bottom margin between load more button and footer
        footer.style.marginTop = '0px';
    });
});





