class Button {
    constructor(value) {
        this.value = value
    }
}

class Calculator {

    constructor() {
        this.total = 0
        this.operation = ''
        this.currentNumber = 0
    }


    calculate() {
        if (this.operation === '+') {
            this.total += this.currentNumber
            console.log(this.total)
        }
        else if (this.operation === '-') {
            this.total -= Number(resultPlace.textContent)
        }
        else if (this.operation === 'X') {
            this.total *= Number(resultPlace.textContent)
        }
        else if (this.operation === '/') {
            this.total /= Number(resultPlace.textContent)
        }
        else {
            this.total = 0
        }
    }

    add(num1) {
        this.currentNumber = Number(resultPlace.textContent)
        this.operation = '+'
        this.calculate()
        resultPlace.textContent = this.total
    }

    subtract(num1) {
        this.currentNumber = Number(resultPlace.textContent)
        this.operation = '-'
        this.calculate()
        resultPlace.textContent = this.total
    }

    multiply(num1) {
        this.currentNumber = Number(resultPlace.textContent)
        this.operation = 'X'
        this.calculate()
        resultPlace.textContent = this.total
    }

    divide(num1) {
        this.currentNumber = Number(resultPlace.textContent)
        this.operation = '/'
        this.calculate()
        resultPlace.textContent = this.total
    }

    equals() {
        return this.calculate()
        // num1 = Number(this.total)
        // num2 = Number(resultPlace.textContent)
        // this.total = num1 + num2
        // console.log(this.total)
        // this.total = 0
        // return this.operation === '+' ? num1 + num2 : this.operation === '-' ? num1 - num2 : this.operation === 'X' ? num1 * num2 : num1 / num2
    }

}

const resultPlace = document.querySelector('.result-place')

const buttons = document.querySelectorAll('.button')
const buttonsArray = Array.from(buttons)

buttonsArray.forEach(button => new Button(button.textContent))
buttonsArray.forEach(button => button.addEventListener('click', log))

const addButton = document.querySelector('.add-button')
const subtractButton = document.querySelector('.subtract-button')
const multiplyButton = document.querySelector('.multiply-button')
const divideButton = document.querySelector('.divide-button')

const calculator = new Calculator()

function log(e) {
    // console.log(e.target)
    let currentButtonText = e.target.textContent

    if (currentButtonText == Number(currentButtonText)){
        resultPlace.textContent += currentButtonText
    }

    if (currentButtonText === '+') {
        addButton.style.backgroundColor = 'yellow'
        subtractButton.style.backgroundColor = 'white'
        multiplyButton.style.backgroundColor = 'white'
        divideButton.style.backgroundColor = 'white'
        const sum = calculator.add()
        console.log(calculator.total)
    }

    else if (currentButtonText === '-') {
        subtractButton.style.backgroundColor = 'yellow'
        addButton.style.backgroundColor = 'white'
        multiplyButton.style.backgroundColor = 'white'
        divideButton.style.backgroundColor = 'white'
        const difference = calculator.subtract()
        console.log(difference)
    }

    else if (currentButtonText === 'X') {
        multiplyButton.style.backgroundColor = 'yellow'
        subtractButton.style.backgroundColor = 'white'
        addButton.style.backgroundColor = 'white'
        divideButton.style.backgroundColor = 'white'
        const product = calculator.multiply()
        console.log(product)
    }

    else if (currentButtonText === '/') {
        divideButton.style.backgroundColor = 'yellow'
        subtractButton.style.backgroundColor = 'white'
        multiplyButton.style.backgroundColor = 'white'
        addButton.style.backgroundColor = 'white'
        const quotient = calculator.divide()
        console.log(quotient)
    }

    else if (currentButtonText === '=') {
        addButton.style.backgroundColor = 'white'
        subtractButton.style.backgroundColor = 'white'
        multiplyButton.style.backgroundColor = 'white'
        divideButton.style.backgroundColor = 'white'
        const result = calculator.equals()
        resultPlace.textContent = result
    }
}