angular.module('madhu.booking-directive', []).
  directive('bookingTestDirective', function () {
     return {
        template : "<div style='padding:10px'><br/><h1>EMPACT components here!</h1><input type='text' style='width:200px' value='This is an input box'></input><br/></div>"
    };
  });