
 var main = $( function() {
    $( "#sortable1, #sortable2, #sortable3, #sortable4" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
     
     function addTask() {
        
        var taskText = $("#newTaskBox").val();
        // add new comment to the comments div
        var newTask = $("<li id='added'>");
        newTask.text(taskText);

        newTask.hide();
        $("#sortable1").append(newTask);
        newTask.slideDown();
         
        var newButton =$('<button type="button"  id="i">x</button>');
         newButton.hide();
         $("#added").append(newButton);

        $("#newTaskBox").val("");
    }

         $("#addTaskButton").click(function (event) {
        addTask();
         });
});
  } );

$(document).ready(main);

$(document).ready(function () {
    $("#lists").on('mouseenter', '.divbutton', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.divbutton', function () {
        $(this).find(":button").hide();
    }).on('click', ':button', function() {
        $(this).parent().remove();
    });
});
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);