/* "use strict";

import ScrollOut from 'scroll-out';

ScrollOut({
  targets: "#intro-details",
  offset: 400
});

ScrollOut({
  onShown: function(el) {
    // remove the class
    el.classList.remove("animated");

    // force reflow
    void el.offsetWidth;

    // re-add the animated cl
    el.classList.add("animated");
  }
}); */