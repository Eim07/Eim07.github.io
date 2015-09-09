// JavaScript Document



$(document).ready(function(){
	
			$("#paper").addClass('backgrounds');
			$("#goethe").hide();
			$("#leonardo").hide();
			$("#alberti").hide();
			$("#wheel1").hide();
			$("#redDiv").hide();
			$("#orangeDiv").hide();
			$("#yellowDiv").hide();
			$("#redInfoOne").hide();
			$("#redInfoTwo").hide();
			$("#thepsych").hide();
			$("#ascroll").hide();
			
			});

$(window).scroll(function(){
		
		var top = 0;
			top = $(window).scrollTop();
			$(window).height();
			
			});
		//var left = 0;
			//left = $(window).scrollLeft();
			//$(window).width();
			
				
		if ($(window).scrollTop() > 0) {
				
				$("#thepsych").show();														
				$("#thepsych").fadeIn(5000);
				$("#thepsych").fadeOut(5000);
		
																
		//if ($(window).scrollTop() >=150){
			//$("#ascroll").show();	
			//$("#ascroll").animate({ "right" : "20px"});
			//$("#ascroll").fadeOut(3000);
		};
		
		
		if ($(window).scrollTop() >=150){
			
			$("#ascroll").show();
			$("#ascroll").animate({
    		opacity: 0.55,
    		left: '+=75',
    		height: 'toggle'
  		}, 5000, function() {
    // Animation complete.
  	});
	
	
		if ($(window).scrollTop() >=200){
		
		
		$("#ascroll").fadeOut(4000);
		$("#ascroll").css({'display':'none'});
		//$("#alberti").fadeIn(3000);
		//$("#alberti").slideDown(3000);
		};
		//$("#historyOne").addClass('box_transition');
		
		if ($(window).scrollTop() >=300){
		
		$("#historyOne").addClass('infoBox');
		$("#historyTwo").addClass('infoBox');
		
		//$("#alberti").addClass('box_rotate');
		$("#historyOne").addClass('stitched');
		$("#historyTwo").addClass('stitched');
		
		
		$("#historyOne").fadeIn(4000);
		$("#historyOne").animate({ "top" : "+=20px"});
			
		};
		
		if ($(window).scrollTop() >=350){
			
		$("#historyTwo").fadeIn(4000);
		$("#historyTwo").animate({ "top" : "+=10px"});
			
		};
	//if ($(window).scrollTop() >= '5%'){
		
		//$("#thepsych").slideToggle(5000);
		
	//}
	
	
      		
    	
	
	
	
	
		//$('window').scroll('top', top * 5 +'px',(e));
		
		
		
		//$("#ascroll").scroll('top', top * 50 +'px');
		
		
		//$('.infobox').rotate({angle:45});
		
	if ($(window).scrollTop() >= 450){
		
		//$("#redInfoOne").slideUp(5000);
		//$('#historyOne').animate({scrollTop:500}, '5000', 'swing');
		$("#historyTwo").addClass('stitched');
		$("#historyTwo").show();
		$("#historyTwo").fadeIn(4000);
		$("#historyTwo").css('top', $(window).scrollTop() * 25 + 'px');

		console.log(jQuery(document).scrollTop());
		
	};
	
		};
	
		//$("#redDiv").scroll(function(){
    	
		//alert($("#redDiv").scrollTop.valueOf());

		