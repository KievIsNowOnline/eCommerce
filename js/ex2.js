$(document).ready(function () {
    
    // Set target string to be replaced, this time it is "XYZ"
    var targetString = "XYZ";
    var replacementString = "ABC";

    $('input[type="button"]').click(function () {

     
        // Stylize the actual role for readability
        $("p:contains('"+targetString+"')").text(function () {
           var retVal =  $(this).text().replace(targetString, replacementString);

            var temp = replacementString;
            replacementString = targetString;
            targetString = temp;

            return retVal;
        });



     
    })
});