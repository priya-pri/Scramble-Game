

console.log("hi");
const words=["cat","dog","lion","horse","wolf","elephant","giraffe"];
let play=false;
const msg=document.querySelector('.msg');
const guess=document.querySelector('input');
const btn=document.querySelector('.btn ');
let newWord="";
let randomWord="";

btn.addEventListener('click' , ()=>{
    
     //(join(",")--join will join with delimiter as ,
    //anonymous function--[[[function(){}]]]   fat arrow function--[[[()=>{}]]]
    if(!play){
        play=true;
        newWord= words[Math.floor(Math.random()*words.length)];
        randomWord=doShuffle(newWord.split("")).join("");
        btn.innerHTML="Guess the word";
       // guess.classList.toggle('hidden');
       
      msg.innerHTML=`Guesss the word :  ${randomWord}`;}

      else{

        if(guess.value===newWord){
            msg.innerHTML="Awesome...You are correct";
        }
        else{
            msg.innerHTML="Try again";
        }
        play=false;
        btn.innerHTML="start again";
        guess.value="";

      }

      }
      
      
);


function doShuffle(newWord){
    console.log(newWord);
    for(let i =0;i<newWord.length;i++){
        let temp;
        let j=Math.floor(Math.random()*newWord.length);
        temp=newWord[i];
        newWord[i]=newWord[j];
        newWord[j]=temp;
    }

    return newWord;
}
