$(document).ready(function(){

    $('button').on('click', function() {

      var topic = $(this).data('name');//this is the button that it will be clicked
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })

        .done(function(response) {


          var results = response.data;


          for (var i = 0; i < results.length; i++) {


           var bandDiv = $('<div/>');


            var p= $('<p/>');

            var rating = results[i].rating;
          var defaultAnimatedSrc = results[i].images.fixed_height.url;
          var staticSrc = results[i].images.fixed_height_still.url;
          var bandImage = $("<img>");
          var p = $("<p>").text("Rating: " + rating);


              bandImage.attr("src", staticSrc);
          bandImage.addClass("anImg");
          bandImage.attr("data-state", "still");
          bandImage.attr("data-still", staticSrc);
          bandImage.attr("data-animate", defaultAnimatedSrc);
          bandDiv.append(p);
          bandDiv.append(bandImage);
          $("#gifs").prepend(bandDiv);

            }


                 $('.anImg').on('click', function() {

                  var state = $(this).attr('data-state');

                  if (state == 'still') {

                    $(this).attr('src', $(this).data('animate'));

                    $(this).attr('data-state', 'animate');

                } else {

                    $(this).attr('src', $(this).data('still'));

                    $(this).attr('data-state', 'still');
                    }

            });

          

        });
  });


      var bands = [''];

   
//function when cliked
      $('#add-band').on('click', function(){


        var bandButton = $("#bands-input").val();

        //add new button
        var newButton = $("<button/>").addClass("btn btn-info band").attr('data-name', "#bandsButtons").html(bandButton)

        $("#bandsbuttons").append(newButton);
          console.log(newButton);

          queryURL = "https://api.giphy.com/v1/gifs/search?q=" + bandButton + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {


          var results = response.data;

          for (var i = 0; i < results.length; i++) {


            var bandDiv = $('<div/>');


            var p= $('<p/>')

               var rating = results[i].rating;
          var defaultAnimatedSrc = results[i].images.fixed_height.url;
          var staticSrc = results[i].images.fixed_height_still.url;
          var bandImage = $("<img>");
          var p = $("<p>").text("Rating: " + rating);


              bandImage.attr("src", staticSrc);
          bandImage.addClass("anImg");
          bandImage.attr("data-state", "still");
          bandImage.attr("data-still", staticSrc);
          bandImage.attr("data-animate", defaultAnimatedSrc);
          bandDiv.append(p);
          bandDiv.append(bandImage);
          $("#gifs").prepend(bandDiv);

      }

         $('.anImg').on("click", function() {

                var state = $(this).attr('data-state');

                if (state == 'still') {

                    $(this).attr('src', $(this).data('animate'));

                    $(this).attr('data-state', 'animate');

                } else {

                    $(this).attr('src', $(this).data('still'));

                    $(this).attr('data-state', 'still');
                }


            });

        });

$("#bands-input").val("");
            return false;
          

    })

});

