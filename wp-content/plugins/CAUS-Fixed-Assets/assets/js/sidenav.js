function openNav() {
    var wpBar = document.getElementById('wpadminbar')[0];
        if (wpBar !== null){
            var wpBarHeight = document.getElementById('wpadminbar').offsetHeight;
        }
    var headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    headerHeight = headerHeight+wpBarHeight;
    alert(headerHeight);
    /* var headerHeight = "142px"; */
    document.getElementById("mySidenav").style.top = (headerHeight+"px;");
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}