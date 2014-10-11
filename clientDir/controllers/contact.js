/**
 * Created by Leon on 10/10/2014.
 */
(function () {
    'use strict';

    angular.module('app').controller('contactCtrl', ['angularLoad',contactCtrl]);

    function contactCtrl (angularLoad) {
        var vm = this;

        angularLoad.loadScript('javascripts/scripts.js');
    }
})();