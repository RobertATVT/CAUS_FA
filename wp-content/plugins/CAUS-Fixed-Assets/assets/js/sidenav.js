/*
function openNav() {
    var wpBar = document.getElementById('wpadminbar')[0];
        if (wpBar !== null){
            var wpBarHeight = document.getElementById('wpadminbar').offsetHeight;
        }
    var headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    headerHeight = headerHeight+wpBarHeight;
    
    var headerHeight = "142px";
    document.getElementById("mySidenav").style.setProperty("top", headerHeight+"px");
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
} 
*/

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */

function showNav() {
//    document.getElementById("sidebar").style.left = "0px";
    document.getElementById("sidebar").style.marginLeft = "-30px";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("sidebar-items").style.width = "100%";
    jQuery('#sidebar-toggle').attr('onclick', 'hideNav()');
};
function hideNav() {
//    document.getElementById("sidebar").style.left = "-300px";
    document.getElementById("sidebar").style.marginLeft = "-330px";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("sidebar-items").style.width = "250px";
    jQuery('#sidebar-toggle').attr('onclick', 'showNav()');
};