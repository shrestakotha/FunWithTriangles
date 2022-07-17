var inputs=document.querySelectorAll(".side")
var checkButton=document.querySelector("#checkButton")
var message = document.querySelector("#message")
checkButton.addEventListener('click',calculateHypotenuse)
function calculateHypotenuse(){
    var side1 = Number(inputs[0].value);
    var side2 = Number(inputs[1].value);
    var sumOfSquares = calculateSquares(side1,side2);
    var hypoLength = Math.sqrt(sumOfSquares);
    message.innerText='Length of Hypotenuse is '+hypoLength;
}
function calculateSquares(a,b){
    var sum = a**2 + b**2;
    return sum;

}