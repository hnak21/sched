
var worktime = (function(option){
  'use strict';

  var config,
      datastore,
      fcevent,
      jqMap = {};

  // Global Functions
  function initModule(jqNode) {
    jqMap.main = jqNode;

    datastore = worktime.datastore;
    fcevent = worktime.fcevent;

    datastore.initModule();

    fcevent.initModule({datastore: datastore}, $('#external-events'));
  }

  return {
    initModule: initModule
  }
}
());
