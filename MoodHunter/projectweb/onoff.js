var darkEnabled = false; 
$(document).ready(function() {
    $("#dark").on("click", switchDarkMode);
    $("#reset").on("click", reset);
 }
);
      
    function switchDarkMode(){
    darkEnabled = !darkEnabled;
    if(darkEnabled){
    $("body").addClass("darkmode");
     } else {
     $("body").removeClass("darkmode");
   }
}
      
	function reset(){
	$("body").removeClass("darkmode");
}
