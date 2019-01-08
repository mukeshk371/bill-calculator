function singleNavButton() {
    var x = document.getElementById("navbar");
    if (x.className === "sticky") {
        x.className += " responsive";
    } else {
        x.className = "sticky";
    }
}