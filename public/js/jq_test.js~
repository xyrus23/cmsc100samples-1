$(document).ready(function(){
	
	$("#intro").hide();
/*	$("#show_heading").click({
		function(){
			$("#intro").show();
		}
	});*/
	$("#show_this").hide();	
	$("p.p1").on({
		"mouseover": function(){
			$("#show_this").fadeIn();
		},
		"mouseout": function(){
			$("#show_this").fadeOut();
		}
	});
	$(".textbox").keyup(function(){
			a = Number($("#a").val());
			b = Number($("#b").val());
			sum = a + b;
			$("#sum").val(sum);
	});
//	$("#newContent").load("index.html");
/*		$.get("http://localhost:5000/degree-programs/2",
			function(resp){
			console.log(resp);
		});
	});*/
	$("button[name='get_students']").click(function(){
		$.post("http://localhost:5000/degree-programs",{
				code: "BSF",
				name: "BS Forestry"
		},function(resp){
				console.log(resp);
		});
	});
	
	$("button[name='reverse']").click(function(){
		$(".n").each(function(){
			$(this).prop('checked', !$(this).is(':checked'));
		});
	});
	$("button[name='reset']").click(function(){
		$(".n").each(function(){
			$(this).attr('checked', false);
		});
	});
});
