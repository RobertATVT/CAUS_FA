$(document).ready(function (){
    $("#faa-toggle").on("click", function (){
    	if ($(".faa-asset").height() == 45) {
           $(".faa-asset").animate(
               {height: "90px"});
           }
        else if ($(".faa-asset").height() == 90) {
           $(".faa-asset").animate({height: "45px"});
           }
        });
    });// JavaScript Document