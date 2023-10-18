const ProductList = [] // все продукты
// const product = {
//     productId: 1,
//     name:  'имя продукта',
//     img: 'картинка продукта',
//     price: 120,
//     weight: 2
// } // пример продукта

// функционал продукт листа
// добавление продукта // проверка продукта на дубль

function ProductList_add(name, img, price, weight) {

    let product = {
        productId: ProductList.length + 1,
        name, // тоже самое если добавляю name: name
        img,
        price,
        weight,
    }
    let isDuplicate = false
    ProductList.forEach(p => {
        if (p.name === product.name) isDuplicate = true
    })
    if (isDuplicate) console.log(`Продукт "${product.name}" уже сть `)
    else ProductList.push(product)
}

ProductList_add('банан', 'banan.jpg', 120, 2)
ProductList_add('банан', 'banan.jpg', 120, 2)
ProductList_add('яблоко', 'яблоко.jpg', 90, 5)
ProductList_add('лимон', 'лимон.jpg', 70, 3)


// сортировка по цене  .sort
function ProductList_sort(target, direction = 'up') {
    // direction  - up иди down
    // target - name , price , weight
    switch (target) {
        case 'price':
            ProductList.sort((prodOne, prodTwo) => direction === 'up' ? prodOne.price - prodTwo.price : prodTwo.price - prodOne.price)
            break
        case 'name':
            ProductList.sort()
            break
        case 'weight':
            ProductList.sort((prodOne, prodTwo) => direction === 'up' ? prodOne.weight - prodTwo.weight : prodTwo.weight - prodOne.weight)
            break
        default:
            console.log('неизвестный тип сортировки')
    }
}

ProductList_sort('price', 'up')

// поиск по имени продукта .filter

function ProductList_filterName(name) {
    return ProductList.filter((p) => p.name.toLowerCase().includes(name.toLowerCase()))
}

//ProductList_filterName('Ябл')

Cart = {
    0: 5, // 0  id продукта , 5 количество
}
//     productId: 0,
//     count: 1 // если человек повторно добавил то добавить кол-во, если удалили или кол-во меньше 0 , то удаляем товар из корзины

// функционал корзины
// добавление , добавляет кол-во // функция
function Cart_Add(productId, count = 1) {
    // console.log(productId)
    // if (Cart[productId]) {
    //     console.log(`продукт уже есть количество ${Cart[productId]}`)
    //     Cart[productId]++
    // } else {
    //     console.log('продукта еще нет')
    //     Cart[productId] = 1
    // }
    Cart[productId] = Cart[productId] ? Cart[productId] + count : count
}

Cart_Add(0, 10)
Cart_Add(2)
Cart_Add(2)
Cart_Add(3)



// удаление
function Cart_remove(productId) {
    delete Cart[productId]
}

//Cart_remove(0)

// убавляет кол-во

// reduce // Cart[price] ObjectValues // сумма товаров в корзине
function Cart_decrement(productId, count = 1) {
    if (Cart[productId]) {
        Cart[productId] -= count
        if (Cart[productId] < 1) Cart_remove(productId)
    }
}

Cart_decrement(3)
Cart_decrement(2)


//общая стоимость
function Cart_SumPrice() {
    const entries = Object.entries(Cart)
    let totalPrice = 0

    for (let [productId,count] of entries ) {
        let infProduct = ProductList.find(p => p.productId === productId)
        totalPrice += infProduct.price * count

    }
}

Cart_SumPrice()

// общий вес
function Cart_Weight() {
    const entriesCart = Object.entries(Cart)
    let totalWeight = 0
    for (let [productId, count] of entriesCart) {
        let entry = [productId, count]
        let infProduct = ProductList.find(p => p.productId === entry[0]);
        totalWeight += entry.weight * entry[1]

    }
    console.log(totalWeight)
}

Cart_Weight()
// скидка // пример кол-во товара выше 50 элементов , то скидка на товар 10%
function totalSumSale (count) {
    let totalPrice = Cart_SumPrice
    if (Cart[count].value > 50) totalPrice = totalPrice * 0.01
    else console.log('нужно больше товара')
}

totalSumSale()

// удаление всех товаров из корзины
function Cart_DeleteProduct () {
    return Cart = {}
}
Cart_DeleteProduct()


