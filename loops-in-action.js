const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum(){
    const userNumberInputElement = document.getElementById('user-number');
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;
    for(let i=0;i<=enteredNumber; i++){
        sumUpToNumber = sumUpToNumber +i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = 'block';
}

calculateSumButtonElement.addEventListener('click' , calculateSum);

//Highlight links

const highlightLinksButtonElement = document.querySelector('#highlight-links button');

function highlightLinks(){
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for(const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}

highlightLinksButtonElement.addEventListener('click',highlightLinks);

const dummyUserData = {
    firstName: 'Abc',
    lastName: 'fox',
    age: 32
};

const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for(const key in dummyUserData){
        const newUserDataListItemELement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemELement.textContent = outputText;
        outputDataElement.append(newUserDataListItemELement); 
    }
}

displayUserDataButtonElement.addEventListener('click',displayUserData);

const rollDiceButtonElement = document.querySelector('#statistics button');


function rollDice(){
    return Math.floor(Math.random() * 6) + 1; //Math.floor(): 5.64 => 5 it gives us integer value
}

function deriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';


    let hasrolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasrolledTargetNumber){
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber){
        //     hasrolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll '+ numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasrolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsELements = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsELements.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);