const questionJSON =[
    {
    "category":"Food & Drink",
    "id": "qa-1",
    "correctAnswer": "Three",
    "options":['Two','Three','Four','Five'],
    "question":"How many peices of bun are in a Mcdonald's Big Mac?",

 },
 {
    "id": "qa-2",
    "correctAnswer": "Titanic",
     "options": ['Titanic', 'Avatar', 'The Matrix', 'Inception'],
     "question": "Which movie won the Academy Award for Best Picture in 1998?",

 },
 {
    "id": "qa-3",
    "correctAnswer": "Soccer",
    "options":['Basketball', 'Baseball', 'Soccer', 'Tennis'],
    "question": "Which sport is known as 'football' in most countries?",

 },
 {
    "id": "qa-4",
   "correctAnswer": "Mount Everest",
   "options": ['Mount Kilimanjaro', 'Mount Everest', 'K2', 'Mont Blanc'],
   "question": "What is the highest mountain in the world?",

 },
 {
    "id": "qa-5",
    "correctAnswer": "The Beatles",
   "options": ['The Beatles', 'The Rolling Stones', 'Led Zeppelin', 'Pink Floyd'],
   "question": "Which band released the album 'Abbey Road' in 1969?",

 },
 
]





const questions = document.querySelector("#question");


// Append each option as a button and add event listener
const optiondetail = document.querySelector("#optionsdetail");
let score = 0;


//shuffle option

function shuffleOption(options){
    for(let i = options.length-1;i>=0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [options[j],options[i]] = [options[i],options[j]];
    }
    return options;
}
let ind = 0;
calljson();

const nextbutton = document.querySelector("#next");
nextbutton.textContent = "Next";
nextbutton.addEventListener("click" ,() => {
    ind = ind+1;
    calljson();
    
})
function calljson(){

    if(ind>=questionJSON.length){
        questions.textContent = "Quiz Compeleted!!";
        optiondetail.textContent = " ";
        nextbutton.remove();

        return; 
     }

    //destruct object

    const {question,id,correctAnswer,options} = questionJSON[ind];

    // Set the question text
    questions.textContent = question;

    //shuffleoption function

    const shuffleoption = shuffleOption(options);

    //clear previous option detail;
    optiondetail.textContent = "";

    shuffleoption.forEach(curr=>{
        const btn = document.createElement("button");
        btn.className = 'option-button';
        btn.textContent = curr;
        optiondetail.appendChild(btn);
        btn.addEventListener("click",()=>{
            if(btn.textContent===correctAnswer){
                score++;
             }
             else{
                 score = score-0.25;
             }
             const displayscore = document.querySelector("#totalscore");
             displayscore.textContent = `Score : ${score}/${questionJSON.length}`;
             optiondetail.querySelectorAll('button').forEach(button => button.disabled = true);
            
        });
    })

}


