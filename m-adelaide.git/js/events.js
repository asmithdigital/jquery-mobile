 // fixed header and footer 
  $(function(){
    $( "[data-role='header'], [data-role='footer']" ).toolbar();
  });      

  // API functions
  function doChange(newPage) {
      $("body").pagecontainer("change", newPage, {transition: "slide"});
    }


    // events
    $(document).on('pagecreate', function (evt) {
        // $("#firstpage").on("tap", function (e) {
        //     alert("you tapped!");
        // });

        // $("#firstpage").on("swiperight", function (e) {
        //     alert("you swiped right!");
        // });

        // $("#firstpage").on("swipeleft", function (e) {
        //     alert("you swiped left!");
        // });

        $("#firstpage").on("orientationchange", function (e, o) {
            alert("Orientation changed to: " + e.orientation);
        });

        // $(document).on("scrollstop", function (e) {
        //     console.log("scrolling stopped");
        // });
        // $(document).on("scrollstart", function (e) {
        //     console.log("scrolling started");
        // });

        // $(document).on('pagebeforecreate', function (evt) {
        //    alert("pagebeforecreate fired");
        // });

        // $(document).on('pagecreate', function (evt) {
        //    alert("pagecreatefired");
        // });

        // $(document).on('pagecontainerload', function (evt,data) {
        //    alert("page loaded:\nURL: " + data.url);
        // });


        //  $(document).on('pagecontainerbeforehide', function (evt,data) {
        //    alert("page about to be hidden");
        // });

        // $(document).on('pagecontainerbeforeshow', function (evt,data) {
        //    alert("page about to be shown");
        // });

        // $(document).on('pagecontainerhide', function (evt,data) {
        //    alert("page has been hidden");
        // });

        // $(document).on('pagecontainershow', function (evt,data) {
        //    alert("page has been shown");
        // });
    });