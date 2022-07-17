var formQuestions = document.querySelector(".container");
var checkButton = document.querySelector('#checkButton')
var message = document.querySelector('#message');
const correctAnswers = ['90°', 'right angled','one right angle','equilateral triangle','85°']; 
checkButton.addEventListener('click',calculateScore)
function calculateScore(){
    var score=0;
    var index=0;
    const formResults=new FormData(formQuestions);
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score=score+1;
            

        }
        index=index+1;
        
    
    }
    message.innerText='Your score is  '+score;
    

}