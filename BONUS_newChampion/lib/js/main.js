let mainDiv = document.querySelector(".main_container");
let pykeDiv = document.createElement("div");
pykeDiv.classList.add("champ_container", "pyke");
mainDiv.appendChild(pykeDiv);

let pykeTitle = document.createElement("h2");
pykeTitle.innerHTML = "pyke, the bloodharbor ripper";
pykeDiv.appendChild(pykeTitle);

let stylesheet = document.styleSheets[0];
stylesheet.insertRule(".pyke { background-image: url(\"../../assets/pyke.jpg\"); color: #92FDFE; }", stylesheet.cssRules.length);
console.dir(stylesheet);