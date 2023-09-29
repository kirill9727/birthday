const basket = document.querySelector('#basket')
const inBasket = document.querySelector('#inBasket')


basket.addEventListener('click', function createBasketForm (event) {
    const mainCard = event.target.closest('.cards')
    const productInf = {
        id: mainCard.dataset.id,
        imgSrc: mainCard.querySelector('.imgProduct').getAttribute('src'),
        nameProd: mainCard.querySelector('.namePr').innerText,
        priceProd: mainCard.querySelector('#pricePr').innerText
    }
    let createElnew = document.createElement('div')
    createElnew.className = "cards__product"
    createElnew.innerHTML = `<img src="/Tomato.png" class="imgProduct" id="img1">
                <p id="namePr">
                    ${productInf.nameProd}
                </p>
                <p id="pricePrM">
                    ${productInf.priceProd}
                </p>
                <button id="add__basketPr">
                    add to basket
                </button>`
    return inBasket.append(createElnew)
})

