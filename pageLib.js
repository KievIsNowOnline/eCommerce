$(document).ready(function () {
   
    var isLarge = false;

    $('img').click(function () {

        

        if (!isLarge) {
            $(this).css({
                'width': '600px',
                'height': '180px'
            })
        } else {
            $(this).css({
                'width': '300px',
                'height': '90px'
            })
        }
        
        isLarge = !isLarge;


    })

});