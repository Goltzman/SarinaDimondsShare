$(document).ready(function() {

  $( "#color_bar" ).buttonset();
  $( "#clarity_bar" ).buttonset();
	
	$( "#slider-range" ).slider({
		range: true,
		min: 0.25,
		max: 6,
		values: [ 0.25, 6 ],
		step: 0.05,
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] + "  Carat" );
		}
	});
	
	$( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
		" - " + $( "#slider-range" ).slider( "values", 1 ) + "  Carat");
		
  $("#slider").zAccordion({
  	width: 960,
  	timeout: 4000,
    easing: 'easeOutQuart',
  	speed: 1200,
  	slideClass: "slider",
  	animationStart: function() {
      // $("#slider").find("li.slider-open div.slider-info").css("display", "none");
      //   		$("#slider").find("li.slider-previous div.slider-info").css("display", "none");
  	},
  	animationComplete: function() {
      // $("#slider").find("li.slider-open div.slider-info").fadeIn(600);
      // $("#slider").find("li.slider-previous div.slider-info").fadeIn(600);
  	},
    slideWidth: 400,
  	height: 350
  });
  
  
  $.getJSON('promoted_products.json', function(mycarousel_itemList) {
    var items = [];

    $.each(mycarousel_itemList, function(key, val) {
      items.push('<li id="' + key + '">' + val + '</li>');
    });

    $('<ul/>', {
      'class': 'my-new-list',
      html: items.join('')
    }).appendTo('body');
    console.log(mycarousel_itemList);
    console.log(items);
  });
  // promoted carousel using jcarousel
  $('#promoted_carousel').jcarousel({
      size: mycarousel_itemList.length,
      itemLoadCallback: {onBeforeAnimation: mycarousel_itemLoadCallback},
      visible: 4,
      wrap: 'circular'
  });
});


var mycarousel_itemList = [
    {url: "http://static.flickr.com/66/199481236_dc98b5abb3_s.jpg", title: "Flower1"},
    {url: "http://static.flickr.com/75/199481072_b4a0d09597_s.jpg", title: "Flower2"},
    {url: "http://static.flickr.com/57/199481087_33ae73a8de_s.jpg", title: "Flower3"},
    {url: "http://static.flickr.com/77/199481108_4359e6b971_s.jpg", title: "Flower4"},
    {url: "http://static.flickr.com/58/199481143_3c148d9dd3_s.jpg", title: "Flower5"},
    {url: "http://static.flickr.com/72/199481203_ad4cdcf109_s.jpg", title: "Flower6"},
    {url: "http://static.flickr.com/58/199481218_264ce20da0_s.jpg", title: "Flower7"},
    {url: "http://static.flickr.com/69/199481255_fdfe885f87_s.jpg", title: "Flower8"},
    {url: "http://static.flickr.com/60/199480111_87d4cb3e38_s.jpg", title: "Flower9"},
    {url: "http://static.flickr.com/70/229228324_08223b70fa_s.jpg", title: "Flower10"}
];

// add returned products to the carousel
function mycarousel_itemLoadCallback(carousel, state)
{
    for (var i = carousel.first; i <= carousel.last; i++) {
        if (carousel.has(i)) {
            continue;
        }

        if (i > mycarousel_itemList.length) {
            break;
        }

        carousel.add(i, mycarousel_getItemHTML(mycarousel_itemList[i-1]));
    }
};

/**
 * Item html creation helper.
 */
function mycarousel_getItemHTML(item)
{
  return '<img src="' + item.url + '" width="75" height="75" alt="' + item.url + '" />';
};

// jQuery(document).ready(function() {
//     jQuery('#promoted_carousel').jcarousel({
//         size: mycarousel_itemList.length,
//         itemLoadCallback: {onBeforeAnimation: mycarousel_itemLoadCallback},
//         wrap: 'circular',
//         visible: 4
//     });
// });
