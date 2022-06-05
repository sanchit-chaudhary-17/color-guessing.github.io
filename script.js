var total_squares = 3;
var colors = [];
var color_picked;
var squares = document.querySelectorAll(".square");
var rgb = document.getElementById("RGB");
var answer = document.querySelector("#is-correct");
var change_colors = document.querySelector("#change-color");

var easy= document.querySelector(".easy");
var hard= document.querySelector(".hard");

easy.addEventListener("click",function(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    total_squares=3;

    reset();
});

hard.addEventListener("click",function(){
    easy.classList.remove("selected");
    hard.classList.add("selected");
    total_squares=6;

    reset();

});

task();

function task(){
    squares_background();
    reset();
}

function squares_background()
{
    for( var i=0;i<squares.length;i++)
    {
        // adding event listener to all squares
        squares[i].addEventListener("click",function(){
            var color_clicked = this.style.backgroundColor;
            // if answer is correct giving that color to all squares
            if(color_clicked === color_picked)
            {
                answer.textContent= "Correct Answer :)";
                change_colors.textContent= "Play Again?";
                change_all_colors(color_clicked);
                document.querySelector(".top-container").style.backgroundColor= color_clicked;
                
                if(total_squares===3)
                    easy.style.backgroundColor=color_clicked;
                else
                    hard.style.backgroundColor=color_clicked;
                            
            }
            else{
                // else remove that color 
                this.style.backgroundColor="rgb(28, 27, 27)";
                answer.textContent="Try Again :( ";
            }
        });
    }
}

function reset(){
    // generating all new random colors
    colors=random_colors(total_squares);
    // picking random color from the above array
    color_picked= colorpicked();
    rgb.textContent= color_picked;
    change_colors.textContent="CHANGE COLORS";
    answer.textContent="";

    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    document.querySelector(".top-container").style.backgroundColor="rgb(46 102 124)";
        easy.style.removeProperty("background-color");
        hard.style.removeProperty("background-color");
    
}

change_colors.addEventListener("click",function(){
    reset();
});

function change_all_colors(color_clicked){
    for(var i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color_clicked; 
	}
}

function colorpicked()
{
    return colors[Math.floor(Math.random()* colors.length)];
}


// function to return array containing randomly generated colors
function random_colors(length){
    // Array that will contain random colors
    var color=[];
    for(var i=0;i<length;i++)
    {
        // get random color from random_color_generator function and push it into color array
        color.push(random_color_generator())
    }

    return color;
}

// function to generate random colors
function random_color_generator(){

    // math.floor() rounds down the number it is given
    // math.random() generates a random number between 0-0.999999

    // picking red from 0-255
    var red=Math.floor(Math.random()*256);
    
    //picking green from 0-255
    var green=Math.floor(Math.random()*256);
    
    //picking blue from 0-255
    var blue=Math.floor(Math.random()*256);

    // string concatenation
    return "rgb("+red+", "+green+", "+blue+")";

}