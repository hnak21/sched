
worktime.datastore = (function() {
  'use strict';

  //var remote = require("remote");

  // Global Functions
  function initModule(option) {

  }

  function load(key) {
    //remote.loadStorage(key);
    if (key == 'config') return '';
    if (key == 'fc_event') return [
			{title: 'event1'}, {title: 'event2'}, {title: 'event3'}
		];
  }

  function save(key, value) {
    //remote.saveStorage(key, value);
  }

  return {
    initModule: initModule,
    load: load,
    save: save
  }
}());
