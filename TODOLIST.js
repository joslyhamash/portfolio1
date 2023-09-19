input = document.getElementById("inp");
document.getElementById("div");

function myFunction(){
    if(input.value == ""){
        alert("not filled")
    }
    else{
        li = document.createElement("li");
        li.innerHTML = input.value;
        div.appendChild(li);
    }
    input.value = ""
}


function mouseEnter(){
    document.getElementById("inp").style.
    backgroundColor="#FF595E"
}

function mouseLeave(){
    document.getElementById("inp").style.
    backgroundColor="white"
}

