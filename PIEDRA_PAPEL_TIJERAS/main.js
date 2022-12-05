import sweetalert2 from 'https://cdn.skypack.dev/sweetalert2';
document.querySelector('#rules').addEventListener('click', function(){
    sweetalert2.fire({
      title: 'Rules',
      html: '<img class="reglas_img" src="./images/image-rules.svg" alt="Rules">',
    });
})

function computerChoise() {
  const options = ['rock', 'paper', 'scissors']
                //    0       1         2
  const randomOption = Math.floor(Math.random() * 3)  
  return options[randomOption]
}

function getWiner(userChoice, computerChoice) {
  // RETO DE PIEDRA PAPEL TIJERAS TAREA
  if (userChoice === computerChoice) {
    return 'Empate';
  } 
  
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Perdiste';
    } else {
      return 'Ganaste';
    }
  } 
  
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Perdiste';
    } else {
      return 'Ganaste';
    }
  } 
  
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Perdiste';
    } else {
      return 'Ganaste';
    }
  }
}

const imgenRock = "./images/icon-rock.svg"
const imagenPaper = "./images/icon-paper.svg"
const imagenScissors = "./images/icon-scissors.svg"

const tablero = document.querySelector('#tablero')
const resultados = document.querySelector("#result")
const spanImagenUser = document.querySelector("#imagen-user")
const spanImagenCPU = document.querySelector("#imagen-cpu")

// para los colores de las ruedas segun la opcion del usuario o cpu
const spanColorUser = document.querySelector("#user_picked_color")
const spanColorCpu = document.querySelector("#cpu_picked_color")
const winerTitle = document.querySelector('#option-result p')

// diccionarios, enums
const imgenOpcions = {
  rock: imgenRock,
  paper: imagenPaper,
  scissors: imagenScissors
}

const coloresOpciones = {
  rock: 'red',  
  paper: 'blue',
  scissors: 'yellow'
}

function saveLocalStorageScore(winerTitle){

  const prevScore = Number(window.localStorage.getItem('score'))

  if (winerTitle === 'Ganaste') {
    const scoreTab = document.querySelector('#score_number')
    scoreTab.textContent  = prevScore + 1
    window.localStorage.setItem('score', prevScore + 1)
  }

}

function showWiner(winer, computerChoice, userChoice){
    // ocultar el tablero de juego
    tablero.classList.add('hidden')
    // mostar el tabler de resultados
    resultados.classList.remove('hidden')
    // con las opciones del usuario, las de cpu y el texto de si ganaste o perdiste
    // remover cualquer clase antes existente
    spanImagenUser.src = imgenOpcions[userChoice]
    spanColorUser.classList.add(coloresOpciones[userChoice])

    spanImagenCPU.src = imgenOpcions[computerChoice]
    spanColorCpu.classList.add(coloresOpciones[computerChoice])

    // mostar si letrero si gane o perdi
    winerTitle.innerHTML = `<h4>${winer}</h4>`
    // llevar el marcador
    saveLocalStorageScore(winer)
}

// funcion para volver a jugar
// guardar los valores en localStorage
// funcion que recupere los valores dentro del localStorage, top level, hydratar

const volverAJugar = document.querySelector('#option-result button')
volverAJugar.addEventListener('click', function(){
  window.location.reload()
})

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
// es necesario crear el array de elementos html para poder interar en cada uno de ellos y no repetir la misma funcion
const userOptions = [rock, paper, scissors]
userOptions.forEach(option => {
  option.addEventListener('click', function(){
    // opcion del usuario
     const user = option.id          
     const cpu = computerChoise()         
     
    //  generar la logica para saber quien gano
    const winer = getWiner(user, cpu)     
    showWiner(winer, cpu, user)
  })
})


addEventListener('DOMContentLoaded', function(){
  const prevScore = Number(window.localStorage.getItem('score'))
  const scoreTab = document.querySelector('#score_number')
  scoreTab.textContent  = prevScore
})

// rock.addEventListener('click',function (params) {
//   // opcion del usuario
//   const user = "rock"     
//   console.log("🤡 ~ user", user)
//   const cpu = computerChoise()    
//   console.log("🤖 ~ cpu", cpu)
  
//  //  generar la logica para saber quien gano
//  const winer = getWiner(user, cpu)
//  console.log("🏆 ~  winer", winer)
  
//  showWiner(winer, cpu, user)

//  // generar la jugada de la computadora 
// })

// paper.addEventListener('click',function (params) {
//   // opcion del usuario
//   const user = 'paper'     
//   console.log("🤡 ~ user", user)
//   const cpu = computerChoise()    
//   console.log("🤖 ~ cpu", cpu)
  
//  //  generar la logica para saber quien gano
//  const winer = getWiner(user, cpu)
//  console.log("🏆 ~  winer", winer)
  
//  showWiner(winer, cpu, user)

//  // generar la jugada de la computadora 
// })

// scissors.addEventListener('click',function (params) {
//   // opcion del usuario
//   const user = "scissors"   
//   console.log("🤡 ~ user", user)
//   const cpu = computerChoise()    
//   console.log("🤖 ~ cpu", cpu)
  
//  //  generar la logica para saber quien gano
//  const winer = getWiner(user, cpu)
//  console.log("🏆 ~  winer", winer)
  
//  showWiner(winer, cpu, user)

//  // generar la jugada de la computadora 
// })

