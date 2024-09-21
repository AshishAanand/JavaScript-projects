console.log("Hello I am Ashish");

let boxes = document.querySelectorAll(".colour-box") // this line of code containes all colured boxes
let body = document.querySelector("body") // this line of code contains body of web page

// Applying clour changing logics to all boxes

boxes.forEach((box)=>{
    // Adding click event on every boxes

    box.addEventListener("click", (color)=>{
        if(color.target.id == "red"){
            body.style.backgroundColor = color.target.id
        }
        else if(color.target.id == "black"){
            body.style.backgroundColor = color.target.id
        }
        else if(color.target.id == "blue"){
            body.style.backgroundColor = color.target.id
        }
        else if(color.target.id == "green"){
            body.style.backgroundColor = color.target.id
        }
        else if(color.target.id == "grey"){
            body.style.backgroundColor = color.target.id
        }
        // Changing font color if background color is black then font color should be white if not then black
        
        if(color.target.id == "black"){
            body.style.color = 'white'
        }
        else{
            body.style.color = 'black'
        }
    })
})
