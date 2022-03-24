let removeCartItemButtons = document.querySelectorAll('.btn-remove');
for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

let quantityInputs = document.querySelectorAll('.cart-quantity-input')
for (let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
}

let addToCartBtns = document.querySelectorAll('.add-to-cart')
for (var i = 0; i < addToCartBtns.length; i++) {
    let button = addToCartBtns[i]
    button.addEventListener('click', addToCartClicked)
}

document.querySelector('.btn-purchase').addEventListener('click', purchaseClicked)

function purchaseClicked() {
    let cartItems = document.querySelector('.cart-lines')
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    let buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
}

function quantityChanged(event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    let button = event.target
    let shopItem = button.parentElement
    let title = shopItem.querySelectorAll('.title')[0].innerText
    let age = shopItem.querySelectorAll('.age')[0].innerText
    let price = shopItem.querySelectorAll('.price')[0].innerText
    addItemToCart(title, age, price)
    updateCartTotal()
}

function addItemToCart(title, age, price) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-items')
    let cartItems = document.querySelectorAll('.cart-lines')[0]
    let cartItemNames = cartItems.querySelectorAll('.title')
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === title) {
            alert('This item is already selected. Please adjust the quantity in the shopping cart')
            return
        }
    }
    let cartRowContents = `<div class="cart-item-title" id="item">
    <p class="title text">${title}</p>
    <p class="age text">${age}</p>
  </div>
  <div class="cart-item-price price text" id="price">${price}</div>
  <div class="cart-item-quantity" id="quantity">
    <input class="cart-quantity-input" type="number" value="1" />
    <button class="btn-remove" type="button">Remove</button>
  </div>`
  cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.querySelectorAll('.btn-remove')[0].addEventListener('click', removeCartItem)
    cartRow.querySelectorAll('.cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal () {
    let cartItemContainer = document.querySelectorAll('.cart-lines')[0]
    let cartRows = cartItemContainer.querySelectorAll('.cart-items')
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i]
        let priceElement = cartRow.querySelectorAll('.cart-item-price')[0]
        let quantityElement = cartRow.querySelectorAll('.cart-quantity-input')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.querySelectorAll('.cart-total-price')[0].innerText = '$' + total
}