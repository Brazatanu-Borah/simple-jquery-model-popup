$(document).ready(function () {

         
   $("#open").click(function(){
      $("#modal-container").css("transform", "scale(1)");
   });   
   
   $("#close").click(function(){
      $("#modal-container").css("transform", "scale(0)");
   });


});