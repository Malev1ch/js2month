const ROOT = document.getElementById('root')
const btnModal = document.createElement('button')
const modalWindow = document.createElement('div')
const modalText = document.createElement('div')
const btnDecline = document.createElement('button')
const btnAccept = document.createElement('button')
const closeModel = document.createElement('button')
const modal = document.createElement('div')
const btnShowNewText = document.createElement('button')
const textShadow = document.createElement('p')

btnModal.textContent = 'SHOW MODAL';
modalWindow.textContent = 'Warning!'
modalText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta asperiores deleniti ipsam. Temporibus pariatur in quaerat ea consequatur libero fuga?';
btnDecline.textContent = 'Decline'
btnAccept.textContent = 'Accept'
closeModel.textContent = 'X'
btnShowNewText.textContent = 'Show Text'

modalWindow.style.cssText= `
    position: fixed;
    width: 600px;
    height: 400px;
    background-color: white;
    padding: 20px;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 20px;
    box-shadow: 4px 4px 8px 8px rgba(34, 60, 80, 0.2);
`

btnModal.style.cssText = `
    font-size: 1rem;
    margin: 0 auto;
    margin-left: 20px;
    display: block;
    padding: 8px 10px;
    border-radius: 5px;  
`

modalText.style.cssText = `
    font-size: 20px;
    font-weight: 100;
    margin-top: 50px;
`


btnDecline.style.cssText = `
    background-color: red;
    font-size: 1rem;
    margin-top: 30px;
    margin-left: 100px;
    display: block;
    padding: 8px 10px;
    border-radius: 10px; 
`

btnAccept.style.cssText = `
    background-color: rgb(34, 202, 34);
    font-size: 1rem;
    margin-top: -37px;
    margin-right: auto;
    display: block;
    padding: 8px 10px;
    border-radius: 10px;
`

btnShowNewText.style.cssText = `
font-size: 1rem;
color: black;
border-radius: 7px;`

closeModel.style.cssText = `
    position: absolute;
    margin-top: -228px;
    margin-left: 545px;
    background-color: black;
    width: 20px;
    height: 20px;
    color: white;
    border: none;
    border-radius: 50%;
`
modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

ROOT.append(btnModal)
modal.append(modalWindow)
modalWindow.appendChild(modalText);
modalWindow.appendChild(btnDecline);
modalWindow.appendChild(btnAccept);
modalWindow.appendChild(closeModel);
modalWindow.appendChild(btnShowNewText);
modalWindow.appendChild(textShadow)

btnModal.addEventListener('click', () => {
    ROOT.append(modal)

})

closeModel.addEventListener('click', () => {
    modal.remove()
})

modal.addEventListener('click', (event) => {
    if(event.target === modal){
        modal.remove()
        
    }
})

btnModal.addEventListener('click', () => {
    modal.style.backgroundColor = '#aca6a680'
})
btnAccept.addEventListener('click', () => {
    modalWindow.style.backgroundColor = 'green'
})

btnDecline.addEventListener('click', () => {
    modalWindow.style.backgroundColor = 'red'
})

btnShowNewText.addEventListener('click', () => {
    textShadow.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta asperiores deleniti ipsam. Temporibus pariatur in quaerat ea consequatur libero fuga?'
    textContainer.innerHTML = textShadow;
    
})
