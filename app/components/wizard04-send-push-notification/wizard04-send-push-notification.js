angular.module('upsConsole')
  .controller('Wizard04SendPushNotificationController', function( $rootScope, $router, $interval, $timeout, createAppWizard, Notifications, messageSenderEndpoint, appModal, applicationsEndpoint, gettextCatalog) {

    var self = this;

    var intervalForUpdateDeviceCount;

    this.canActivate = function() {
      if ( !createAppWizard.app ) {
        $rootScope.$broadcast('upsNavigate', '/wizard/create-app');
        return false;
      }
      if ( !createAppWizard.variant ) {
        $rootScope.$broadcast('upsNavigate', '/wizard/add-variant');
        return false;
      }
      return true;
    };

    this.app = createAppWizard.app;
    this.variant = createAppWizard.variant;
    this.deviceCount = 0;

    this.pushData = {
      'message': {
        'sound': 'default',
        'alert': gettextCatalog.getString('Hello! This is my first notification to {{name}}', {name: (self.variant ? self.variant.name : null)}),
        'simple-push': 'version=' + new Date().getTime()
      },
      'criteria' : {}
    };



    this.sendNotification = function() {
      messageSenderEndpoint( self.app.pushApplicationID, self.app.masterSecret ).send({}, self.pushData)
        .then(function() {
          $rootScope.$broadcast('upsNotificationSent', self.pushData, self.app);
          Notifications.success(gettextCatalog.getString('Notification was successfully sent'));
          $rootScope.$broadcast('upsNavigate', '/wizard/setup-sender');
        })
        .catch(function() {
          Notifications.error(gettextCatalog.getString('Failed to sent notification'));
        });
    };

    this.editAppName = function() {
      var appClone = angular.extend( {}, self.app );
      appModal.editName( appClone )
        .then(function( updatedApp ) {
          angular.extend( self.app, updatedApp );
        });
    };

    function updateDeviceCount() {
      applicationsEndpoint.getWithMetrics({appId: createAppWizard.app.pushApplicationID})
        .then(function(data) {
          self.deviceCount = data.$deviceCount;
        });
    }

    this.activate = function() {
      updateDeviceCount();

      $timeout(function() { // timeout is a workaround for bug in the router - canDeactivate is called right after activate
        intervalForUpdateDeviceCount = $interval(function () {
          updateDeviceCount();
          if (self.deviceCount > 0) {
            $interval.cancel(intervalForUpdateDeviceCount);
          }
        }, 1500);
      }, 1500);
    };

    this.canDeactivate = function() {
      if (intervalForUpdateDeviceCount) {
        $interval.cancel(intervalForUpdateDeviceCount);
      }
      return true;
    };

  });


