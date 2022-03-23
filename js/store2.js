const removeBTN = document.querySelectorAll(".btn-remove");

for (let i = 0; i < removeBTN.length; i++) {
    let button = removeBTN[i];
    button.addEventListener('click', removeCartItem())
    console.log('clicked');
}

let quantityInputs = document.querySelectorAll('.cart-quantity-input');
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener('change', quantityChanged())
}

let addToCartButtons = document.querySelectorAll('.add-to-cart');
for (let i = 0; i< addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener('click', addToCartClicked())
}

document.querySelectorAll('.btn-purchase')[0].addEventListener('click', purchaseClicked())
function purchaseClicked(){
    let cartItems = document.querySelector('.cart-lines')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event){
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement.parentElement
    let title = shopItem.querySelectorAll('.title-age')
    let price = shopItem.querySelectorAll('.price')
    addItemToCart(title, price)
    updateCartTotal()
}

function addItemToCart(title, price) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-heading')
    let cartItems = document.querySelectorAll('.cart-lines')[0]
    let cartItemNames = cartItems.querySelectorAll('.cart-item-title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('shabing')
            return
        }
    }
    let cartRowContents = `<div class="cart-items">
    <div class="cart-item-title" id="item">
      <p class="text">Youth</p>
      <p class="text">10-17 y/o</p>
    </div>
    <div class="cart-item-price text" id="price">$10</div>
    <div class="cart-item-quantity" id="quantity">
      <input class="cart-quantity-input" type="number" value="1" />
      <button class="btn-remove" type="button">Remove</button>
    </div>
  </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.querySelectorAll('.btn-remove')[0].addEventListener('click', removeCartItem)
  cartRow.querySelectorAll('.cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    let cartItemContainer = document.querySelectorAll('.cart-lines')
    let cartRows = cartItemContainer.querySelectorAll('.cart-heading')
    let total = 0
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.querySelectorAll('.cart-price')[0]
        let quantityElement = cartRow.querySelectorAll('.cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.querySelectorAll('.cart-total-price')[0].innerText = '$' + total
}