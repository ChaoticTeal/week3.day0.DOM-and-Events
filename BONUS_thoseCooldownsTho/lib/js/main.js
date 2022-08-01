let cooldowns = [false, false, false, false]
let abilityQ = document.querySelector("#q");
let abilityW = document.querySelector("#w");
let abilityE = document.querySelector("#e");
let abilityR = document.querySelector("#r");

document.onkeydown = function(event) {
    switch(event.key)
    {
        case "q":
        case "Q":
            // Check whether the cooldown is running
            if(!cooldowns[0]) {
                startCooldown(abilityQ, 0, 10000);
            }
            break;
        case "w":
        case "W":
            // Check whether the cooldown is running
            if(!cooldowns[1]) {
                startCooldown(abilityW, 1, 10000);
            }
            break;
        case "e":
        case "E":
            // Check whether the cooldown is running
            if(!cooldowns[2]) {
                startCooldown(abilityE, 2, 8000);
            }
            break;
        case "r":
        case "R":
            // Check whether the cooldown is running
            if(!cooldowns[3]) {
                startCooldown(abilityR, 3, 50000);
            }
            break;
    }
}

function startCooldown(image, cooldownNo, cooldown) {
    image.style["filter"] = "brightness(0.3)";
    cooldowns[cooldownNo] = true;
    setTimeout(resetImage, cooldown, image, cooldownNo);
}

function resetImage(image, cooldownNo) {
    image.style["filter"] = "initial";
    cooldowns[cooldownNo] = false;
}