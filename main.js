





function counter() {
    let q = 0
    return function iner(step) {
        q=q+step
        console.log(`Count=`, q)
    }
}


let sum = counter()
sum(3)
sum(5)
sum(228)





const Shop = (function () {

    let bank = 1000;
    let countBeer = 100;
    let countWine = 50;
    let countPepsi = 80;

    let beerPrice = 30;
    let winePrice = 150;
    let pepsiPrice = 20;


    let addBeerPrise =20;
    let addWinePrise =120;
    let addPepsiPrise =10;

    function checkBank() {
        return `Банк : ${bank} грн`
    }
    function checkBeer() {
        return `Пива ${countBeer} шт. Ціна пива  ${beerPrice}грн.`
    }
    function checkWine() {
        return `Вина ${countWine} шт. Ціна вина   ${winePrice}грн.`
    }
    function checkPepsi() {
        return `Pepsi ${countPepsi} шт. Ціна Pepsi   ${pepsiPrice}грн.`
    }

    function sellBeer(count) {
        if (count <= countBeer) {
            countBeer = countBeer - count
            bank = bank + count * beerPrice
            return `Пива продали ${count}шт. на ${count * beerPrice}грн`

        }
        return`Вибачте Пива  на скаладі залишилось ${countBeer} шт.  А ви хочете купити ${count}шт. `

    }
    function sellWine(count) {
        if (count <= countWine) {
            countWine = countWine - count
            bank = bank + count * winePrice
            return `Вина продали ${count}шт.  на ${count * winePrice}грн`

        }
        return`Вибачте Вина на скаладі залишилось ${countWine} шт.  А ви хочете купити ${count}шт. `

    }
    function sellPepsi(count) {
        if (count <= countPepsi) {
            countPepsi = countPepsi - count
            bank = bank + count * pepsiPrice
            return `Pepsi продали ${count}шт.  на ${count * pepsiPrice}грн`

        }
        return`Вибачте Pepsi на скаладі залишилось ${countPepsi} шт.   А ви хочете купити ${count}шт. `

    }

    function storage(){
        return`На складі залишилося Пива:${countBeer} шт.   Вина:${countWine} шт.  Pepsi:${countPepsi} шт. в Банку ${bank}грн`
    }


    function addBeer(count){
        if(count<=bank/addBeerPrise){
            countBeer=countBeer+count
            bank = bank - count * addBeerPrise
            return `Пива купили ${count}шт. на ${count * addBeerPrise}грн`
        }
        return`В банку немає грошей`
       

    }
    function addWine(count){
        if(count<=bank/addWinePrise){
            countWine=countWine+count
            bank = bank - count * addWinePrise
            return `Вина  купили ${count}шт. на ${count * addWinePrise}грн`
        }
        return`В банку немає грошей`
       
    }

    function addPepsi(count){

        if(count<=bank/addPepsiPrise){
            countPepsi=countPepsi+count
            bank = bank - count * addPepsiPrise 
            return `Pepsi купили ${count}шт. на ${count * addPepsiPrise}грн`
        }
        return`В банку немає грошей`
       
         
        
     
        

    }

    function profit(){
        return `Чистий прибуток ${bank=bank-1000} грн`
    }





    return {
        checkBank: checkBank,
        checkBeer: checkBeer,
        checkWine: checkWine,
        checkPepsi: checkPepsi,
        sellBeer: sellBeer,
        sellWine:sellWine,
        sellPepsi:sellPepsi,
        storage:storage,
        addBeer:addBeer,
        addWine:addWine,
        addPepsi:addPepsi,
        profit:profit
    }

}())
console.log(Shop.storage())



// Банк - checkBank
// кількість пива - checkBeer
// кількість вина - checkWine
// кількість pepsi - checkPepsi
// продати пиво - sellBeer(кількість)
// продати вино - sellWine(кількість)
// продати pepsi - sellPepsi(кількість)
// склад - storage
// купити пиво - addBeer(кількість)
// купити вино - addWine(кількість)
// купити pepsi - addPepsi(кількість)
// чистий прибуток -profit












