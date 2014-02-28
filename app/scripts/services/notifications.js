/**
 * Created by bennekroufm on 11/02/14.
 */

'use strict';

angular.module('OffreApp')

.factory('notificationService', [
    '$timeout'
    ,'NOTIFICATION_TYPE'
    ,function ($timeout, NOTIFICATION_TYPE) {

    var timetolive = 4000;
    var timetoliveError = 5000;

    var notifications = [];

    var notificationService = {};

    notificationService.getNotifications = function () {
        return notifications;
    };

    notificationService.pushSuccess = function (title, messages) {
        var notif = {type: NOTIFICATION_TYPE.SUCCESS, title:  title, messages: messages};
        notifications.push(notif);
        $timeout(function(){notificationService.remove(notif)},timetolive);
    };
    notificationService.pushInfo = function (title, messages) {
        var notif = {type: NOTIFICATION_TYPE.INFO, title:  title, messages: messages};
        notifications.push(notif);
        $timeout(function(){notificationService.remove(notif)},timetolive);
    };
    notificationService.pushWarning = function (title, messages) {
        var notif = {type: NOTIFICATION_TYPE.WARNING, title:  title, messages: messages};
        notifications.push(notif);
        $timeout(function(){notificationService.remove(notif)},timetolive);
    };
    notificationService.pushError = function (title, messages) {
        var notif = {type: NOTIFICATION_TYPE.ERROR, title:  title, messages: messages};
        notifications.push(notif);
        $timeout(function(){notificationService.remove(notif)},timetoliveError);
    };

    notificationService.remove = function (notification) {
        var idx = notifications.indexOf(notification);
        if (idx > -1) {
            notifications.splice(idx, 1);
        }
    };

    notificationService.removeAll = function () {
        notifications.length = 0;
    };

    return notificationService;
}]);