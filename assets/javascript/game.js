var rnOneId = document.getElementById("rnOne");
var rnTwoId = document.getElementById("rnTwo");
var rnThreeId = document.getElementById("rnThree");
var rnFourId = document.getElementById("rnFour")

var gameOver = false;
var attackEnemy = 0;
var enemyAttacksYou = 0;
var yourCharacter = " ";
var name = " ";

rnOne = Math.floor(Math.random() * 200);
console.log(rnOne);
$("#rnOne").text(rnOne);
$("#rnFive").text(rnOne);
$("#rnNine").text(rnOne);

rnTwo = Math.floor(Math.random() * 200);
console.log(rnTwo);
$("#rnTwo").text(rnTwo);
$("#rnSix").text(rnTwo);
$("#rnTen").text(rnTwo);

rnThree = Math.floor(Math.random() * 200);
console.log(rnThree);
$("#rnThree").text(rnThree);
$("#rnSeven").text(rnThree);
$("#rnEleven").text(rnThree);

rnFour = Math.floor(Math.random() * 200);
console.log(rnFour);
$("#rnFour").text(rnFour);
$("#rnEight").text(rnFour);
$("#rnTwelve").text(rnFour);


$("#jackimage").click(function() {
    $("#barrel").css("display", "none");
    $("#mayor").css("display", "none");
    $("#oogieBoogie").css("display", "none");
    $("#barrel-two").css("visibility", "visible");
    $("#mayor-two").css("visibility", "visible");
    $("#oogieBoogie-two").css("visibility", "visible");
    yourCharacter = "Jack";
  });

  $("#barrelimage").on('click',function() {
    $("#jack").css("display", "none");
    $("#mayor").css("display", "none");
    $("#oogieBoogie").css("display", "none");
    $("#jack-two").css("visibility", "visible");
    $("#mayor-two").css("visibility", "visible");
    $("#oogieBoogie-two").css("visibility", "visible");
    yourCharacter = "Barrel";
  });

  $("#mayorimage").on('click',function() {
    $("#jack").css("display", "none");
    $("#barrel").css("display", "none");
    $("#oogieBoogie").css("display", "none");
    $("#jack-two").css("visibility", "visible");
    $("#barrel-two").css("visibility", "visible");
    $("#oogieBoogie-two").css("visibility", "visible");
    yourCharacter = "Mayor";
  });

  $("#oogieboogieimage").on('click',function() {
    $("#jack").css("display", "none");
    $("#barrel").css("display", "none");
    $("#mayor").css("display", "none");
    $("#jack-two").css("visibility", "visible");
    $("#barrel-two").css("visibility", "visible");
    $("#mayor-two").css("visibility", "visible");
    yourCharacter = "Oogie Boogie";
  });

  $("#jackimagetwo").on('click', function() {
    $("#jack-two").css("visibility", "hidden");
    $("#jack-three").css("visibility", "visible");
    name = "Jack";
  });

  $("#barrelimagetwo").on('click', function() {
    $("#barrel-two").css("visibility", "hidden");
    $("#barrel-three").css("visibility", "visible");
    name = "Barrel";
  });

  $("#mayorimagetwo").on('click', function() {
    $("#mayor-two").css("visibility", "hidden");
    $("#mayor-three").css("visibility", "visible");
    name = "Mayor";
  });

  $("#oogieboogieimagetwo").on('click', function() {
    $("#oogieBoogie-two").css("visibility", "hidden");
    $("#oogieBoogie-three").css("visibility", "visible");
    name = "Oogie Boogie";
  });

  $("#attackButton").on('click', function() {
    attackEnemy = Math.floor(Math.random() * 50);
    console.log(attackEnemy);
    $("#theirDamages").text("You scared " + name + " for " + attackEnemy + " damage.");

    enemyAttacksYou = Math.floor(Math.random() * 50);
    console.log(enemyAttacksYou);
    $("#yourDamages").text(name + " scared you for " + enemyAttacksYou + " damage.");

    if((yourCharacter = "Jack") && (name = "Barrel")) {

        rnOne = (rnOne - enemyAttacksYou);
        console.log(rnOne);
        $("#rnOne").text(rnOne);

        rnTen = (rnTwo - attackEnemy);
        console.log(rnTen);
        $("#rnTen").text(rnTen);
       
       //if ((rnOne < 1) || (rnTen < 1)) {
           
       // $("#lose").text("Game over. You lose.");
        //gameOver = true;

       //}else if ((rnOne > 0) && (rnTwo > 0)) {

        
    };
    //}

    if((yourCharacter = "Jack") && (name = "Mayor")) {

        rnOne = (rnOne - enemyAttacksYou);
        console.log(rnOne);
        $("#rnOne").text(rnOne);
    
        rnEleven = (rnThree - attackEnemy);
        console.log(rnEleven + "Mayorrrrr");
        $("#rnEleven").text(rnEleven);
    
    };
    
    if((yourCharacter = "Jack") && (name = "Oogie Boogie")) {
    
        rnOne = (rnOne - enemyAttacksYou);
        console.log(rnOne);
        $("#rnOne").text(rnOne);
    
        rnTwelve = (rnFour - attackEnemy);
        console.log(rnTwelve);
        $("#rnTwelve").text(rnTwelve);
    
    };
    
    if((yourCharacter = "Barrel") && (name = "Jack")) {
    
        rnTwo = (rnTwo - enemyAttacksYou);
        console.log(rnTwo);
        $("#rnTwo").text(rnTwo);
    
        rnNine = (rnOne - attackEnemy);
        console.log(rnNine);
        $("#rnNine").text(rnNine);
    
    };
    
    if((yourCharacter = "Barrel") && (name = "Mayor")) {
    
        rnTwo = (rnTwo - enemyAttacksYou);
        console.log(rnTwo);
        $("#rnTwo").text(rnTwo);
    
        rnEleven = (rnThree - attackEnemy);
        console.log(rnEleven);
        $("#rnEleven").text(rnEleven);
    
    };
    
    if((yourCharacter = "Barrel") && (name = "Oogie Boogie")) {
    
        rnTwo = (rnTwo - enemyAttacksYou);
        console.log(rnTwo);
        $("#rnTwo").text(rnTwo);
    
        rnTwelve = (rnFour - attackEnemy);
        console.log(rnTwelve);
        $("#rnTwelve").text(rnTwelve);
    
    };
    
    if((yourCharacter = "Mayor") && (name = "Jack")) {
    
        rnThree = (rnThree - enemyAttacksYou);
        console.log(rnThree);
        $("#rnThree").text(rnThree);
    
        rnNine = (rnOne - attackEnemy);
        console.log(rnNine);
        $("#rnNine").text(rnNine);
    
    };
    
    if((yourCharacter = "Mayor") && (name = "Barrel")) {
    
        rnThree = (rnThree - enemyAttacksYou);
        console.log(rnThree);
        $("#rnThree").text(rnThree);
    
        rnTen = (rnTwo - attackEnemy);
        console.log(rnTen);
        $("#rnTen").text(rnTen);
    
    };
    
    if((yourCharacter = "Mayor") && (name = "Oogie Boogie")) {
    
        rnThree = (rnThree - enemyAttacksYou);
        console.log(rnThree);
        $("#rnThree").text(rnThree);
    
        rnTwelve = (rnFour - attackEnemy);
        console.log(rnTwelve);
        $("#rnTwelve").text(rnTwelve);
    
    };
    
    if((yourCharacter = "Oogie Boogie") && (name = "Jack")) {
    
        rnFour = (rnFour - enemyAttacksYou);
        console.log(rnFour);
        $("#rnFour").text(rnFour);
    
        rnNine = (rnOne - attackEnemy);
        console.log(rnNine);
        $("#rnNine").text(rnNine);
    
    };
    
    if((yourCharacter = "Oogie Boogie") && (name = "Barrel")) {
    
        rnFour = (rnFour - enemyAttacksYou);
        console.log(rnFour);
        $("#rnFour").text(rnFour);
    
        rnTen = (rnTwo - attackEnemy);
        console.log(rnTen);
        $("#rnTen").text(rnTen);
    
    };
    
    if((yourCharacter = "Oogie Boogie") && (name = "Mayor")) {
    
        rnFour = (rnFour - enemyAttacksYou);
        console.log(rnFour);
        $("#rnFour").text(rnFour);
    
        rnEleven = (rnThree - attackEnemy);
        console.log(rnEleven);
        $("#rnEleven").text(rnEleven);
    
    };

  });


  