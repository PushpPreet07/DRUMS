//document.querySelector("button").addEventListener("click", handleClick)


/*document.querySelector("button").addEventListener("click", function())
ANONYMOUS FUNCTION
{
    alert("I got clicked");
}*/


/*document.querySelector(".set").addEventListener("click",handleClick)
function handleClick(){
    alert("I got clicked");
}

function handleClick(){
    alert("I got clicked");
}
*/

/*for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelector("button")[i].addEventListener("click" , function(){
        var audio=new Audio("tom-1.mp3");
        audio.play;
    });
}
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelector("button")[i].addEventListener("click" , function(){
        //console.log(this.innerHTML.document.getElementById(".").style.color = "#ff0000";)
        this.style.color="white";
    });
}*/



function makeSound(key){
    switch(key){
        case "w":
        var audio1 = new Audio("tom-1.mp3");          //EXAMPLE OF CONSTRUCTOR FUNCTION
        audio1.play();
        case "a":
        var audio2 = new Audio("tom-2.mp3");
        audio2.play();
        case "s":
        var audio3 = new Audio("tom-3.mp3");
        audio3.play();
        case "d":
        var audio4 = new Audio("tom-4.mp3");
        audio4.play();
        case "j":
        var audio5 = new Audio("snare.mp3");
        audio5.play();
        case "k":
        var audio6 = new Audio("kick.mp3");
        audio6.play();
        case "l":
        var audio7 = new Audio("crash.mp3");
        audio7.play();
        


}
}
function buttonAnimation(key){
    var active=document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed")},100);

}

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});





// CONSTRUCTOR FUNCTION 
// function HouseKeeper(years,name,clean){
//     this.exp=years
//     this.name=name
//     this.cleanexp=clean
// }
// var housekeeper1= new HouseKeeper( 12 , john , [bedroom,kitchen])
