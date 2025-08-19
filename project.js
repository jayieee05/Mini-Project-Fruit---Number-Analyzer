// Constants
const BASE_NUMBER = 10;

// Main function to run all analysis
function runAnalysis() {
    const name = document.getElementById('userName').value;
    const number = parseInt(document.getElementById('userNumber').value);
    const sentence = document.getElementById('userSentence').value;
    const fruit1 = document.getElementById('fruit1').value.trim();
    const fruit2 = document.getElementById('fruit2').value.trim();
    const fruit3 = document.getElementById('fruit3').value.trim();

    // Validate inputs
    if (!name || isNaN(number)) {
        alert('Please enter both name and a valid number');
        return;
    }

    if (!sentence) {
        alert('Please enter a sentence');
        return;
    }

    if (!fruit1 && !fruit2 && !fruit3) {
        alert('Please enter at least one fruit');
        return;
    }

    // Clear previous results
    clearResults();

    // Run all analyses
    greetUser(name);
    calculateResults(number);
    checkNumber(number);
    generateSequence(number);
    convertSentence(sentence);
    displayFruits([fruit1, fruit2, fruit3].filter(fruit => fruit));
    startCountdown();
}

// Clear all result divs
function clearResults() {
    const resultDivs = ['greetingResult', 'calculations', 'numberSequence', 
                       'sentenceResult', 'fruitList', 'countdown'];
    resultDivs.forEach(div => document.getElementById(div).innerHTML = '');
}

// Function to greet user
function greetUser(name) {
    document.getElementById('greetingResult').innerHTML = `Hello, ${name}!`;
}

// Function to perform calculations
function calculateResults(number) {
    const sum = BASE_NUMBER + number;
    const difference = BASE_NUMBER - number;
    const product = BASE_NUMBER * number;
    const quotient = BASE_NUMBER / number;

    const calculations = document.getElementById('calculations');
    calculations.innerHTML = `
        <div class="math-operation">
            <h4>Operations with BASE_NUMBER (${BASE_NUMBER})</h4>
            <p>Sum: ${sum}</p>
            <p>Difference: ${difference}</p>
            <p>Product: ${product}</p>
            <p>Quotient: ${quotient.toFixed(2)}</p>
        </div>
    `;
    
    // Check if number is positive/negative
    let numberStatus = checkNumber(number);
    calculations.innerHTML += `
        <div class="number-analysis">
            <h4>Number Analysis</h4>
            <p>Using if statement: ${numberStatus.ifStatement}</p>
            <p>Using ternary operator: ${numberStatus.ternary}</p>
        </div>
    `;
}

// Function to check if number is positive/negative
function checkNumber(number) {
    // Using if statement
    let result1 = '';
    if (number > 0) {
        result1 = 'The number is positive';
    } else if (number < 0) {
        result1 = 'The number is negative';
    } else {
        result1 = 'The number is zero';
    }

    // Using ternary operator
    const result2 = number > 0 ? 'The number is positive' : 
                    number < 0 ? 'The number is negative' : 
                    'The number is zero';

    return {
        ifStatement: result1,
        ternary: result2
    };
}

// Function to generate sequence
function generateSequence(number) {
    let sequence = '';
    for (let i = 1; i <= number; i++) {
        sequence += i + ' ';
    }
    document.getElementById('numberSequence').innerHTML = `Sequence: ${sequence}`;
}

// Function to start countdown
function startCountdown() {
    let count = 5;
    const countdownElement = document.getElementById('countdown');
    
    const timer = setInterval(() => {
        countdownElement.innerHTML = `Countdown: ${count}`;
        count--;
        
        if (count < 0) {
            clearInterval(timer);
            countdownElement.innerHTML = 'Countdown finished!';
        }
    }, 1000);
}

// Function to convert sentence
function convertSentence(sentence) {
    const uppercase = sentence.toUpperCase();
    const lowercase = sentence.toLowerCase();

    document.getElementById('sentenceResult').innerHTML = `
        <h3>Sentence Conversions:</h3>
        Uppercase: ${uppercase}<br>
        Lowercase: ${lowercase}
    `;
}

// Function to display fruits
function displayFruits(fruits) {
    const fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '<h3>Your Favorite Fruits:</h3>';
    fruits.forEach(fruit => {
        fruitList.innerHTML += `<span class="fruit-item">${fruit}</span>`;
    });
}
