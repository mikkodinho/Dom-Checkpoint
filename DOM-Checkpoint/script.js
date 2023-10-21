// JavaScript code for cart functionality
const cart = document.getElementById('cart');
const total = document.getElementById('total');

cart.addEventListener("click", (event) => {
   const target = event.target;
   const cartItem = target.closest('.cart-item');
   if (!cartItem) return;

   const quantityElement = cartItem.querySelector('.quantity');
   // const priceElement = cartItem.querySelector('.price');
   // parseInt converts a string to a number
   let quantity = parseInt(quantityElement.textContent);

   if (target.classList.contains('decrement')) {
       if (quantity > 1) {
           quantity--;
       }
   } else if (target.classList.contains('increment')) {
       quantity++;
   } else if (target.classList.contains('delete')) {
       cartItem.remove();
   } else if (target.classList.contains('heart')) {
       target.classList.toggle('heart-liked');
       // console.log("heart clicked");
   } 

   quantityElement.textContent = quantity;
   updateTotal();
})

function updateTotal() {
    const prices = Array.from(document.querySelectorAll('.price')).map(priceElement => {
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        const quantity = parseInt(priceElement.parentElement.querySelector('.quantity').textContent);
        return price * quantity;
    });

    const totalAmount = prices.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    total.textContent = `Total: $${totalAmount}`;
 }
