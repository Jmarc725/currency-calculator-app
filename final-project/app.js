// Variables error message
let fruitError = document.querySelector('.error-fruit')
let fruitWeightError = document.querySelector('.error-weight-fruit')
let vegetableError = document.querySelector('.error-vegetable')
let vegetableWeightError = document.querySelector('.error-weight-vegetable')
let meatError = document.querySelector('.error-meat')
let meatWeightError = document.querySelector('.error-weight-meat')

// Global scope
let totalCost;
let bill = document.querySelector('.multi-columns')

// Arrays
let fruitArray = []
let weightFruitArray = []
let vegetableArray = []
let weightVegetableArray = []
let meatArray = []
let weightMeatArray = []

let priceArray = []

// Objects
let shoppingCart = {}

let fruits = {
    bananas: 0.88,
    apples: 1.25,
    pears: 1.8,
    oranges: 1.6,
    peaches: 3.99,
    apricots: 4.99,
    plums: 2.6,
    figs: 3.5,
    grappes: 5,
    kiwis: 2.2,

}

let vegetables = {
    leeks: 2.5,
    asparagus: 6.99,
    zuchinis: 1.49,
    parsnip: 1.7,
    peppers: 3.5,
    jalapenos: 4.5,
    mushrooms: 4.99,
    oignons: 1.29,
    garlics: 12.5,
    greenBeans: 5.99,
    potatoes: 2.5
}

let meat = {
    tenderloin: 19,
    ribeye: 30,
    sirloin: 16,
    chicken: 10,
    lamb: 30,
    turkey: 15, 
    salmon: 18,
    halibut: 14.5,
    prawns: 27,
    scallops: 29
}

/* ----------------------------------------------------------------------------------
--------------------------------------- Functions -----------------------------------
------------------------------------------------------------------------------------- */



// ------------------------------------------------ fruit ------------------------------

function addToCartFruit(){

    let fruitItem = document.getElementById('fruit').value // Grab the fruit value input
    fruitArray.push(fruitItem) // Store the fruit value in the fruitArray

    let item = fruits[fruitItem] // Accessing the value from fruit object

    if(fruitItem == ''){ // Display error message if the condition is not met
        fruitError.classList.remove('hidden');  
    } else if (item == undefined){
        alert("We do not have this product in stock")
    } else {
        fruitError.classList.add('hidden')  
    }
    
    let weightFruit = document.getElementById('weight-fruit').value // Grab the weight value input
    weightFruitArray.push(weightFruit) // Store the weight value in the weightFruitArray

    if (weightFruit == ''){ // Display error message if the condition is not met
        fruitWeightError.classList.remove('hidden')   
        fruitError.classList.remove('hidden');   
    } else {
        fruitWeightError.classList.add('hidden') 
    }

    let calc = (weightFruit / 454) * item // Make the calculation
    priceArray.push(calc) // Store the calculated price for an item in the priceArray
    let insertPrice = document.getElementById('total-fruits')
    totalCost = fruitItem + " " + weightFruit + "g: $" + calc.toFixed(2)// Concatenation to display the details of the purchase

    // Creation of an object
    shoppingCart.name = fruitItem
    shoppingCart.quantity = weightFruit
    shoppingCart.total = calc


    // Clearing inputs
    document.getElementById('fruit').value = ""
    document.getElementById('weight-fruit').value = ""

    // All these conditions have to be met to invoke the functions and display all the details of purchase
    if (fruitItem != '' && item != undefined && weightFruit != '' && !isNaN(weightFruit)){
        finalPrice() // Display & update the price beside "Total"
        totalBill() // Display the detail of purchase
        localStorage.setItem(fruitItem, calc.toFixed(2)) // Store the fruit name / fruit price in the local storage
        insertPrice.value = calc.toFixed(2) // Insert the price in the field price

    }
}


// ----------------------------------------- Vegetable ------------------------------

