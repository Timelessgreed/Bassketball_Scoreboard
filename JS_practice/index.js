let scorePointA = document.getElementById('home-point')
let scorePointB = document.getElementById('guest-point')
let count = 0

function incrementOne(){
    count += 1
    scorePointA.textContent = count
}

function incrementTwo(){
    count += 2
    scorePointA.textContent = count
}

function incrementThree(){
    count += 3
    scorePointA.textContent = count
}

function incrementOneG(){
    count += 1
    scorePointB.textContent = count
}

function incrementTwoG(){
    count += 2
    scorePointB.textContent = count
}

function incrementThreeG(){
    count += 3
    scorePointB.textContent = count
}





