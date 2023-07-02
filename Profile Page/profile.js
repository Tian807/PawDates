console.log("Connected JS successfully")

function displayAlert() {
    alert ('User has been reported')
    console.log('Clicked the button')
}

let ourButton = document.getElementById("flag")
ourButton.addEventListener('click', displayAlert)

//Notification popup
function notification() {
    alert ('You have no new notifications')
    console.log('Clicked the button')
}

let bell = document.getElementById("bell")
bell.addEventListener('click', notification)