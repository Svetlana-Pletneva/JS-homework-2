let goods = [
    {
        id: 1,
        name: "Рубашка",
        description: "белая",
        sizes: [44, 46, 48],
        price: 3500,
        available: true,
    },
    {
        id: 2,
        name: "Шорты",
        description: "мужские",
        sizes: [48, 52, 54],
        price: 2500,
        available: false,
    },
    {
        id: 3,
        name: "Джинсы",
        description: "синие женские",
        sizes: [44, 48, 52],
        price: 2000,
        available: true,
    },
    {
        id: 4,
        name: "Ботинки",
        description: "кожаные",
        sizes: [37, 38, 39],
        price: 5000,
        available: true,
    },
    {
        id: 5,
        name: "Свитер",
        description: "шерстяной детский",
        sizes: [86, 92],
        price: 900,
        available: true,
    },

];

let shoppingСart = [
    
];


shoppingСart.addGood = function(goodIndex, amount) {
    this.push({
        good: goodIndex,
        amount,
    })
}

shoppingСart.removeGood = function(goodIndex, amount) {
    for(let i = 0; i < this.length; ++i) {
        if (this[i].good == goodIndex) {
            if (amount >= this[i].amount) {
                this.splice(i, 1);
                return;
            } 

            this[i].amount -= amount;
        }    
    }
}

shoppingСart.clear = function() {
    this.splice(0, this.length);
}

shoppingСart.getTotalGoods = function(goods) {
    result = {
        totalAmount: 0,
        totalSumm: 0,
    }

    for(let el of this) {
        result.totalAmount += el.amount;
        result.totalSumm += goods[el.good].price * el.amount;
    }

    return result;
}


function main(shoppingСart, goods) {
    shoppingСart.addGood(1, 10);
    shoppingСart.removeGood(1, 5);
    shoppingСart.addGood(3, 1);
    shoppingСart.removeGood(3, 1);

    console.log(shoppingСart)
    console.log(shoppingСart.getTotalGoods(goods));
    shoppingСart.clear();
    console.log(shoppingСart.getTotalGoods(goods));
}


main(shoppingСart, goods);