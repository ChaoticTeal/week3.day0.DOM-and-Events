let poros = ["assets/devil_poro.png", "assets/draven_poro.png", "assets/heim_poro.png", "assets/poro1.png", "assets/ziggs_poro.png", ];
let div = document.querySelector("#poros");

document.onclick = function(event) {
    let x = event.clientX;
    let y = event.clientY;
    let index = Math.floor(Math.random() * poros.length);
    let img = document.createElement("img");
    img.src = poros[index];
    img.style["position"] = "absolute";
    img.style["top"] = y + "px";
    img.style["left"] = x + "px";
    div.appendChild(img);
}