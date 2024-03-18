const space = {
mercury:{
    gravity:3.7,
    image : 'mercury.png'
},
venus:{
    gravity: 8.87,
    image:'venus.png'
},
earth:{
    gravity:9.81,
    image: 'earth.png'
},
mars:{
    gravity:3.71,
    image:'mars.png'
},
jupiter:{
    gravity:24.79,
    image:'jupiter.png'
},
saturn:{
    gravity:10.44,
    image:'saturn.png'
},
uranus:{
    gravity:8.69,
    image:'uranus.png'
},
neptune:{
    gravity:11.15,
    image:'neptune.png'
},
moon:{
    gravity:1.622,
    image:'moon.png'
},
pluto:{
    gravity: 0.62,
    image:'pluto.png'
}
}




let header = document.createElement('h1')
header.setAttribute('id', 'bgimage')
header.innerText = 'Calculate a weight of an Object on a Planet'
document.body.appendChild(header)

let content = document.createElement('div')
content.setAttribute('id', 'content')
document.body.appendChild(header)
// console.log(content);

let inputfile = document.createElement('input')
inputfile.setAttribute('type', 'number')
inputfile.setAttribute('placeholder', 'Mass in Kilogram')
inputfile.setAttribute('id', 'massinput')
content.append(inputfile)


let selected = document.createElement('select')
selected.setAttribute('id', 'planetselect')
content.append(selected)
let optional = document.createElement('option')
optional.setAttribute('value', 'none')
optional.innerText = '--select planet--'
selected.append(optional)

for(let planet in space){
    let option = document.createElement('option')
option.setAttribute('value', planet)
option.innerText = planet.charAt(0).toUpperCase()  + planet.slice(1)
selected.append(option)
}


let buttons = document.createElement('button')
buttons.innerText = 'Calculate weight'
content.append(buttons)

// calculate weight button run

buttons.addEventListener('click', ()=>{
  let massInput = parseFloat(document.getElementById('massinput').value)
  let planetSelect = document.getElementById('planetselect').value

  if(massInput && planetSelect !== 'none'){
  img.src = `./image/${space[planetSelect].image}`;
  img.style.display = 'block'
  img.style.widows = '100%'
    let gravitys = space[planetSelect].gravity;
    let weight = massInput * gravitys;
    // alert(weight);
    flex_decription.innerText = `The weight of the object on ${planetSelect.charAt(0).toUpperCase() + planetSelect.slice(1)} is ${weight} N`
     flex_decription.style.display = 'block'

  }else if(!massInput && planetSelect === 'none'){
    flex_decription.style.display = 'block'
    img.style.display = 'none'
    flex_decription.innerText = 'You Did Not choose Planet Yet'
    
    
    
  }else if(!massInput){
    
    flex_decription.innerText = 'massInput is Required'
    flex_decription.style.display = 'block'
    img.style.display = 'none'
  }else if(planetSelect === 'none'){
    
    flex_decription.innerText = 'planetselect is required'
    flex_decription.style.display = 'block'
    img.style.display = 'none'
  }
})
  

document.body.appendChild(content)

// last part run and calculate weight
let imgmain = document.createElement('div')
imgmain.setAttribute('id', 'main')
document.body.appendChild(imgmain)
console.log(imgmain);


let childdiv = document.createElement('div')
childdiv.setAttribute('id', 'flex_container')
imgmain.append(childdiv);


let flex_item_img = document.createElement('div')
flex_item_img.setAttribute('id', 'flex_item_image')
imgmain.append(flex_item_img)
let img = document.createElement('img')
img.src = './image/earth.png'
img.style.widows = '100%'
img.style.display = 'block'

flex_item_img.appendChild(img)
childdiv.append(flex_item_img)

let flex_decription = document.createElement('div')
flex_decription.setAttribute('id','flex_item_decription')
flex_decription.style.marginRight = '10%';
flex_decription.style.display = 'none';
childdiv.append(flex_decription)
