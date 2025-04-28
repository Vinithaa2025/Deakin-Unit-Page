function searchFunction() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const items = document.querySelectorAll('.search-item');
  
  let found = false; // Flag to check if any result is found

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      item.style.display = 'block';
      found = true;
    } else {
      item.style.display = 'none';
    }
  });

  // Handle no results found
  const noResult = document.getElementById('noResult');
  if (!found) {
    noResult.style.display = 'block';
  } else {
    noResult.style.display = 'none';
  }
}
