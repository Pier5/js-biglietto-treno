let km = prompt ('Quanti km devi percorrere?');
let age = prompt ('Quanti anni hai?');
let kmPrice = 0.21;
let totalPrice = kmPrice * km;
let price = totalPrice;

document.getElementById('my-output').innerHTML = totalPrice;

if (age < 18) {
    price = totalPrice * 80 / 100;
    document.getElementById('my-output').innerHTML = price.toFixed(2);
} else if (age > 65) {
    price = totalPrice * 60 / 100;
    document.getElementById('my-output').innerHTML = price.toFixed(2);
}






