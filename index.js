let counterBox = document.getElementById("homebox")
 let counter = 0 
 
 let counterGuestBox = document.getElementById("guestbox")

function addOne() {
    console.log("clicked")
    counter +=  1
    counterBox.textContent = counter
    
}

function addTwo() {
    console.log("clicked")
    counter +=  2
    counterBox.textContent = counter
    
}

function addThree() {
    console.log("clicked")
    counter +=  3
    counterBox.textContent = counter 
}


function addOneG() {
    console.log("clicked")
    counter +=  1
    counterGuestBox.textContent = counter 
}
function addTwoG() {
    console.log("clicked")
    counter +=  2
    counterGuestBox.textContent = counter 
}
function addThreeG() {
    console.log("clicked")
    counter +=  3
    counterGuestBox.textContent = counter 
}
