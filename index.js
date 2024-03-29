const button = document.getElementById('count-button')
const str = document.getElementById('text-area')
const countSpace = document.getElementById('count')
function getCount(text){
 stringvalue = text.value
 if (stringvalue == '') {
    countSpace.style.borderColor = 'red'
    redBg = 'rgba(243, 12, 24, 0.349)'
    countSpace.style.backgroundColor = redBg
    return 0
 } else {
    countSpace.style.borderColor = 'green'
    greenBg = 'rgba(172, 230, 172,.6)'
    countSpace.style.backgroundColor = greenBg
    count = stringvalue.split(" ").length
        return count
 }

}
function printText(){

    return countSpace.textContent = `There are ${getCount(str)} words in your text`
}
button.addEventListener('click', ()=>{
    printText()
})