$(document).ready(function() {
  // init Isotope
var $grid = $('.store-items').isotope({
  // options
});
// filter items on button click
$('.cake-btn-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
});