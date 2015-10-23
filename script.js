$(document).ready(function(){
 var xClick=true

 $(".square").on("click",function(){
   if(xClick===true){
   $(this).append('<img id="x" src="x.png"/>')
   xClick=false
   }
   else{
   $(this).append('<img id="o" src="o.png"/>')
   xClick=true
   }
 })

 // $('#myButton').click(function(){
 //     if(buttonClicks > 6) return false;
 //      // update the click count
 //      buttonClicks++;
 //     // other code here.
 //   });

 $("button").on("click",function(){
   $(".square").empty()
   xClick = true
 })


})
