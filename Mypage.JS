var TP = 0 ;
var TR = 0 ;
var TA = 0 ;
var TT = 0 ;

var count = 0 ;
 

function addStats(){
	var x = document.getElementById("stats");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function add(){
	var PPG = document.getElementById("PPG").value;
	var REB = document.getElementById("REB").value;
	var AST = document.getElementById("AST").value;
	var TOV = document.getElementById("TOV").value;
	
	document.getElementById("LPPG").innerHTML = "PPG: " + PPG;
	document.getElementById("LREB").innerHTML = "REB: " + REB;
	document.getElementById("LAST").innerHTML = "AST: " + AST;
	document.getElementById("LTOV").innerHTML = "TOV: " + TOV;
	

	
	addStats() ;
	avg(PPG, REB, AST, TOV) ;
}

function avg ( P, R, A, T){
	count = count + 1;

	
	TP = TP + parseInt(P) ;
	TA = TA + parseInt(A);
	TR = TR + parseInt(R);
	TT = TT + parseInt(T) ;
	
	document.getElementById("APPG").innerHTML = "PPG: " + (TP/count);
	document.getElementById("AREB").innerHTML = "REB: " + (TR/count);
	document.getElementById("AAST").innerHTML = "AST: " + (TA/count);
	document.getElementById("ATOV").innerHTML = "TOV: " + (TT/count);
}