function addToCartVegetable(){

    let vegetableItem = document.getElementById('vegetable').value // Grab the vegetable input value
    vegetableArray.push(vegetableItem) // Store this value in a new array

    let item = vegetables[vegetableItem] // Accessing the value from the vegetable object

    if(vegetableItem == ''){ // Display error message if the condition is not met
        vegetableError.classList.remove('hidden') 
    } else if (item == undefined){
        alert("We do not have this product in stock")
    } else {
        vegetableError.classList.add('hidden')  
    }

    let weightVegetable = document.getElementById('weight-vegetable').value // grab the weight value
    weightVegetableArray.push(weightVegetable) // Store this value in a new array

    if (weightVegetable == ''){ // Display error message if the condition is not met
        vegetableWeightError.classList.remove('hidden')    
    } else {
        vegetableWeightError.classList.add('hidden') 
    }

    let calc = (weightVegetable / 454) * item // Make the calculation
    priceArray.push(calc) // store the price in a new array

    totalCost = vegetableItem + " " + weightVegetable +"g: $" + calc.toFixed(2) // Concatenation to display the details of the purchase
    let insertPrice = document.getElementById('total-vegetable') 

    // Creation of an object
    shoppingCart.name = vegetableItem
    shoppingCart.quantity = weightVegetable
    shoppingCart.total = calc.toFixed(2)

    // All these conditions have to be met to invoke the functions and display all the details of purchase
    if (vegetableItem != '' && item != undefined && weightVegetable != '' && !isNaN(weightVegetable)){
        finalPrice() // Display & update the price beside "Total"
        totalBill() // Display the detail of purchase
        localStorage.setItem(vegetableItem, calc.toFixed(2)) // Store element in the local storage
        insertPrice.value = calc.toFixed(2) // Insert the price in the field price
    }

   // Clearing the inputs after clicking the button
   document.getElementById('vegetable').value = ""
    document.getElementById('weight-vegetable').value = ""
}

// ----------------------------- Meat --------------------------------------------
//-----------------------------------------------------------

function addToCartMeat(){

let meatItem = document.getElementById('meat').value // Grab the meat input value
meatArray.push(meatItem) // Store this value in a new array

let item = meat[meatItem] // Accessing the value from the meat object

if(meatItem == ''){ // Display error message if the condition is not met
    meatError.classList.remove('hidden')  // Remove class hidden so error message appears
} else if (item == undefined){
    alert("We do not have this product in stock")
} else {
    meatError.classList.add('hidden') // Add class hidden so error message disappears
}

let weightMeat = document.getElementById('weight-meat').value // Grab the weight input value
weightMeatArray.push(weightMeat) // Store this value in a new array

if (weightMeat == ''){ // Display error message if the condition is not met
    meatWeightError.classList.remove('hidden')  // Remove class hidden so error message appears    
} else {
    meatWeightError.classList.add('hidden') // Add class hidden so error message disappears
}

let calc = (weightMeat / 1000) * item // Make the calculation
priceArray.push(calc) // Store the price in a new array

let insertPrice = document.getElementById('total-meat')

totalCost = meatItem + " " + weightMeat +"g: $" + calc.toFixed(2) // Concatenation of the detail purchases

    // Creation of object
    shoppingCart.name = meatItem
    shoppingCart.quantity = weightMeat
    shoppingCart.total = calc


    if (meatItem != '' && item != undefined && weightMeat != '' && !isNaN(weightMeat)){
        // calculationFruitPound(weightMeat, item)
        finalPrice() // Display & update the price beside "Total"
        totalBill() // Display the detail of purchase
        localStorage.setItem(meatItem, calc.toFixed(2)) // Store element in the local storage
        insertPrice.value = calc.toFixed(2) // Insert price in the field price
    }

    // Clearing the inputs after clicking the button
    document.getElementById('meat').value = ""
    document.getElementById('weight-meat').value = ""
}

// function calculationMeatPound(grams, priceKg){
//     let meatPrice =  (grams / 1000) * priceKg
//     let insertPrice = document.getElementById('total-meat')
//     insertPrice.value = meatPrice.toFixed(2)
// }


// ------------------------------------------------------ Get Local Storage ---------------------

function getLocalStorage(){
    let getDatas = Object.keys(localStorage) // Accessing the properties of the object localstorage

    for( let i = 0; i < getDatas.length; i++){ // looping through the array of properties
        let propertyName = Object.entries(localStorage)[i][0]        
        // let PropertyName = Object.keys(localStorage).find(key => object[key] === getDatas[i]);
        console.log(propertyName)
        
        
        let newItem = document.createElement('p') // create element to display the detail of purchase
        newItem.innerText = propertyName + ": $" + localStorage.getItem(getDatas[i])
        bill.appendChild(newItem)
    }
}

getLocalStorage()


// ------------------------------------------------------- Total bill -------------------------

function totalBill(){ // Create new element (item, weight, price) after clicking the button
    let newElement = document.createElement('p')
    newElement.innerText = totalCost // Display the detail of purchase
    bill.appendChild(newElement)
}


// ----------------------------------------------------------- Final price -------------------------

function finalPrice(){ // Update the total price of each item beside "Total"
    let sum = 0
    for (let i = 0; i < priceArray.length; i++){
        sum += priceArray[i] // For each iteration addition is made
        let finalCost = document.querySelector('#total-cost')
        finalCost.innerText = sum.toFixed(2) // Insertion of the updated price
    }
}
