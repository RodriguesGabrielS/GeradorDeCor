function mostrarRGB() {
    let r = parseInt(Math.random() * 256) 
    let g = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)
    let res = document.querySelector('.res')
    res.innerHTML = ` rgb(${r}, ${g}, ${b})`
    document.body.style.background = `rgb(${r}, ${g}, ${b})`
    document.querySelector('#rgb').style.display = 'flex'
    document.querySelector('#hex').style.display = 'none'
    document.querySelector('#hsl').style.display = 'none'
}

function mostrarHEX() {
    let res = document.querySelector('.reshex')
    let hex = Number.parseInt(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0') 
    res.innerHTML = `#${hex}`.toUpperCase()
    document.body.style.background = `#${hex}`
    document.querySelector('#rgb').style.display = 'none'
    document.querySelector('#hex').style.display = 'flex'
    document.querySelector('#hsl').style.display = 'none'
}

function mostrarHSL() {
    let hue = parseInt(Math.random() * 101) 
    let sat = parseInt(Math.random() * 101)
    let lig = parseInt(Math.random() * 101)
    let res = document.querySelector('.reshsl')
    res.innerHTML = `hsl(${hue}, ${sat}%, ${lig}%)`
    document.body.style.background = `hsl(${hue}, ${sat}%, ${lig}%)` 
    document.querySelector('#rgb').style.display = 'none'
    document.querySelector('#hsl').style.display = 'flex'
    document.querySelector('#hex').style.display = 'none'
}