// Function to filter characters based on search input
function searchCharacter() {
    let input = document.getElementById('searchBar').value.toUpperCase();
    let cards = document.getElementsByClassName('character-card');
    
    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getElementsByTagName("h2")[0];
        if (name.innerHTML.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "block"; // Show the card when it matches the search
            cards[i].classList.add('show'); // Apply animation
        } else {
            cards[i].style.display = "none"; // Hide the card if it doesn't match
            cards[i].classList.remove('show'); // Remove animation class
        }
    }
}

// Function to show the last modified date in the footer
window.onload = function() {
    const lastModified = document.createElement('p');
    lastModified.innerText = "Last modified: " + document.lastModified;
    const lastModifiedContainer = document.getElementById('lastModified');
    if (lastModifiedContainer) {
        lastModifiedContainer.appendChild(lastModified); // Ensure container exists
    }
};
