const olEL = document.getElementById('infi-list');

// Add initial 10 items
let count = 1;
function addItems(n) {
  for (let i = 0; i < n; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${count++}`;
    olEL.appendChild(li);
  }
}

// Add 10 at start
addItems(10);

// Flag to prevent flooding
let isLoading = false;

olEL.addEventListener('scroll', () => {
  // Only run when not already loading
  if ( olEL.scrollTop + olEL.clientHeight >= olEL.scrollHeight - 5) {
    isLoading = true;
      addItems(2);
      isLoading = false;
  }
});
