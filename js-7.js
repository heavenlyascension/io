let counter = 0;

// increate counter using document.getelement
function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

// for loop which relies on counter
function runForLoop() {
    let output = [];
    for (let i = 0; i <= counter; i++) {
        output.push(i);
    }
    document.getElementById("forLoopResult").textContent = output.join(" ");
}

function showOddNumbers() {
    let output = [];
    for (let i = 1; i <= counter; i++) {
        if (i % 2 !== 0) {
            output.push(i);
        }
    }
    document.getElementById("oddNumberResult").textContent = output.join(" ");
}

// multiples of 5
function addMultiplesToArray() {
    let arr = [];
    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

function printCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };
    console.log(car);
}

function loadCar(num) {
    let selectedCar;

    if (num === 1) selectedCar = carObject1;
    if (num === 2) selectedCar = carObject2;
    if (num === 3) selectedCar = carObject3;

// changes value of the boxes
    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

// style the text in document
function changeColor(num) {
    let p = document.getElementById("styleParagraph");

    if (num === 1) p.style.color = "red";
    if (num === 2) p.style.color = "green";
    if (num === 3) p.style.color = "blue";
}
