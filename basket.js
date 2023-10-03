const basket = document.querySelector('#add__basket')
const inBasket = document.querySelector('.basketProduct')


basket.addEventListener('click', function createBasketForm (event) {
    const mainCard = event.target.closest('.cards')
    const productInf = {
        id: mainCard.dataset.id,
        imgSrc: mainCard.querySelector('.imgProduct').getAttribute('src'),
        nameProd: mainCard.querySelector('#namePr').innerText,
        priceProd: mainCard.querySelector('#pricePr').innerText,
    }

    let createElnew = document.createElement('div')
    createElnew.className = "miniProduct"
    createElnew.innerHTML = `<img src="/Tomato.png" class="basketimgProduct" id="img1">
                <p id="namePr">
                    ${productInf.nameProd}
                </p>
                <p id="pricePrM">
                    ${productInf.priceProd}
                </p>
                <div class="btnInBasket">
                    <button id="btnSum">
                        <p id="plus">
                            + 1
                        </p>
                    </button>
                    <p id="valuePrice">
                    Итог:
                    </p>\
                    <button id="btnMinus">
                        <p id="minus">
                            - 1
                        </p>
                    </button>
                </div>`
    return inBasket.append(createElnew)
})

