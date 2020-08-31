document.addEventListener('keydown', function(colorEnter) {

    if(colorEnter.key == "Enter"){
        changeColor()
    }
    })

    function changeColor() {
        var body = window.document.getElementById("body")
        var color = window.document.getElementById("color").value
        body.style.backgroundColor = `${color}`
    
    }
