const inputs = document.querySelectorAll('.side');
const checkButton=document.querySelector('#checkButton');
const message=document.querySelector('#message');
checkButton.addEventListener('click',calculateArea);
function calculateArea(){
    var b = Number(inputs[0].value);
    var h = Number(inputs[1].value);
    console.log(inputs)
    var area = 0.5*(b*h);
    message.innerText='Area of triiangle is '+area;
}