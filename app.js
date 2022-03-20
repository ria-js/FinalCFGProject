document.getElementById("search").addEventListener("keyup", function() {
    var nameInput = document.getElementById('search').value;
    if (nameInput != "") {
        document.getElementById('send').removeAttribute("disabled");
    } else {
        document.getElementById('send').setAttribute("disabled", null);
    }
});

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
var wrapper = document.createElement('div')
wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
alertTrigger.addEventListener('click', function () {
alert('Thank you for your thoughts!', 'success')
})
}


let allCheckBox = document.querySelectorAll('.form-check-input')

    allCheckBox.forEach((checkbox) => { 
    checkbox.addEventListener('change', (event) => {
    if (event.target.checked) {
    document.getElementById("liveAlertBtn").classList.add('enable');
    } else {
        document.getElementById("liveAlertBtn").classList.remove('enable');

    }
    })
})