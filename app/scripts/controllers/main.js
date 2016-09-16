'use strict';

/**
 * @ngdoc function
 * @name galpaopetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the galpaopetApp
 */
angular.module('galpaopetApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  	

  	$scope.initialize = function(){

	    jQuery('.tp-banner').revolution({
            delay: 6000,
            startwidth: 1170,
            startheight: 800,
            hideThumbs: 10,
            fullWidth: "on",
            forceFullWidth: "on",
            navigationStyle: "preview4"
        });

		 // Masonry cubeportfolio
	    // $('#masnory-container').cubeportfolio({
	    //     filters: '#filters-container',
	    //     layoutMode: 'grid',
	    //     defaultFilter: '*',
	    //     animationType: 'flipOutDelay',
	    //     gapHorizontal: 20,
	    //     gapVertical: 20,
	    //     gridAdjustment: 'responsive',
	    //     mediaQueries: [{
	    //         width: 1100,
	    //         cols: 4
	    //     }, {
	    //         width: 800,
	    //         cols: 3
	    //     }, {
	    //         width: 500,
	    //         cols: 2
	    //     }, {
	    //         width: 320,
	    //         cols: 1
	    //     }],
	    //     caption: 'overlayBottomAlong',
	    //     displayType: 'bottomToTop',
	    //     displayTypeSpeed: 100,

	    //     // lightbox
	    //     lightboxDelegate: '.cbp-lightbox',
	    //     lightboxGallery: true,
	    //     lightboxTitleSrc: 'data-title',
	    //     lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
	    // });
  	}

	$scope.initialize();


	$(document).ready(function(){
	  var the = $("#section1").offset().top;

	  $(window).scroll(function(){
	    if($(this).scrollTop() >= the){
	      $("header").addClass("fixed");
	    }else{
	      $("header").removeClass("fixed");
	    }
	  })
	});

        
    var feed = new Instafeed({
        get: 'user',
        userId: '2346613867',
        resolution : 'standard_resolution',
        clientId: '178d1e66fad74adebbb4c6d560b4d496',
        limit:18,
        accessToken : '2346613867.1677ed0.8e76beebcedc423fab29eda9679ad6f4',
        template: '<div class="col-md-4"><div class="thumbnail-hover"><img src="{{image}}" class="img-responsive image"><div class="caption"><span class="heart"><i class="glyphicon glyphicon-heart"></i>  {{likes}}</span></div></div></div>'
    });
    feed.run();




  }]);