/**
 * Created by Leon on 10/10/2014.
 */
(function () {
    'use strict';

    angular.module('app').controller('homeCtrl', ['angularLoad', homeCtrl]);

    function homeCtrl (angularLoad) {
        var vm = this;



        angularLoad.loadScript('assets/js/revolution_slider.js');

        angularLoad.loadScript('javascripts/scripts.js');
    }
})();