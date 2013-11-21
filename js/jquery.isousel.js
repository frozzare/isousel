(function ($) {

  $.support.transition = false; // Todo.

  // Isousel definition.

  var Isousel = function (el) {
    this.$el = $(el);
    this.$items = this.$el.find('.isousel-item');
  };


  Isousel.prototype = {

    next: function () {
      return this.slide('next');
    },

    prev: function () {
      return this.slide('prev');
    },

    slide: function (type) {
      var $active = this.$el.find('.isousel-item.active')
        , index
        , $next;

      if (type === 'next') {
        index = this.$items.index($active) + 1;
        index = index < this.$items.length ? index : 0;
      } else {
        index = this.$items.index($active) - 1;
        index = index > this.$items.length ? index : 0;
      }

      $next = this.$items.eq(index);

      if ($.support.transition) {
         // do da magic.
      } else {
        $active.removeClass('active');
        $next.addClass('active');
      }
    }

  };

  // jQuery plugin definition.

  $.fn.isousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('isousel')
        , action = typeof option == 'string' ? option : null;

      if (!data) {
        $this.data('isousel', (data = new Isousel(this, option)));
      } else if (action) {
        data[action]();
      }
    });
  };

  // Set plugin constructor.

  $.fn.isousel.constructor = Isousel;


})(jQuery);


// Demo code

(function animloop(){
  ///setInterval(animloop, 5000);
  $('.isousel').isousel('next');
})();