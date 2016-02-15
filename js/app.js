$(document).ready(function() {

var questionCount= 0;
// var radioValue='';
var score = 0;

function questionCountIncrease() {
	questionCount += 1;
	$(".questionnumber").html( questionCount );
}

function unhideRamen(){
	if(score == 1){
		$(".ramen1").css('visibility', 'visible');
	}
	else if(score == 2){
		$(".ramen2").css('visibility', 'visible');
	}
	else if(score == 3){
		$(".ramen3").css('visibility', 'visible');
	}
	else if(score == 4){
		$(".ramen4").css('visibility', 'visible');
	}
	else if(score == 5){
		$(".ramen5").css('visibility', 'visible');
	}

}

function scoreUpdate(){
	score += 1;
	$(".tally").text(score);
}

function resetScore(){
	score = 0;
	$(".tally").text(score);
}

function radioSearch() {
$("input[type='radio']:checked").each(function(){
	var radioValue = $(this).next().text();
	alert(radioValue);
	for(var i = 0; i < correctAnswersList.length; i++){
		if(radioValue == correctAnswersList[i]){
			$("input:radio").removeAttr("checked");
			alert("value is located in array");
			scoreUpdate();
			// $(".tally").text(score);
			unhideRamen();
		}		
	// if( $.inArray(radioValue, correctAnswersList) != -1){
	else{
		$("input:radio").removeAttr("checked");
	}
}
});
}
function questionChange(){
	if (questionCount == 2){
		$(".questionbox .question").text(questions.question2);
	}
	else if(questionCount == 3){
		$(".questionbox .question").text(questions.question3);
	}	
	else if(questionCount == 4){
		$(".questionbox .question").text(questions.question4);
	}	
	else if(questionCount == 5){
		$(".questionbox .question").text(questions.question5);
	}
	else {
		$(".questionbox .question").text("You answered " + score+ " questions out of 5 questions correctly.");
		// $(".questionbox").hide();
		$(".answerbox").hide();
		$(".playagainbox").fadeIn(3000);
			questionCount = 0;
	}	
}

$(".startquizbox").click(function(){
	$(".startquizbox").fadeOut(2000);
	$(".questionbox").fadeIn(3000);
	$(".answerbox").fadeIn(3000);
	questionCountIncrease();
	
	if(questionCount == 1){
		$(".questionbox .question").text(questions.question1);
		questionCall();
	}
	else{
		alert("notquestion1");
	}

	$(document).on("click", ".submitbutton", function(){
	radioSearch();
	questionCountIncrease();
	questionCall();
	questionChange();
	
	});

});

$(".playagainbox").click(function(){
	$(".playagainbox").fadeOut(2000);
	$(".score-ramen").children().css('visibility','hidden');
	$(".questionbox").fadeIn(3000);
	$(".answerbox").fadeIn(3000);
	resetScore();
	questionCountIncrease();
	
	if(questionCount == 1){
		$(".questionbox .question").text(questions.question1);
		questionCall();
	}
	// else{
	// 	alert("notquestion1");
	// }

	// $(document).on("click", ".submitbutton", function(){
	// radioSearch();
	// questionCountIncrease();
	// questionCall();
	// questionChange();
	
	// });
  

});

function questionCall() {

	if( questionCount ==1){ 

		$("label[for='answer1']").html(answerquestion1[0]);
		$("label[for='answer2']").html(answerquestion1[1]);
		$("label[for='answer3']").html(answerquestion1[2]);
		$("label[for='answer4']").html(answerquestion1[3]);
	}

	else if(questionCount ==2){
		$("label[for='answer1']").html(answerquestion2[0]);
		$("label[for='answer2']").html(answerquestion2[1]);
		$("label[for='answer3']").html(answerquestion2[2]);
		$("label[for='answer4']").html(answerquestion2[3]);

	}
	else if(questionCount ==3){
		$("label[for='answer1']").html(answerquestion3[0]);
		$("label[for='answer2']").html(answerquestion3[1]);
		$("label[for='answer3']").html(answerquestion3[2]);
		$("label[for='answer4']").html(answerquestion3[3]);
	}
	else if(questionCount ==4){
		$("label[for='answer1']").html(answerquestion4[0]);
		$("label[for='answer2']").html(answerquestion4[1]);
		$("label[for='answer3']").html(answerquestion4[2]);
		$("label[for='answer4']").html(answerquestion4[3]);
	}
	else if(questionCount ==5){
		$("label[for='answer1']").html(answerquestion5[0]);
		$("label[for='answer2']").html(answerquestion5[1]);
		$("label[for='answer3']").html(answerquestion5[2]);
		$("label[for='answer4']").html(answerquestion5[3]);
	}		


}

var answerquestion1 = [ "Chef Boyardee","Momofuko Ando","Colonel Sanders","Homer Simpson"];
var answerquestion2 = [ "200 billion","10 billion","30 billion","95 billion"];
var answerquestion3 = [ "1935","1958","1847","1982"];
var answerquestion4 = [ "boil","microwave","oven","fireplace"];
var answerquestion5 = [ "USA","China","South Korea","Japan"];

var correctAnswersList= ["Momofuko Ando", "95 billion", "1958", "boil", "South Korea"];

var questions = {
	question1: "Who was the inventor of instant ramen?",
	question2: "How many servings of instant ramen are consumed in 1 year?",
	question3: "In which year was instant ramen invented?",
	question4: "What is the preferred method of cooking instant ramen?",
	question5: "Which country consumes the most instant ramen per capita?"
};


});     