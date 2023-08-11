jQuery(document).ready(function() {
    const leftCities = [
        'Uralsk',
        'Moscow',
        'New York',
        'Atlanta',
        'Petersburg',
        'Samara'
    ];

    const rightCities = [
        'Almaty',
        'Astana',
        'Kaliningrad',
        'Saratov',
        'Dallas',
        'Aktobe'
    ];

    // show Booking button on clicking booking button on search page
    jQuery('.search-card-footer button').click(function() {
         jQuery(this).attr('disabled', true);
         jQuery('.search-popup').fadeIn(300);
         jQuery('.search-popup').css('display', 'flex');
    });

    // changes hero text on the main page. changes every 1500ms
    // gets random index from arrays and change text
    if(jQuery('.hero')) {
        setInterval(() => {
            jQuery('.random-city').each(function(i) {
                if(i %2 === 0) {
                    jQuery(this).text(leftCities[Math.floor(Math.random() * (leftCities.length + 1))]);
                } else {
                    jQuery(this).text(rightCities[Math.floor(Math.random() * (rightCities.length + 1))]);
                }
            });

            jQuery('.random-price').html(10 + Math.floor(Math.random() * (1000 - 10 + 1)));
        }, 1500);
    }

    // select seats on click
    jQuery('.seat').each(function() {
        jQuery(this).click(function() {
            jQuery(this).toggleClass('active');
        });

        jQuery(this).keyup(function (e) {
            if(e.key === 'Enter') {
                jQuery(this).toggleClass('active');
            }
        });
    });
});