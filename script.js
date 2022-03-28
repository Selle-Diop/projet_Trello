const colstaches = document.getElementById('colstaches')
const cols = document.getElementById('cols')
const taches = document.getElementById('taches')
const formmodal = document.getElementById('formmodal')
const containModal = document.getElementById('containModal')
const btncroix = document.getElementById('croix')
const butAjout = document.getElementById('button')
const textarea = document.getElementById('textarea')
const date = document.getElementById('ladate')
const time1 = document.getElementById('time1')
const time2 = document.getElementById('time2')



 














// ------------------------------------Functions-----------------------
function colorRandom() {
    var colorHexa = '0123456789ABCDEF';
    var indenfi = '#';
    for (let i = 0; i < 6; i++) {
        indenfi += colorHexa[Math.floor(Math.random() * 16)]
    }
    return indenfi;
}


// -------------------------------Events---------------------

let i = 1
cols.addEventListener('click', (e) => {
    const divheadbody = document.createElement('div')
    divheadbody.className = 'headbody '
    const input = document.createElement('input')
    input.value = 'colonne' + i
    input.className = 'head'
    input.style.backgroundColor = colorRandom()
    const divbody = document.createElement('div')
    const image = document.createElement('img')
    image.src = 'image/ambulant-removebg-preview.png'

    divbody.className = 'body'
    divbody.appendChild(image)
    divbody.style.backgroundColor = colorRandom()
    if (i <= 5) {
        divheadbody.append(input, divbody)
        colstaches.appendChild(divheadbody)
    }
    i++

    input.addEventListener('dblclick', () => {
        const newInput = document.createElement('input')
        newInput.value = input.innerHTML
        input.innerHTML = ''
        input.appendChild(newInput)
        newInput.addEventListener('blur', () => {
            input.innerHTML = newInput.value

        })
        newInput.focus();

    })

})
taches.addEventListener('click', () => containModal.classList.add('show-modal'))

btncroix.addEventListener('click', () => containModal.classList.remove('show-modal'))


butAjout.addEventListener('click', () => {
    // alert('ok')
    divbody = document.querySelector('.body')
    console.log(textarea.value)
    console.log(date.value)
    console.log(time1.value)
    console.log(time2.value)



    const divbodyson = document.createElement('div')
    divbodyson.setAttribute('class', 'bodyson')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')
    const span4 = document.createElement('span')




    span1.innerText = textarea.value
    span2.innerText = date.value
    span3.innerText = time1.value
     span4.innerText = time2.value
    divbodyson.append(span1,span2,span3,span4)



    divbody.appendChild(divbodyson)



})





