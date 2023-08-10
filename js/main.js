jQuery(document).ready(function() {
    jQuery('.search-card-footer button').click(function() {
         jQuery(this).attr('disabled', true);
         jQuery('.search-popup').fadeIn(300);
         jQuery('.search-popup').css('display', 'flex');
    });
});