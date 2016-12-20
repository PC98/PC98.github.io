function show_more (d, a) {
    if(document.getElementById(d).style.display == "none") {
        document.getElementById(d).style.display = "block";
        window.location = a;
    } else {
        document.getElementById(d).style.display = "none";
    }
}