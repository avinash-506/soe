UIkit.util.on('#my-slider-1', 'itemshown' , function(e){
         var getindex = e.detail[0].index;
         if(getindex === 0){
            updateTabHighlight("tab1");
           }
         if(getindex === 1){
              updateTabHighlight("tab1");
           }
         if(getindex === 2){
              updateTabHighlight("tab1");
           }
         if(getindex === 3){
            updateTabHighlight("tab2");
         }
         if(getindex === 4){
            updateTabHighlight("tab2");
         }
         if(getindex === 5){
            updateTabHighlight("tab2");
         }
         if(getindex === 6){
            updateTabHighlight("tab3");
         }
         if(getindex === 7){
            updateTabHighlight("tab3");
         }
         if(getindex === 8){
            updateTabHighlight("tab3");
         }
    });


    var tabLinks = document.querySelectorAll(".tab-link");
    var slider = UIkit.slider("#my-slider-1");
    var activeIndex = 0;

    for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].addEventListener("click", function (event) {
        event.preventDefault();
        var target = this.getAttribute("data-tab");
        var slideIndex = calculateSlideIndex(target);

        slider.show(slideIndex);
        activeIndex = slideIndex;

        updateTabHighlight(target);
      });
    }

    function calculateSlideIndex(tab) {
      if (tab === "tab1") {
        return 0;
      } else if (tab === "tab2") {
        return 3;
      } else if (tab === "tab3") {
        return 6;
      }
    }

    function updateTabHighlight(tab) {
      for (var i = 0; i < tabLinks.length; i++) {
        var link = tabLinks[i];
        if (link.getAttribute("data-tab") === tab) {
          link.parentElement.classList.add("uk-active");
        } else {
          link.parentElement.classList.remove("uk-active");
        }
      }
    }

    slider.$el.addEventListener("show", function () {
      var currentSlide = slider.index();
    
      if (currentSlide >= 0 && currentSlide <= 2) {
        updateTabHighlight("tab1");
      } else if (currentSlide >= 3 && currentSlide <= 5) {
        updateTabHighlight("tab2");
      } else if (currentSlide >= 6 && currentSlide <= 8) {
        updateTabHighlight("tab3");
      }
    });

    // slider.on("itemshown", function () {
    //   var currentSlide = slider.index;

    //   if (currentSlide >= 0 && currentSlide <= 2) {
    //     updateTabHighlight("tab1");
    //   } else if (currentSlide >= 3 && currentSlide <= 5) {
    //     updateTabHighlight("tab2");
    //   } else if (currentSlide >= 6 && currentSlide <= 8) {
    //     updateTabHighlight("tab3");
    //   }
    // });