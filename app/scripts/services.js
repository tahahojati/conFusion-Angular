'use strict';
/*jslint node: true */
/*global angular*/
angular.module('confusionApp')
    .constant("baseURL", "http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource, baseURL) {
        var promotions = [{
                _id: 0,
                name: 'Weekend Grand Buffet',
                image: 'images/buffet.png',
                label: 'New',
                price: '19.99',
                description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
            }

        ];

        this.getDishes = function() {
            return $resource(baseURL + "dishes/:id", null, {
                'update': {
                    method: 'PUT'
                }
            });
        };

        this.getPromotion = function(index) {
            return $resource(baseURL + "promotions/:id", null);
        };


    }])
    .factory('corporateFactory', ['$resource', 'baseURL', function($resource, baseURL) {

        var corpfac = {};

        corpfac.getLeader = function() {
            return $resource(baseURL + 'leadership/:id');
        };
        return corpfac;


    }])
    .service('feedbackFactory', ['$resource', 'baseURL', function($resource, baseURL){
      this. feedback = function(){
        return $resource(baseURL + 'feedback/');
      };
    }])

;
