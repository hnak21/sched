worktime.calendar = (function() {
  'use strict';

  var jqMap = {};

  // Global Functions
  function initModule(option, jqNode) {
    jqMap.calendar = jqNode;

    /* initialize the calendar
    -----------------------------------------------------------------*/

    jqMap.calendar.fullCalendar({
    	header: {
    		left: 'prev,next today',
    		center: 'title',
    		right: 'month,agendaWeek,agendaDay'
    	},
    	editable: true,
    	droppable: true, // this allows things to be dropped onto the calendar
    	drop: function() {
    		// is the "remove after drop" checkbox checked?
    		if ($('#drop-remove').is(':checked')) {
    			// if so, remove the element from the "Draggable Events" list
    			$(this).remove();
    		}
    	}
    });
  }

  return {
    initModule: initModule,
  }
}());
