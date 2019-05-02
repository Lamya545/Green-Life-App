$(document).ready(function() {

        $('form').on('submit', function(event){     
            event.preventDefault();
            var recipe = $('input').val();

            $.ajax({
                method: 'GET',
                url: 'https://api.edamam.com/search?q='+recipe+'&app_id=fb5cb5b9&app_key=%201dc798218570438d0be2430d7e401473',
                success: function(result){
                    
                    console.log(result.hits[0]);
                    // $(".container").append($('<img>').attr(result.hits.recipe.image));
                    // $(".container").append($('<img>').attr('src','https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg'));
                    
                   for (var i=0; i< result.hits.length; i++){
                    var  $div= $('<div/>').addClass('grid');
                    $(".container").append($div)
                    $div.append($('<h1>').addClass('lable').text(result.hits[i].recipe.label));
                    $div.append($('<img>').addClass('img').attr('src',result.hits[i].recipe.image));

                    result.hits[i].recipe.healthLabels.forEach(function(element) {
                        console.log(element)
                        $div.append($('<p>').addClass('health').attr(element));
                    })
                    result.hits[i].recipe.ingredients.forEach(function(element) {
                        console.log(element)
                        $div.append($('<p>').addClass('ingreed').text(element.text));
                    })
                    result.hits[i].recipe.dietLabels.forEach(function(element) {
                        console.log(element)
                        $div.append($('<p>').addClass('diet').text(element));
                    })
                   }
 

                },
                
                    error: function(error) {
                        console.log(error);
                      }
                

                    })
            })
        
    });
