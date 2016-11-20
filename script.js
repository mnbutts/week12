$( document ).ready(function() {
	$("h1.position").animate({left: "+=50px"}, "slow");
  	$(".recipe").hide();
  	$("#recipe_one").on("click", function(){
  		$(".one").show();
  		$(".two, .three, .four, .five, .six, .seven").hide();
  		});
  	$("#recipe_two").hover(function(){
  		$(".two").show();
  		$(".one, .three, .four, .five, .six, .seven").hide();
  		});
  	$("#recipe_three").on("click", function(){
  		$(".three").fadeTo("slow", 0.66);
  		$(".two, .one, .four, .five, .six, .seven").hide();
  		});
  	$("#recipe_four").hover(function(){
  		$(".four").show();
  		$(".two, .three, .one, .five, .six, .seven").hide();
  		});
  	$("#recipe_five").click(function(){
  		$(".five").animate({ opacity: "show", left: 60, fontSize: "1.5em"}, 2000 );
  		$(".two, .three, .four, .one, .six, .seven").hide();
  		});
  	$("#recipe_six").on("click", function(){
  		$(".six").show();
  		$(".two, .three, .four, .five, .one, .seven").hide();
  		});
  	$("#recipe_seven").on("click", function(){
  		$(".seven").show();
  		$(".two, .three, .four, .five, .six, .one").hide();
  		});
});  