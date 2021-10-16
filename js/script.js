
//-------------------------------- Sidebar functionalities ------------------ Sidebar functionalities ---------------------- //

var numberBtnSidebarBody = document.querySelectorAll(".btn-sidebar-item-collapse").length;

for (var i = 0; i < numberBtnSidebarBody; i++) {

    document.querySelectorAll(".btn-sidebar-item-collapse")[i].addEventListener("click", function () {

        // console.log(this.parentElement.parentElement.children[1].getElementsByClassName("sidebar-item-body")[0]);

        this.parentElement.parentElement.children[1].getElementsByClassName("sidebar-item-body")[0].classList.toggle("display-none");

        if (this.innerHTML === "▲") {

            this.innerHTML = "▼";

        } else {

            this.innerHTML = "▲";
        }

    });
}

// document.querySelectorAll(".btn-sidebar-item-collapse")[i].addEventListener("click", toggleSidebarItemBody)

// document.querySelector(".btn-sidebar-item-collapse").addEventListener("click", toggleSidebarItemBody);

// document.querySelectorAll(".sidebar-item-body")[i].classList.toggle("display-none");

// var numberBtnSidebarBody = document.querySelectorAll(".btn-sidebar-item-collapse").length;

// for (var i = 0; i < numberBtnSidebarBody; i++) {

//     document.querySelectorAll(".btn-sidebar-item-collapse")[i].addEventListener("click", toggleSidebarItemBody(this));
// }


// function toggleSidebarItemBody(a) {
//     console.log(a);
// }

// here we are adding order numbers
// document.querySelectorAll(".sidebar-item-body")[i].classList.toggle("display-none");




//--------------------------- Mobile Responsiveness --------------------------- Mobile Responsiveness-------------------------------//


//--------------- Open the sidebar/calendar function----------

document.querySelector("#btn-sidebar-calendar").addEventListener("click", displaySidebarCalendar);

function displaySidebarCalendar() {

    document.querySelector(".sidebar-calendar-nav").classList.remove("display-none");

    document.querySelector("main").classList.add("display-none");
}
document.querySelector("#btn-sidebar-calendar").addEventListener("click", displaySidebarCalendar);


//---------------- Open the menu function ---------------

document.querySelector("a.logo").addEventListener("click", displayMenu);

function displayMenu() {

    document.querySelector(".sidebar-calendar-nav").classList.add("display-none");

    document.querySelector("main").classList.remove("display-none");
}