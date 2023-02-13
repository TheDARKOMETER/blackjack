function dropdownMenu() {
    const x = document.getElementById("dropdownClick");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

