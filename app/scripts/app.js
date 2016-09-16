'use strict';

/**
 * @ngdoc overview
 * @name galpaopetApp
 * @description
 * # galpaopetApp
 *
 * Main module of the application.
 */
angular
  .module('galpaopetApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).value('duScrollOffset', 230)

var map;
function initialize() {

  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng($("#gmap").data("altitude"),$("#gmap").data("longitude")),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('gmap'), mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng($("#gmap").data("altitude"),$("#gmap").data("longitude")),
    title: $("#gmap").data("title"),
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize);


function goTo(link){
  $('html, body').animate({scrollTop:$('#' + link).position().top - 150}, 'slow');      
}

$(document).ready(function(){
    $(".form-contact").submit(function(e){
      e.preventDefault();
      var form = $(this);
      $.ajax({
        url:"sender.asp",
        data: $(this).serialize(),
        success: function(resp){
            alert(form.data("success"));
            location.reload();
        },
        type:"POST"
      });
      return false;
    });
});