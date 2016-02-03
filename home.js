//////////////////////////////////////////////////////////////
// Home.js - demonstrate setting behaviors for specific    //
//            events, using Javascript                      //
//                                                          //
// Vijayendra Ghadge,                                       //
//CSE686 - Internet Programming, Spring 2016                //
//////////////////////////////////////////////////////////////

function fadenhide()
{
    var x = document.getElementById("marvel");
    x.onclick = function () {
        this.style.color = "green";
    }
    var y = document.getElementById("hehe");
    y.onclick = function () {
        this.width = this.width - (10 * 2);
        this.height = this.height - (10 * 3);
    }
   
}

window.onload = function () {
    fadenhide();
}