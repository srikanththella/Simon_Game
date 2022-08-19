var gamePattern=[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];
var level=0;
var started=true;


function nextSequence()
{
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor=buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    var x="#"+randomChosenColor;

    $(x).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    level++;
    $("h1").html("level "+level);
    
    
}

 

 $(".btn").on("click",function(){
    userClickedPattern.push(this.id);
    playSound(this.id);
    animatePress(this.id);
    checkAnswer(userClickedPattern.length-1);
});

 $(document).on("keydown",function(){
    
    if(started){
        $("h1").html("level 0");
        nextSequence();
        started=!started;
    }
     
 });

 function playSound(name)
 {
    var audioLink="./sounds/"+name+".mp3";
    var audio=new Audio(audioLink);
    audio.play();

}

function animatePress(currentcolor){
  var y="#"+currentcolor;
  $(y).addClass("pressed");
  setTimeout(function(){
      $(y).removeClass("pressed");
  },100);
}

function checkAnswer(currentlevel){
    if(userClickedPattern[currentlevel]===gamePattern[currentlevel])
    {
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
                userClickedPattern=[];
            },1000);
        }
    }
    else{
    playSound("worng");
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
    $("h1").html("game  over press any key to start again");
    startOver();
    }
    
}

function startOver()
{
    gamePattern=[];
    level=0;
    userClickedPattern=[];
    started=true;
}
  










