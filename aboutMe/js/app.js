'use strict';
var userName = prompt( 'Greetings, what is you name')
console.log("username is"+userName)
alert( "Hello "+ userName +'lets play a guessing game!')

var count = 0;
var answer1 = prompt('Have I ever lived outside of the US?').toLowerCase().trim();
if (answer1 === 'yes' || answer1 === 'y') {
    alert('Right!')
    console.log(userName + "said yes")
count+=1
}
else if (answer1==='no' ||answer1 ==='n') {
    alert('wrong!')
    console.log(userName + "said no")
}else{
    alert('Input is invalid ')}

var answer2 = prompt('Have I ever owned a dog?').toLowerCase().trim();
if (answer2==='yes' ||answer2 ==='y') {
    alert('Right!')
    console.log(userName + "said yes")
count+=1
}else if (answer2==='no' ||answer2 ==='n') {
    alert('wrong!')
    console.log(userName + "said no")
}else{
    alert('Input is invalid ')}

var answer3 = prompt('Do I like steak?').toLowerCase().trim();
if (answer3==='yes' ||answer3 ==='y') {
    alert('Right!')
    console.log(userName + "said yes")
count+=1
}else if (answer3==='no' ||answer3 ==='n') { 
    alert('wrong!')
    console.log(userName + "said no")
}else{
    alert('Input is invalid ')}
    
var answer4 = prompt('Do I like eggs?').toLowerCase().trim();
if (answer4==='yes' ||answer4 ==='y') {
    alert('wrong!')
    console.log(userName + "said yes")
count+=1
}else if (answer4==='no' ||answer4 ==='n') {
    alert('Right!')
    console.log(userName + "said no")
}else{
    alert('Input is invalid ')}

var answer5 = prompt('Do I like girls?').toLowerCase().trim();
if (answer5==='yes' ||answer5 ==='y') {
    alert('Hell yeah I do!!!')
    console.log(userName + "said yes")
count+=1
}else if (answer5==='no' ||answer5 ==='n') {
    alert('THAT, is the wrong answer!')
    console.log(userName + "said no")
}else{
    alert('Input is invalid ')}
 
var rand = Math.random();
function countingFun(){
    for(var i=0;i<4;i++){
        var answer6 = prompt('How many pokemon did I catch today? (1-150').toLowerCase().trim();
        if (answer6==rand) {
            alert('Correct!!!')
            console.log("correct")
            count+=1
            return;
        }else if (answer6<rand) {
            alert('Too low. Try again!')
            console.log("incorrect")
        }else if
            (answer6>rand)  {
            alert('Too low. Try again!')
            console.log("incorrect")
        }else{
            count +=1;
            winLoss = 0;
            alert('Invalid input')
        }
    }
}
countingFun();


var answer7 = prompt('can you guess what state Ive lives in besides Washington? (CA, NV, OR, PA, ID)').toLowerCase().trim();
if (answer7==='ca' ||answer7==='CA' ||answer7 ==='california'||answer7 ==='California') {
    alert('Hell yeah!!!')
    console.log( "correct state")
count+=1
}else{
    alert('wrong')}

    alert("you got" + count + "out of 7 correct"+ userName)
