
function displayInput() {
    const getRadius = document.getElementById("userInput");
    const userRadius = getRadius.value;
    //Validation:
    if (userRadius > 200 || userRadius <=0) {
        alert("Please Enter a Number Between 1-200");
        getRadius.focus();
        return;
    };
    const getSpan = document.getElementById("span");
    // calculate the voclume from user's input:
    const calcRadius = 4*Math.pow(userRadius, 3)*Math.PI /3;
    getSpan.innerHTML = Math.floor(calcRadius);
    //draw on canvas:
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");
    painter.strokeStyle = "black";
    painter.arc(200, 200 ,userRadius, 50, 80)
    painter.stroke();
};

function clearCanvas() {
    let canvas = document.getElementById("myCanvas");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    let span = document.getElementById("span");
    span.innerHTML = "";
    let field = document.getElementById("userInput");
    field.value = "";
    field.focus();
};

