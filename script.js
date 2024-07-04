var character = document.getElementById("character");
var block = document.getElementById("block");

var collisionDetected = false;

function jump() {
    console.log("Adding 'animate' class");
    character.classList.add("animate");

    setTimeout(function() {
        console.log("Removing 'animate' class");
        character.classList.remove("animate");
    }, 500);
}

var checkTouch = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (
        !collisionDetected &&
        characterTop>130 &&  blockLeft<260
    ) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Collision detected!");
        collisionDetected = true;
    } else {
        collisionDetected = false;
    }
}, 10);
