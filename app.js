const generateBtn = () => {
    let randomNumber = Math.random() * 10000;
    let pin = Math.round(randomNumber) + '';
    if (pin.length == 4) {
        document.getElementById('generatPin').value = pin;
    }
    else {
        generateBtn();
    }
}
const numberDiv = document.getElementById('numberContainer');
numberDiv.addEventListener('click', function (event) {
    const clickedNumber = event.target.innerText;
    if (isNaN(clickedNumber)) {
        if(clickedNumber === '<'){
            const typedPin = document.getElementById('typed-pin');
            typedPin.value = typedPin.value.slice(0,-1) ;
        }
        if (clickedNumber === 'C') {
            const typedPin = document.getElementById('typed-pin');
            typedPin.value = "";
        }
    }
    else {
        const typedPin = document.getElementById('typed-pin');
        typedPin.value = typedPin.value + clickedNumber;
    }
})
const submit = () => {
    const getPin = document.getElementById('generatPin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (getPin == typedPin) {
        document.getElementById('matched').style.display = "block";
        document.getElementById('notMatched').style.display = "none";

        document.getElementById('tryLeft').innerText = 10 +"";
    }
    else {
        document.getElementById('matched').style.display = "none";
        document.getElementById('notMatched').style.display = " block";

        const tryLeft = parseFloat(document.getElementById('tryLeft').innerText);
        if (tryLeft > 0) {
            document.getElementById('tryLeft').innerText = tryLeft - 1;
        }
        else {
            alert("Please wait  few years for input pin again.");
        }
    }
}