//--------------menu mobile----------

document.addEventListener("DOMContentLoaded", function(event) {

    const menuIcon = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');


    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("switch");

    })

});


//-------------------Pmenu-------------------

window.onscroll = function() {
    pMenu()
};

function pMenu() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("pmenu").className = "active";
    } else {
        document.getElementById("pmenu").className = "";
    }
}

// --------------------select------------------

var x, i, j, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}



function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);

let res = document.getElementById("res");

function reset() {

    a.textContent = "Select Project:";
}

res.addEventListener("click", reset)


// ---------------Modal-----------------


let modal = document.getElementById("myModal0");
let btn = document.getElementById("myBtn0");
let span = document.getElementsByClassName("close")[0];

let modal1 = document.getElementById("myModal1");
let btn1 = document.getElementById("myBtn1");
let span1 = document.getElementsByClassName("close")[1];

let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("myBtn2");
let span2 = document.getElementsByClassName("close")[2];

let modal3 = document.getElementById("myModal3");
let btn3 = document.getElementById("myBtn3");
let span3 = document.getElementsByClassName("close")[3];

let modal4 = document.getElementById("myModal4");
let btn4 = document.getElementById("myBtn4");
let span4 = document.getElementsByClassName("close")[4]


btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

btn1.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}
span2.onclick = function() {
    modal2.style.display = "none";
}

btn3.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

btn4.onclick = function() {
    modal4.style.display = "block";
}
span4.onclick = function() {
    modal4.style.display = "none";
}