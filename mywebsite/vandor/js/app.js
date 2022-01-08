$(document).ready(function(){
    // heder section===============================>
        function header(){
            $('#clickmebrn').click(function(){
                alert('Thank your for click me !');
            })
            var typed = new Typed('.element', {
                strings: ['I am a', 'WEBSITE DESIGNER AND DEVELOPER..'],
                loop:true,
                typeSpeed:150
              });
              var typed = new Typed('.element2', {
                strings: ['And', 'RESPONSIVE....'],
                typeSpeed:100,
                loop:true
              });

        }
        header();
        // about section===============================>
        function about(){
            var typed = new Typed('.abouttext', {
                strings: [' HTML,CSS,JAVASCRIPT, JQUERY ', ',BOOSTRAP,PHP,AJAX,MYSQLI'],
                typeSpeed:100,
                loop:true
            });

            $('#cologecard').on('click',function(){
                $('.modal_card').hide(200);
            })
            $('#morebtn').on('click',function(){
                $('.modal_card').show(200);
            })


        }
        about();























        // left menu
        function leftmenu(){
            $(document).on('scroll',function(){
                $('#home-icon').show(100);
            })
            $('#home-icon').click(function(){
                $('.leftnavber').show(200);
            })
            $('#home-icon').dblclick(function(){
                $('.leftnavber').hide(200);
            })
        }
        leftmenu();


})