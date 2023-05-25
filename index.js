const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const number = document.querySelector(".number")
const pictures = document.querySelector(".pictures")
const miniatures = document.querySelector(".miniatures")
let num =0
let picquantity = pictures.children.length-1

for(let i=0; i<pictures.children.length; i++){
    let url = pictures.children[i].src
    miniatures.innerHTML += `<img data-vasyapupkin="${i}" src="${url}">`

}
miniatures.children[0].classList.add("picframe")
miniatures.onclick = (event) => {
    miniatures.children[num].classList.remove("picframe")
    //event.target
    //console.log(event.target.dataset.vasyapupkin)
    pictures.children[num].style.display = "none"
    num = event.target.dataset.vasyapupkin
    miniatures.children[num].classList.add("picframe")
    pictures.children[num].style.display = "block"
    //console.log(picNumber)
}


console.log(picquantity)
number.innerHTML = num
pictures.children[num].style.display = "block"

prev.onclick = () => {
    pictures.children[num].style.display = "none"
    miniatures.children[num].classList.remove("picframe")
    if (num===0) {
        num = picquantity
    } else {
        num--
    }
    pictures.children[num].style.display = "block"
    miniatures.children[num].classList.add("picframe")

number.innerHTML = num
}
next.onclick = () => {
    pictures.children[num].style.display = "none"
    miniatures.children[num].classList.remove("picframe")
    if (num===picquantity) {
        num = 0
    } else {
        num++
    }
    pictures.children[num].style.display = "block"
    miniatures.children[num].classList.add("picframe")
        number.innerHTML = num

}