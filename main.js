const addNew = document.querySelector('#add__new')
const modal__window = document.querySelector('.modal__window')
const closedBtn = document.querySelector('#closed')

function addNewProduct () {
    modal__window.classList.toggle('disabled')
}
addNew.onclick = addNewProduct
function closedModal () {
    modal__window.classList.add('disabled')
}
closedBtn.onclick = closedModal

let nameProduct = document.querySelector('#name-product')
let priceProduct = document.querySelector('#price-product')
const addNewCardProduct = document.querySelector('#add-new-product')
const containerCards = document.querySelector('.cards')

function productNew() {
    let nameCreate = nameProduct.value
    let priceCreate = priceProduct.value
    let createElnew = document.createElement('div')
    createElnew.className = "cards__product"
    createElnew.innerHTML = `<img src="/Tomato.png" class="imgProduct" id="img1">
                <div class="comments">
                    <p id="namePr">
                        ${nameCreate}
                    </p>
                    <p id="pricePr">
                        ${priceCreate} p.
                    </p>
                </div>
                <button class="basketAdd" id="add__basketPr">
                    add to basket
                </button>`
    return containerCards.append(createElnew)
}
addNewCardProduct.onclick = productNew

addNewCardProduct.addEventListener('click', productNew)

function productAdded () {
    alert('add great')
}

addNewCardProduct.onclick = productAdded
