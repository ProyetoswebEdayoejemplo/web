// JavaScript Document
//para iniciar la programación en js es necesario iniciar con el $
$(document).ready(function() {
	//inicicio del codigo del menudesplegable
	
	  $('#btnmenu').click(function(){
		if($('#btnmenu').attr('class') == 'fa fa-bars'){
			$('#btnmenu').removeClass('fa fa-bars').addClass('fa fa-times');
			$('.navegacion .menu').css({'left':'0px'});
			$('.navegacion').css({'width':'100%', 'background':'rgba(0,0,0,0.3)'});
		}
		else{
			$('#btnmenu').removeClass('fa fa-times').addClass('fa fa-bars');
			$('.navegacion .menu').css({'left':'-320px'});
			$('.navegacion .submenu').css({'left':'-320px'});
		$('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,0.0)'});	
			}
	});
	// sub menus
	
	$('.navegacion .menu> .itemsubmenu a').click(function(){
		 var posmenu=$(this).parent().attr('vmenu');
		 
		 $('.itemsubmenu[vmenu='+posmenu+'] .submenu').css({'left':'0px'});
		 console.log(posmenu)
		
		});
		
		//ocultarel submenú
		$('.navegacion .submenu li.regresa').click(function(){
			$(this).parent().css({'left':'-320px'});
			});
	//fin del codigo del memu desplegable
	
	var numimg=$('.slider li').length;//la instrucción length cuenta los li del codigo html de la clase slider
	//console.log(numimg);
	var imgpos=1;
	var imgact=4;
	
	//la instrucción console.log muestra el resutado de una variable en la consola
	for(i=1;i<=numimg;i++){
		$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	}
	//append indica que insertara codigo html en java escript
   $('.slider li').hide();
   $('.slider li:first').show();
   $('.paginacion li:first').css({'color':'#c06e2e'});
   
   //ejecutar funciones
   $('.paginacion li').click(paginacion);
   $('.derecha span').click(siguienteimg);
   $('.izquierda span').click(anteriorimg);
   
   setInterval(function(){
	   siguienteimg();
   },4000);
   //crear funciones
   function paginacion()
   {
	   var paginacionpos=$(this).index()+1;
	   console.log(paginacionpos);
	   
	  $('.slider li').hide();
	  $('.slider li:nth-child('+paginacionpos+')').fadeIn();
	  //fade in hace que apresca gradualmente un elmento
	 $('.paginacion li').css({'color':'#858585'});
	 $(this).css({'color':'#cD6e2e'});
   }
   
   
   function siguienteimg()
   {if(imgpos>=numimg){
	   imgpos=1;
   }
   else{
	   	   imgpos++;
	   }
	  
	    $('.paginacion li').css({'color':'#858585'});
		$('.paginacion li:nth-child('+imgpos+')').css({'color':'#cD6e2e'});
	 $('.slider li').hide();
     $('.slider li:nth-child('+imgpos+')').fadeIn();  
	   
   }
   
    function anteriorimg()
   {
	   if(imgpos<=1){
	       imgpos=numimg;
		  
			  }
		else{
			 imgpos--; 
			   
		   }
	  	   
	    $('.paginacion li').css({'color':'#858585'});
		$('.paginacion li:nth-child('+imgpos+')').css({'color':'#cD6e2e'});
	 $('.slider li').hide();
     $('.slider li:nth-child('+imgpos+')').fadeIn();  
	   
   }
   
});