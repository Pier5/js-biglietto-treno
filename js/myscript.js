let km = prompt ('Quanti km devi percorrere?');
let age = prompt ('Quanti anni hai?');
let kmPrice = 0.21;
let totalPrice = kmPrice * km;
let price = totalPrice;

if (age < 18) {
    price = totalPrice * 80 / 100;
} else if (age > 65) {
    price = totalPrice * 60 / 100;
}

let Element = document.getElementById('my-output');
Element.innerHTML = `Il prezzo del tuo biglietto è ${price.toFixed(2)}`;






