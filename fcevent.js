worktime.fcevent = (function() {
  'use strict';

  var datastore,
      jqMap = {};

  // Private Functions
  function makeEventNode(fcEvents) {
    for (var i = 0; i < fcEvents.length; i++) {
      var exEventHtml = '<div class="fc-event">' + fcEvents[i].title + '</div>';
      jqMap.externalEvents.append(exEventHtml);
    }
  }

  // Global Functions
  function initModule(option, jqNode) {
    datastore = option.datastore;
    jqMap.externalEvents = jqNode;

    makeEventNode(datastore.load('fc_event'));

    /* initialize the external events
    -----------------------------------------------------------------*/
    $('#external-events .fc-event').each(function() {

      // store data so the calendar knows to render an event upon drop
      $(this).data('event', {
        title: $.trim($(this).text()), // use the element's text as the event title
        stick: true // maintain when user navigates (see docs on the renderEvent method)
      });

      // make the event draggable using jQuery UI
      $(this).draggable({
        zIndex: 999,
        revert: true,      // will cause the event to go back to its
        revertDuration: 0  //  original position after the drag
      });

    });
  }

  return {
    initModule: initModule,
  }
}());
