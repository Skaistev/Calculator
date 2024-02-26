const data = {
    style: "span",
    buttons: ["CE", "+/-",'%',"+", "1", "2", "3","-", "4","5",'6','x','7','8','9','/','0','.','='
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
