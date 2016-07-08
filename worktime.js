
var worktime = (function(option){
  'use strict';

  var config,
      datastore,
      fcevent,
      calendar,
      jqMap = {};

  // Global Functions
  function initModule(jqNode) {
    jqMap.main = jqNode;

    datastore = worktime.datastore;
    fcevent = worktime.fcevent;
    calendar = worktime.calendar;

    datastore.initModule();

    fcevent.initModule({datastore: datastore}, $('#external-events'));

    calendar.initModule({}, $('#calendar'))
  }

  return {
    initModule: initModule
  }
}
());
