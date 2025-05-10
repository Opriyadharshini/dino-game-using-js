var character = document.getElementById("character");
var block = document.getElementById("block");

// Function to handle the jump action
function jump() {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
    }
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

// Function to check if the game is over
var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // Check for collision
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none"; // Stop the block animation
        block.style.display = "none"; // Hide the block
        clearInterval(checkDead); // Stop checking for collision
        alert("You lose!");
    }
}, 10);
