
let btn = document.querySelector("button")
btn.addEventListener("click", cal)

function cal() {
    let w = parseInt(document.getElementById("weight").value)
    let h = parseInt(document.getElementById("height").value)

    if (isNaN(w) || isNaN(h)) {
        alert("enter the valid age and height")
    }
    else {
        let r = Math.floor(w * 10000 / (h * h))
        let result = document.getElementById("result")
        result.innerText = `${r} BMI`

    }

}






















// function cal(){
//     let uweight =parseInt (document.getElementById("weight").value)
//     let uheight =parseInt (document.getElementById("height").value)
//     let uresult =parseInt (document.getElementById("result").value)
// }
// let x = uweight/(uheight*uheight)
// console.log(x)
// let y =  cal()
// console.log(y)
