var inputs=document.querySelectorAll(".angle-input");
var checkButton = document.querySelector("#isTriangle")
var outputmsg=document.querySelector('.message')
checkButton.addEventListener('click',verifyTriangle);
function verifyTriangle(){
   var  angle1=Number(inputs[0].value);
   var  angle2=Number(inputs[1].value);
   var  angle3=Number(inputs[2].value);
   var sum = calculateSum(angle1,angle2,angle3);
   if(sum==180){
    outputmsg.innerText="yes the given angles can form a triangle";
   }
   else{
    outputmsg.innerText='the given angles does not form a triangle'
   }
}
function calculateSum(a,b,c){
    var total = a+b+c;
    return total;
}


