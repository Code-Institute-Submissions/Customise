function colorBtn() {
    $(document).ready(function(){

        $(".fadebtn").addClass("displayNone")
        
        $(".closefadebtn").removeClass("displayNone");  
        
        $(".colorNav").addClass("appear");
    });  
}

function closecolorBtn() {

    
     $(document).ready(function(){

         $(".fadebtn").removeClass("displayNone")
        
        $(".closefadebtn").addClass("displayNone");  
        
        $(".colorNav").removeClass("appear");
    });  

}

