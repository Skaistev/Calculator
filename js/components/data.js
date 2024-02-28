const data = {
    style: "span",
    buttons: ["CE", "+/-",'%',"+", "1", "2", "3","-", "4","5",'6','*','7','8','9','/','0','.','='
    ],
   
}

const mainDom = document.querySelector('.buttons')

function buttonsIn (dom,data){

let listHTML = ''

for (const button of data.buttons){
   button !== "="?listHTML += `<button class="btn">${button}</button>`:listHTML += `<button class="btn ${data.style}">${button}</button>`
}
dom .innerHTML = listHTML;
}

buttonsIn (mainDom, data)

const stepsDOM = document.querySelector('.steps')
const btnDOM = document.querySelectorAll('button')
const displayDOM = document.querySelector('.total')



for (let i=2; i<btnDOM.length; i++){

    btnDOM[i].addEventListener("click", ()=>{
        stepsDOM.innerText += btnDOM[i].innerText;});

    btnDOM[i].addEventListener("click", ()=>{

            let aha = [];
            aha.push(stepsDOM.innerText);
           console.log(aha.map(a=>eval(a)))
           displayDOM.innerText = aha.map(a=>eval(a))  
        })

}
    




btnDOM[0].addEventListener('click', clearDisplay)
btnDOM[1].addEventListener('click', plusMinus)



function clearDisplay(event){
    stepsDOM.innerText = ''}

 
function plusMinus(event){
    // console.log(stepsDOM.innerText)
    // stepsDOM.innerText = btnDOM[1].innerText.toggle("-")
}
