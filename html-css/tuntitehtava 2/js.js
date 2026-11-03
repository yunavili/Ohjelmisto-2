"use strict";

console.log("Hello world!");

let teksti = document.querySelector("#result");
teksti.textContent = "Hi World!!!";

document.getElementById("calc").addEventListener("click", () => {
    let priceInput = document.querySelector("#price");
    let qtyInput = document.querySelector("#qty");
    let promoInput = document.querySelector("#promo");

    const price = parseInt(priceInput.value);
    const qty = parseInt(qtyInput.value);
    const promo = promoInput.value.trim();

    let totalPrice = price * qty;



    let discount;
    do {
        discount = Math.random();
        console.log(discount);
    } while (discount > 0.1);
    console.log(discount);

    switch (promo) {
        case "ale":
            totalPrice *= 0.7;
            break;
        case "super2026":
            totalPrice *= 0.5;
            break;
        default:
            console.log('Ei alennuskoodia');
    }
    console.log(`Hinta: ${totalPrice}`);
    teksti.textContent = `Yhteensä: ${totalPrice} eur`;
});