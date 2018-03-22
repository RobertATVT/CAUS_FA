function openNav() {
    var wpBar = document.getElementById('wpadminbar')[0];
        if (wpBar !== null){
            var wpBarHeight = document.getElementById('wpadminbar').offsetHeight;
        }
    var headerHeight = document.getElementsByTagName('header')[0].offsetHeight;
    headerHeight = headerHeight+wpBarHeight;
    
    /* var headerHeight = "142px"; */
    document.getElementById("mySidenav").style.setProperty("top", headerHeight+"px");
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

function causSideNav() {
    setInterval(function() {scrollSideNav()}, 10);
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
        });
          // START OPEN
    $('.button-collapse').sideNav('hide');
};
function scrollSideNav() {
    var offset = 0;
    if (jQuery(window).height() > 992) {
        var menu = document.getElementById('menu-main-nav');
        var menuRect = menu.getBoundingClientRect();
        offset = menuRect.bottom;
    } else {
        var header = document.getElementsByTagName('header')[0];
        var headerRect = header.getBoundingClientRect();
        offset = headerRect.bottom;

    }

    offset = offset + 'px';
    var sidebar = document.getElementById('faa-sidebar');
    sidebar.style.top = offset;
}

