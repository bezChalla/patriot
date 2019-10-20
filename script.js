$(document).ready(function(){
    //hide results template and error alerts on initial page load
    $("#results").hide();
    $(".alert").hide();

    // prevent ability to type negative number or spaces in the input fields
    $("[type='number']").bind("keydown", function(e){
        let code = e.keyCode || e.witch;

        if(code == 189 || code == 173 || code == 32 || code == 69 || code == 109){
            return false;
        }
    });

    $("#calculate-btn").on("click", function() {
        let calculateAndDisplayScore = function() {
            window.scrollTo(0,400);
            //hide form template if all inputs are completed
            $("#form").hide();

            //get input values
            let milesInput = document.getElementById("miles").nodeValue;
            let showMinInput = document.getElementById("showMin").nodeValue;
            
            //set variables for calculating each component score
            let wasteScore = "";
            let transScore = "";
            let waterScore = "";
            let energyScore = "";
            let thermoScore = "";

            let totalScore = "";

            if (document.getElementById("optionsRadio1").checked) {
				wasteScore = 0;
			} else if (document.getElementById("optionsRadio2").checked) {
				wasteScore = 184;
			} else if (document.getElementById("optionsRadio3").checked) {
				wasteScore = 184;
			}else if (document.getElementById("optionsRadio4").checked) {
				wasteScore = 184;
			}else {
				wasteScore = 184;
            }
            
            if (document.getElementById("optionsRadio6").checked) {
				transScore = 400;
			} else if (document.getElementById("optionsRadio7").checked) {
				transScore = 0;
			} else if (document.getElementById("optionsRadio8").checked) {
				transScore = 22;
			}else if (document.getElementById("optionsRadio9").checked) {
				transScore = 200;
			}else {
				transScore = 100;
            }
            
            if (document.getElementById("optionsRadio11").checked) {
				waterScore = 204;
			}else {
				waterScore = 0;
            }
            
            if(document.getElementById("optionsRadio13").checked) {
				energyScore = 0;
			}else if (document.getElementById("optionsRadio14").checked && document.getElementById("optionsRadio18").checked) {
				energyScore = 8450 ;
			}else if (document.getElementById("optionsRadio14").checked && document.getElementById("optionsRadio19").checked) {
				energyScore = 14080;
			}else if (document.getElementById("optionsRadio15").checked && document.getElementById("optionsRadio18").checked) {
				energyScore = 16900;
			}else if (document.getElementById("optionsRadio15").checked && document.getElementById("optionsRadio19").checked) {
				energyScore = 28160;
			}else if (document.getElementById("optionsRadio16").checked && document.getElementById("optionsRadio18").checked) {
				energyScore = 25340;
			}else if (document.getElementById("optionsRadio16").checked && document.getElementById("optionsRadio19").checked) {
				energyScore = 42240;
			}else if (document.getElementById("optionsRadio17").checked && document.getElementById("optionsRadio18").checked) {
				energyScore = 33800;
			}else if (document.getElementById("optionsRadio17").checked && document.getElementById("optionsRadio19").checked) {
				energyScore = 52320;
			}
        }
    });

});