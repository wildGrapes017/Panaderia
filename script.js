    //Buset paulit ulit gara
let imahe = document.getElementsByClassName("breadImage")[0];
let imahe1 = document.getElementsByClassName("breadImage")[1];
let imahe2 = document.getElementsByClassName("breadImage")[2];
let imahe3 = document.getElementsByClassName("breadImage")[3];

let imaheModel = document.getElementById("model-content");
let modal = document.getElementById("model");

    imahe.onclick = function () {
    modal.style.display = "block";
    imaheModel.src = this.src;
    }

    imahe1.onclick = function () {
    modal.style.display = "block";
    imaheModel.src = this.src;
    }

    imahe2.onclick = function () {
    modal.style.display = "block";
    imaheModel.src = this.src;
    }

    imahe3.onclick = function () {
    modal.style.display = "block";
    imaheModel.src = this.src;
    }

let button = document.getElementById("button");

button.onclick = () => {
    modal.style.display = "none";
}
