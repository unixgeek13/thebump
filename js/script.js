$( function() {
    // $( ".resizable" ).resizable();
    $('[data-toggle="tooltip"]').tooltip();
 
    
    $('.filterIcon').on('click',function(e){
      $(this).parents(".filterSide_blk").find('input[type="radio"], input[type="checkbox"]').prop("checked", false);
    });
    $('.accTitle_js').on('click',function(e){
      $(this).toggleClass("collapsed");
      $(this).parents(".accordion_li").find(".collContent_js").toggleClass("show").slideToggle();
    });
   
   

    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fixed-header');
            $('.mainsectionPage').addClass('fixed-headerStyle');
        }
        else {
            $('header').removeClass('fixed-header');
            $('.mainsectionPage').removeClass('fixed-headerStyle');
        }
        var mainSection_offset = $(".aside_blk").offset();
        //console.log(mainSection_offset.top +" , "+ $(window).scrollTop());
        if(mainSection_offset.top <= $(window).scrollTop()){
          $(".filterSide_blk").addClass("stickySidebar");
        }
        else{
          $(".filterSide_blk").removeClass("stickySidebar");
          
        } 
    });
  } );
