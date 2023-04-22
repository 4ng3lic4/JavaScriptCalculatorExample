// https://www.youtube.com/watch?v=j59qQ7YWLxw
//Time marker 17.49 Starting with the JS

//Calculator class to put our display text
class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    //Next- We think about the calculations our calculator can perform

    // //AC  Function to clear our different variables

    clear(){

    }


    //Delete function for removing a single number
    delete(){

}

//Adding number number
appendNumber(number) {

}

//Choose operation function for when the user clicks on the plus, minus, etc. it will pick the particular operation that the user selected
chooseOperation(operation){

}


//compute function to execute the single value for what we need to display on the calculator
compute(){

}


//Functions that allow us to update our display 
updateDisplay(){
    
}


}

// HTML DOM Document querySelectorAll() will select all elements with class="data-number". In this case it is an array because the class is in different buttons. Therefore, we will put it in [], the same with the operation buttons. 
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]')

//The equals button is a single one, so we get a single element unlike the previous one that is selecting multiple elements. WE dothe same for the rest of the buttons that are single elements.
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


//Next, we need to think about how are are going to store the information for the numbers that are being typed, so we need to create a calculator class (At the top of the page )