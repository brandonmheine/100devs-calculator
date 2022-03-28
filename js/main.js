class Button {
    constructor(value) {
        this.value = value
    }
}

class Calculator {

    constructor() {
        this.operation = ''
        this.currentNumber = 0
        this.previousNumber = 0
    }

    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentNumber === '') return
        if (this.previousNumber !== '') {
          this.compute()
        }
        this.operation = operation
        this.previousNumber = this.currentNumber
        this.currentNumber = ''
    }

    calculate() {
        let calculation
        const prev = parseFloat(this.previousNumber)
        const current = parseFloat(this.currentNumber)

        if (this.operation === '+') {
            computation = prev + current
        }
        else if (this.operation === '-') {
            computation = prev - current
        }
        else if (this.operation === 'X') {
            computation = prev * current
        }
        else if (this.operation === '/') {
            computation = prev / current
        }
        this.currentNumber = computation
        this.operation = ''
        this.previousNumber = 0
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