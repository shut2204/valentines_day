const alternatives = [
  {text:"", images:"images/cat-01.gif"},
  {text:"Я обещаю, что это будет незабываемо Дашок мой)", images:"images/cat-02.gif"},
  {text:"Подумай об этом снова токсик", images:"images/cat-03.gif"},
  {text:"Давай щекастик, осмелись же сказать да)", images:"images/cat-04.gif"},
  {text:"Пусть страх не останавливает тебя моя булка)", images:"images/cat-05.gif"},
]
const ohyes = {text:"Я знал, что ты согласишься, будем душнить вместе)", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Да"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'Нет'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})
