$( document ).ready(function() {


showschedule();

hideschedule();
reserve();
navtoggle();
subnav();
active()


});





  function reserve()
  {

  $('.book').on('click',function(event){


    event.preventDefault();

    var y=$(this).data('id');

    

   




    //console.log('heloo');
   
   

    $('.reserve'+'#'+y).addClass('is-open slide').siblings().removeClass('is-open');

   
    
    return false;
  


  });


  


}


function showschedule()
{

  $('.select').on('click',function(){



    $('.select').css('opacity','0');
    $('.main').fadeOut();
    var x=$(this).data('id');
   




    //console.log('.schedule'+'#'+x);
   
   

    $('.schedule'+'#'+x).addClass('is-open animate').siblings().removeClass('is-open animate');

   
    
    return false;
  


  });
}


function hideschedule()


{

  
  $('.close').on('click',function(event){




    event.preventDefault();

      $(this).parent().removeClass('is-open slide');



     //var x=$('.close' ).parent().data('id');



   //console.log('great');

    //$('.schedule'+'#'+x).removeClass('is-open');
    $('.select').css('opacity','1');
    $('.main').fadeIn();

  });


}


function navtoggle()


{

  
  $('.nav-toggle').on('click',function(){


    console.log('heloo consol');


      $('.nav-links').slideToggle();



     



   

  });


}

function subnav()


{

  
  $('nav>ul>li>a').on('click',function(event){

       event.preventDefault();


    //console.log('heloo consol');


    $(this).siblings().slideToggle();


    



     



   

  });


}


function active()


{

  
  $('nav>ul>li>a').on('click',function(event){

       event.preventDefault();


    console.log('heloo active');


    $(this).addClass('active');


    



     



   

  });


}



