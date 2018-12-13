 $( document ).ready(function() {
    $("#login-button").click(function(event){
		event.preventDefault();
		$('form').fadeOut(300);
		$('.wrapper').addClass('form-success');
		setTimeout("redireccionarPagina()", 2000);
	});
 });
function redireccionarPagina() {
	var user1=document.getElementById("inputEmail").value;
	var pass1=document.getElementById("inputPassword").value;
  	window.location = "controlICC.html";
}
