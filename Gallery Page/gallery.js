//Notification popup
function notification() {
    alert ('You have no new notifications')
    console.log('Clicked the button')
}

let bell = document.getElementById("bell")
bell.addEventListener('click', notification)