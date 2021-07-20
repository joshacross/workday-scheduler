//USERSTORY//
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
//SO That I can manage my time effectively


//GIVEN I am using a dialy planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

$(document).ready(function() {

    var dateFormat = moment().format('dddd, MMM Do YYYY');
    $('#currentDay').html(dateFormat);

    $('.saveBtn').on('click', function() {
        var task = $(this).siblings('.task');
        var time = $(this).parent().attr('id');
    
    
        localStorage.setItem(time, task);
    });

$('#8 .task').val(localStorage.getItem('8am'));
$('#9 .task').val(localStorage.getItem('9am'));
$('#10 .task').val(localStorage.getItem('10am'));
$('#11 .task').val(localStorage.getItem('11am'));
$('#12 .task').val(localStorage.getItem('12am'));
$('#1 .task').val(localStorage.getItem('1pm'));
$('#2 .task').val(localStorage.getItem('2pm'));
$('#3 .task').val(localStorage.getItem('3pm'));
$('#4 .task').val(localStorage.getItem('4pm'));
$('#5 .task').val(localStorage.getItem('5pm'));
$('#6 .task').val(localStorage.getItem('6pm'));

function workdayScheduler() {
//  WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
    var currentTime = moment().hour();

    $('.list-group').each(function() {
        var timeBlock = parseInt($(this).attr('id').split('hour') [1]);

        if (timeBlock < currentTime) {
            $(this).addClass("text-danger");
            $(this).removeClass("text-success");
            $(this).removeClass("text-secondary");
        }
        else if (timeBlock === currentTime) {
            $(this).removeClass("text-danger");
            $(this).addClass("text-success");
            $(this).removeClass("text-secondary");
        }
        else {
            $(this).removeClass("text-success");
            $(this).removeClass("text-danger");
            $(this).addClass("text-secondary");
            }
        });
    }

    $("#task").on("click", "textarea", function() {
        var time = $(this).parent().attr('id');
        var text = $(this)
        .text()
        .trim();

        var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
        localStorage.setItem(time, text);
        return task;
      });
    
    $("#task").on("blur", "textarea", function() {
        var time = $(this).parent().attr('id');
        // get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();
    //get the parent ul's id attribute
    var status = $(this)
        .closest(".list-group")
        .attr("id")
        .replace("list-", "");
        localStorage.setItem(time, text);
    
    $("list-group").on("blur", "textarea", function() {
        // get the textarea's current value/text
        var text = $(this)
            .val()
            .trim();
        
        // get the parent ul's id attribute
        var status = $(this)
            .closest(".list-group")
            .attr("id")
            .replace("list-", "");
    
        // get the task's position in the list of other li elements
        var index = $(this)
            .closest(".list-group")
            .index();
    
        timeBlocks[status][index].text = text;
        saveTimeBlocks();
    
    });
    
    var saveTimeBlocks = function() {
        localStorage.setItem('timeBlocks', JSON.stringify(timeBlocks));
    };
    
        //   //get the task's position in the list of other li elements
          var index = $(this)
            .closest("#task")
            .index();
      
          tasks[status][index].text = text;
          saveTasks();
      
          //recreate p element
          var taskP = $("<li>")
            .addClass("m-1")
            .text(text);
      
          // replace textarea with p element
          $(this).replaceWith(taskP);
      });
    
    // color code using moment
    var auditTask = function(taskEl) {
        // get date from task element
        var date = $(taskEl).find("span").text().trim();
      
        // convert to moment object at 5:00pm
        var time = moment(date, "L").set("hour", 17);
      
        // remove any old classes from the element
        $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
      
        // apply new class if task is near/over due date
        if (moment().isAfter(time)) {
          $(taskEl).addClass("list-group-item-danger");
        }
        else if (Math.abs(moment().diff(time,"days")) <=2) {
          $(taskEl).addClass("list-group-item-warning");
        }
      };

});
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// array to create task-rows and hold task values
// var timeBlocks = [
//     { 
//         time: '8:00am', 
//         task: ''
//     },
//     { 
//         time: '9:00am', 
//         task: ''    },
//     { 
//         time: '10:00am', 
//         task: ''    },
//     { 
//         time: '11:00am',
//         task: ''    },
//     { 
//         time: '12:00pm', 
//         task: ''    },
//     { 
//         time: '1:00pm', 
//         task: ''    },
//     { 
//         time: '2:00pm', 
//         task: ''    },
//     { 
//         time: '3:00pm', 
//         task: ''    },
//     { 
//         time: '4:00pm', 
//         task: ''    },
//     { 
//         time: '5:00pm', 
//         task: ''    },
//     { 
//         time: '6:00pm', 
//         task: ''    }
// ];

// $(document).ready(function () {
//     $.each(timeBlocks, function(list, arr) {
//         $('ul').append(
//     })
// })

// // Run createSchedule script
// function createSchedule() {
//     // Check store. parse Data from JSON string, by getting timeBlocks data
//     var checkStorage = JSON.parse(localStorage.getItem("timeBlocks"));  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!timeBlocks) {
//         var noStorage = Object.create(timeBlocks);
//     } else {
//       // loop over object properties
//   $.each(timeBlocks, function(list, arr) {
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTimeBlock(timeBlock.text, timeBlock.time, list);
//     });
//   });

//     $.each(tasks, function(list, arr) {
//         arr.forEach(function(task) {
//             createTask(tast.text, tast.time, list);
//         })
//     })
//     timeBlocks.forEach(function(e) {
//         var time = timeBlocks.time;
//         var task = timeBlocks.task;
//         $(time).appendTo('#hour');
//         $(task).appendTo('#task');
//         timeBlockHours.push(e);
//     })
// }

// var timeBlockHours = [];
// createSchedule();



// var storageEvents = function() {
//     workDay.forEach(function (_currentHour) {
//         $(`#$(_currentHour.id)`)
//         .val(_currentHour.text);
//     })
// }

// var checkStorage = JSON.parse(localStorage.getItem("timeBlocks"));  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!timeBlocks) {
//         var noStorage = Object.create(timeBlocks);
//     } else {
//       // loop over object properties
//   $.each(timeBlocks, function(list, arr) {
//     // then loop over sub-array
//     arr.forEach(function(task) {
//       createTimeBlock(timeBlock.text, timeBlock.time, list);
//     });
//   });

//     $("#currentDay").append(time);
// }


// // Add tasks and append to Li
// // first I need to add an id to the li element

// // Edit tasks

// save to local storage
// turns li element into a form text input element


// // set interval using javascript