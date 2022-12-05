import qrcode from 'https://cdn.skypack.dev/qrcode';

// en la medida de lo posible tratar de no instalar packetes para todo

console.log(qrcode)
// asyncronismo // Promesas, Async await, try catch > async await

const downloData = (data) => {
  
    const blob = new Blob([data], { type: 'image/svg' })
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement('a')    
    a.setAttribute('href', url)
    a.setAttribute('download', 'foto.svg')
    a.click()  
}

const form = document.querySelector('#qr-form')
form.addEventListener('submit', async function(e){
  // esto previene que el form actualice
    e.preventDefault();
    
    // caputrar la informacion de input con un addEventListener
    const data = new FormData(form)
    // Object.key Object.value, Object.entries. 
    const values = Object.fromEntries(data)
    // Object.formEntries    
    const svgCode = await qrcode.toString(values.qrname, {
      type: 'png',
      color: {
        light: '#3685FF',
        dark: '#ffffff'
      }
    })
    downloData(svgCode)
    document.querySelector('#qr-picture').innerHTML = svgCode;

})