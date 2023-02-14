const buttonEl = document.getElementById("submit");
const unitEl = document.getElementById("unit")

let heightHeadEl = document.getElementById("height-cm")
let weightHeadEl = document.getElementById("weight-lbl")
console.log(weightHeadEl)


const metricRadioEl = document.getElementById("metric-radio")
const imperialRadioEl = document.getElementById("imperial-radio");




// function for click event to calculate BMI 
buttonEl.addEventListener('click', function(event) {

   
    event.preventDefault();
    const heightInput = parseInt(document.getElementById("height").value);
    const weightInput = parseInt(document.getElementById("weight").value);
     BMI = ((weightInput / Math.pow(heightInput, 2))*10000).toPrecision(4);
    buttonEl.textContent =  `
        Your BMI is: ${BMI},
        check again?
    `;
    buttonEl.style.transform = "scale(1.4)"
    buttonEl.style.color = "rgb(0, 119, 28)"
    buttonEl.style.backgroundColor = "rgb(255, 184, 97)"
        
})



