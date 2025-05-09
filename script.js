function showOrderPopup(name, price) {
    document.getElementById('popupItemName').innerText = name;
    document.getElementById('popupPrice').innerText = `The Item Price: Rs. ${price}`;
    document.getElementById('orderPopup').style.display = 'flex';
  }
  
  function closeOrderPopup() {
    document.getElementById('orderPopup').style.display = 'none';
  }
  

