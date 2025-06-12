document.querySelector('.filter-btn').addEventListener('click', function() {
    var filterOptions = document.querySelector('.filter-options');
    if (filterOptions.style.display === 'none' || filterOptions.style.display === '') {
      filterOptions.style.display = 'block';
    } else {
      filterOptions.style.display = 'none';
    }
  });
  
  function filterItems(option) {
    // Add your filtering logic here
    console.log('Filtering items by: ' + option);
  }

  
  var itemIndex = 0;

document.querySelector('#load-more').addEventListener('click', function() {
    var items = document.querySelector('.items');
    var newItems = generateItems();
    items.innerHTML += newItems;
});







// JavaScript (script.js)
document.addEventListener('DOMContentLoaded', function() {
  var filterButton = document.querySelector('.filter-btn');
  var filterOptions = document.querySelector('.filter-options');


    // Hide filter options when the page first loads
    filterOptions.style.left = '-35.7em';

  // Toggle filter options when the filter button is clicked
  filterButton.addEventListener('click', function() {
      if (filterOptions.style.left === '-35.7em') {
          filterOptions.style.left = ''; // Adjust this value as needed
      } else {
          filterOptions.style.left = '-35.7em'; // Hide off-screen
      }
  });
});


var items = [
  '<div class="item"><a href="itemspage.html?item=4"><img src="/Content/item-list/10.jpg" alt="Item 4"></a></div>',
  '<div class="item"><a href="itemspage.html?item=5"><img src="/Content/item-list/11.jfif" alt="Item 5"></a></div>',
  '<div class="item"><a href="itemspage.html?item=6"><img src="/Content/item-list/23.jpeg" alt="Item 6"></a></div>',
  '<div class="item"><a href="itemspage.html?item=7"><img src="/Content/item-list/14.jfif" alt="Item 7"></a></div>',
  '<div class="item"><a href="itemspage.html?item=8"><img src="/Content/item-list/22.jpeg" alt="Item 8"></a></div>',
  '<div class="item"><a href="itemspage.html?item=9"><img src="/Content/item-list/13.jpeg" alt="Item 9"></a></div>',
  '<div class="item"><a href="itemspage.html?item=10"><img src="/Content/item-list/25.jpeg" alt="Item 10"</a>></div>',
  '<div class="item"><a href="itemspage.html?item=11"><img src="/Content/item-list/26.jpeg" alt="Item 11"</a>></div>',
  '<div class="item"><a href="itemspage.html?item=12"><img src="/Content/item-list/27.jpeg" alt="Item 12"</a>></div>',
  '<div class="item"><a href="itemspage.html?item=13"><img src="/Content/item-list/28.jpeg" alt="Item 13"</a>></div>',
  '<div class="item"><a href="itemspage.html?item=14"><img src="/Content/item-list/29.jpeg" alt="Item 14"</a>></div>',
  '<div class="item"><a href="itemspage.html?item=15"><img src="/Content/item-list/30.jpeg" alt="Item 15"</a>></div>',

  // Add more items as needed...
];

// Shuffle the items array randomly
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the items array
shuffle(items);

// Define a variable to keep track of the current item index
var currentItemIndex = 0;

// Function to generate the next set of items
function generateItems() {
  var newItems = '';
  // Iterate over the items array and show each item once before repeating
  for (var i = 0; i < 3; i++) {
      // Get the current item and increment the index
      var currentItem = items[currentItemIndex];
      currentItemIndex = (currentItemIndex + 1) % items.length;
      newItems += currentItem;
  }
  return newItems;
}

// Example usage:
console.log(generateItems()); // This will generate the next set of items

        // no refresh for the logo buttom
        var logoLink = document.getElementById('logoLink');

        // Add a click event listener to the anchor element
        logoLink.addEventListener('click', function(event) {
            // Prevent the default behavior of the anchor element (page reload)
            event.preventDefault();
        });