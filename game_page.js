player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="question_turn"+player1_name;
document.getElementById("player_answer").innerHTML="answer_turn"+player2_name;
function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log ("word in Lower Case"+word);

    char1=word.charAt(1);
    console.log (char1);

    length_div_2=Math.floor(word.length/2);
    char2=word.charAt(length_div_2);
    console.log(char2);

    length_minus_1=word.length-1;
    char3=word.charAt(length_minus_1);
    console.log (char3);

}