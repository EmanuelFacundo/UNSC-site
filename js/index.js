function hambuguer(){
    const element = document.getElementById("myMenu")

    if(element.classList){
        element.classList.toggle("active")
    } else {
        const classes = element.className.split(" ")
        const i = classes.indexOf("myMenu")

        if(i >= 0) {
            classes.splice(i, 1)
        } else {
            classes.push("myMenu")
            element.className = classes.join(" ")
        }

    }
}