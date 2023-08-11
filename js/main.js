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

    jQuery('.search-card-footer button').click(function() {
         jQuery(this).attr('disabled', true);
         jQuery('.search-popup').fadeIn(300);
         jQuery('.search-popup').css('display', 'flex');
    });

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
});