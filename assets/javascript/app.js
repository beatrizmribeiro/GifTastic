// Nice job scoping everything within a document.ready block 👌
$(document).ready(function(){

    $('button').on('click', function() {

      var topic = $(this).data('name');//this is the button that it will be clicked
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
          url: queryURL,
          method: "GET"
        })

        .done(function(response) {

          // Would be good to clear out the previous gifs so you only ever display 10 at a time.

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

                // This listener needs to be inside of the other listener because it only sets up listeners
                // for elements currently on the page that match the selector you use. You could move this out
                // of this function if you put the listener on a parent element and then passed in an additional
                // selector to denote which child elements to listen to. It would look something like this:
                // $(document).on('click', '.anImg', function(){ ... })

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

      // Since you're not generating the original band buttons dynamically,
      // you don't end up using this array for anything.
      // var bands = [''];

   
//function when cliked
      $('#add-band').on('click', function(){


        var bandButton = $("#bands-input").val();

        //add new button
        var newButton = $("<button/>").addClass("btn btn-info band").attr('data-name', "#bandsButtons").html(bandButton)

        $("#bandsbuttons").append(newButton);

          // Best to keep console.log statements out of your production code.
          // console.log(newButton);

          // This query logic essentially just copies the query logic from above so it'd
          // be a good idea to encapsulate the logic in a function that you can call in 
          // both places.
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

// The next two line can be removed.
// $("#bands-input").val("");
            // Another way to prevent the browser from reloading on form submit
            // is `event.preventDefault()` where `event` is the first argument
            // passed to the handler function. I'd recommend going that route because
            // it's a bit more clear what you're trying to achieve, but that's
            // just a personal preference.
            return false;
          

    })

});

