// JavaScript Document
/*global document: false */


$(document).ready(function(e) {
	
	$("#thepsych").show();
	$("#ascroll").show();
	$("#historyOne").hide();
	$("#historyTwo").hide();
	$("#alberti").hide();
	$("#leonardo").hide();
	$("#goethe").hide();
	$("#wheel1").addClass('box_rotate');
	
	
    $(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
	
    var scrolled = $(window).scrollTop();
	
	 $('#thepsych').css('top',(400-(scrolled*0.15))+'px');
    $('#ascroll').css('top',(850-(scrolled*0.25))+'px');
    $('#paper').css('top',(0-(scrolled*0.15))+'px');
	$('#historyOne').css('top',(1200-(scrolled*0.10))+'px');
}

	$(window).on ('scroll', function(){
		
		if($(window).scrollTop() >= 150){
			
			$("#thepsych").fadeOut(7000);
			
		};
		
		if($(window).scrollTop() >= 250){
			

			$("#ascroll").fadeOut(7000);
			
		};
		
		if($(window).scrollTop() >=450){
			
			$("#thepsych").stop();
			$("#ascroll").stop();
			
		};
		
		if($(window).scrollTop() >=650){
			
			$("#historyOne").fadeIn(4000);
			//$("#historyTwo").fadeIn(4000);
		};
		
		if($(window).scrollTop() >=700){
			
			$("#alberti").show();
			$("#leonardo").show();
			$("#goethe").show();
		};
		
		$('.box-shadow').on('click', function(e){
			addEffect();
		});
    		
			function addEffect(){
				
		
            //$("#alberti" ).effect("clip", "slow");
			  $("#alberti").hide( "drop", { direction: "down" }, "slow" );
			  $("#leonardo").show();
			  $("#goethe").hide();
			  $("#leonardo").hide( "drop", { direction: "down" }, "slow" );
			  $("#goethe").show();
			  $("#historyOne").fadeOut(200);
			  $("#historyTwo").fadeIn(200);
			  $("#alberti").show();
			  
        		 //$("#goethe").hide( "drop", { direction: "down" }, "slow" );
			
			//};
			
			//$(this).animate({'left' : 1000});
			};
});
            
			if($(window).scrollTop() >=1450){
				
				//$("#wheel1").hover(function(e) {
					
			  		//turnWheel();
				//});
				
				//function turnWheel(e){
					
					//$("#wheel1").css.animate({'position':' })
					//$(this).css.animate({'right' : 100})
					//$(this).css.animate({'down' : 100})
				};
             
			   
		
	$(window).scroll(function () { 
        //You've scrolled this much:
           $('p').text("You've scrolled " + $ (window).scrollTop() + " pixels");
    });
		
		
		//$(document).ready(function () {
			
			//if($(window).scrollTop() <= 2540){
				
				//$(".scroLeft").scrollLeft(0);
			
			//};
			
			//if($(window).scrollTop() >=1200){
				
				//$(document).scrollLeft(1000);
				
			//};
			

		
			});