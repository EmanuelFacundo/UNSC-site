function hambuguer(){
    const element = document.getElementById("menu")

    if(element.classList){
        element.classList.toggle("active")
    } else {
        const classes = element.className.split(" ")
        const i = classes.indexOf("menu")

        if(i >= 0) {
            classes.splice(i, 1)
        } else {
            classes.push("menu")
            element.className = classes.join(" ")
        }

    }
}