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
        // let calculateAndDisplayScore = function() {
            window.scrollTo(0,400);
            //hide form template if all inputs are completed
            $("#form").hide();

            //get input values
            let milesInput = document.getElementById("miles").nodeValue;
            let showMinInput = document.getElementById("showMin").nodeValue;
            let tempInput = document.getElementById("temp").nodeValue;
            
            //set variables for calculating each component score
            let wasteScore = 0;
            let transScore = 0;
            let waterScore = 0;
            let energyScore = 0;
            let totalTransScore = 0;
            let totalWaterScore = 0;
            let totalTempScore = 0;

            let totalScore = 0;

            if (document.getElementById("optionsRadio1").checked) {
				wasteScore = 0;
			} else if (document.getElementById("optionsRadio2").checked) {
				wasteScore = 0;
			} else if (document.getElementById("optionsRadio3").checked) {
				wasteScore = 0;
			}else if (document.getElementById("optionsRadio4").checked) {
				wasteScore = 0;
			}else if (document.getElementById("optionsRadio5").checked) {
				wasteScore = 0;
            }
            
            if (document.getElementById("optionsRadio6").checked) {
				transScore = 400;
			} else if (document.getElementById("optionsRadio7").checked) {
				transScore = 0;
			} else if (document.getElementById("optionsRadio8").checked) {
				transScore = 22;
			}else if (document.getElementById("optionsRadio9").checked) {
				transScore = 200;
			}else if(document.getElementById("optionsRadio10").checked){
				transScore = 100;
            }
            
            if (document.getElementById("optionsRadio11").checked) {
				waterScore = 204;
			}else if(document.getElementById("optionsRadio12").checked){
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
            
            //console.log("Aluminum and tin score is: " + alumTinScore);

			if (milesInput === 0 || milesInput === "undefined") {
				totalTransScore = 0;
			} else if (milesInput > 0) {
				totalTransScore = milesInput * transScore;
			}
			// console.log("Electric score is: " + electricScore);

			if (showMinInput === 0 || showMinInput === "undefined") {
				totalWaterScore = 0;
			} else {
				totalWaterScore = showMinInput * waterScore;
			}
			// console.log("Gas score is: " + gasScore);

			if (tempInput === 0 || tempInput === "undefined") {
				totalTempScore = 0;
			} else if (tempInput > 0) {
				totalTempScore = (72-tempInput) * 54431;
            }
            
            

             //diet
            let dietPrint=0; //food eaten - food eaten at Ikes 

            let foodCunter=0;// footprint per mean in pounds 
            if(document.getElementById("beef").checked){
                foodCunter =+ 6.1;
            }if(document.getElementById("cheese").checked){
                foodCunter += 2.45;
            }if(document.getElementById("pork").checked){
                foodCunter += 1.72;
            }if(document.getElementById("poultry").checked){
                foodCunter += 1.76;
            }if(document.getElementById("eggs").checked){
                foodCunter += .89;
            }if(document.getElementById("milk").checked){
                foodCunter += .72;
            }if(document.getElementById("rice").checked){
                foodCunter += .16;
            }if(document.getElementById("legumes").checked){
                foodCunter += .11;
            }if(document.getElementById("carrots").checked){
                foodCunter += .07;
            }if(document.getElementById("potatos").checked){
                foodCunter += .03;
            }

            //convert footprint per serving to footprint per year 
            let mealAYear= 1095;
            dietPrint= mealAYear * foodCunter;
            //subtracting what is eaten at Ikes cuz local food save 7%
            if(document.getElementById("ikeYes").checked){
            let dietReduce= dietPrint * .07;
            dietPrint= dietPrint-dietReduce;
            }

            //recycling

            let reducing=0;// footprint reduced in pounds
            if(document.getElementById("can").checked){
                reducing += 89;
            }if(document.getElementById("paper").checked){
                reducing += 113;
            }if(document.getElementById("plastic").checked){
                reducing += 36;
            }if(document.getElementById("glass").checked){
                reducing += 25;
            }

            // calculate total score and round to nearest whole integer
			totalScore = Math.round(totalWaterScore + totalTransScore + totalTempScore + energyScore + dietPrint - reducing);
			let formattedScore = totalScore.toLocaleString("en");
            // console.log(totalScore);



            
            document.getElementById("summary").innerHTML = formattedScore;

			// display results
			$("#results").show();
        // }
    });

});