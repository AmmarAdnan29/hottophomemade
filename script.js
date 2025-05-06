function showOrderPopup(name, price) {
    document.getElementById('popupItemName').innerText = name;
    document.getElementById('popupPrice').innerText = `The Item Price: Rs. ${price}`;
    document.getElementById('orderPopup').style.display = 'flex';
  }
  
  function closeOrderPopup() {
    document.getElementById('orderPopup').style.display = 'none';
  }
  
  // Disable mobile scaling to force desktop view
window.addEventListener('load', () => {
  const viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=1024'); // Set a fixed width to simulate desktop
});
