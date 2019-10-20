$ (document).ready(function(){
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
            let input1 = document.getElementById("collapseOne").nodeValue;
            let input2 = document.getElementById("collapseTwo").nodeValue;
            let input3 = document.getElementById("collapseThree").nodeValue;
            let input4 = document.getElementById("collapseOne").nodeValue;
        }
    }

}