var oneshotAuto = true;
var refreshIntervalId = null;
var side = false;

const input = document.getElementById('autor');

function refresh() {

    beam = parseInt(document.getElementById('svi').value);
    if (beam == '') {
        return;
    }
    else if (beam > Number(document.getElementById('svi').max) || beam < Number(document.getElementById('svi').min) || parseFloat(beam) % 1 != 0) {
        document.getElementById("bs").style.color = "red";
    } else {
        document.getElementById("bs").style.color = "";
    }

    document.getElementById("sbhv").style.display = "none";
    document.getElementById("tbhv").style.display = "none";

    if (beam === 2) {
        document.getElementById("sbhv").style.display = "";
    }
    else if (beam === 3) {
        document.getElementById("sbhv").style.display = "";
        document.getElementById("tbhv").style.display = "";
    }
    
    if (document.getElementById('auto').checked) {
        if (started) {
            document.getElementById('start').disabled = true;
            // document.getElementById('side').disabled = true;
            document.getElementById('next').disabled = true;
            document.getElementById('autor').disabled = true;
            if (oneshotAuto) {
                oneshotAuto = false;
                refreshIntervalId = setInterval(() => {
                    if(!isQuestion){
                        if (next_count == 0) {
                            agent.nextMove();
                            next_count = 1; 
                        } else {
                            agent.QueenMove();
                            next_count = 0;
                        }}
                }, 1000*input.value)
            }
        } else {
            document.getElementById('next').disabled = false;
        }
    } else if (refreshIntervalId != null) {
        clearInterval(refreshIntervalId);
        document.getElementById('start').disabled = false;
        document.getElementById('next').disabled = false;
        // document.getElementById('side').disabled = false;
        document.getElementById('autor').disabled = false;


        oneshotAuto = true;
    }

    if (started) {
        document.getElementById('start').disabled = true;
        // document.getElementById('side').disabled = true;
        document.getElementById('autor').disabled = true;


    } else {
        document.getElementById('start').disabled = false;
        // document.getElementById('side').disabled = false;
        document.getElementById('autor').disabled = false;



        clearInterval(refreshIntervalId);
        document.getElementById('start').disabled = false;
        document.getElementById('next').disabled = false;
        // document.getElementById('side').disabled = false;
        document.getElementById('autor').disabled = false;


        oneshotAuto = true;
    }

    if (isQuestion || isObservation) {
		document.getElementById('QuestionBox').style.display = "";
        document.getElementById('next').disabled = true;
	} else {
		document.getElementById('QuestionBox').style.display = "none";
        document.getElementById('next').disabled = false;

	}

    if (ans_count == 0 && ans2_count == 0) {
        document.getElementById('Hint').innerHTML = "";
    }
	
	if (isObservation) {
		document.getElementById('qoro').innerHTML = "Observation";
		document.getElementById('submitform').style.display = "none";
	} else {
		document.getElementById('qoro').innerHTML = "Question";

        if (isQ1) {
		    document.getElementById('submitform').style.display = "";
        }
        else {
		    document.getElementById('submitform').style.display = "none";
        }
	}

    agent.speed = input.value;
}

setInterval(refresh, 30);
