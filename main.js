document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'menu.html';
});
const searchBox = document.getElementById('searchBox');
const foodItems = document.querySelectorAll('.food-item li');

searchBoxaddEventListener('input', function() {
    const query = searchBox.ariaValueMax.toLowerCase();

    foodItems.forEach(function(item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});