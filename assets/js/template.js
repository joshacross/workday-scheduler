//document ready
$(function () {
    //moment time
    let currentDay = moment().format('dddd, MMM Do YYYY, hh:mm a');
  
    //navbar subtitle sets current day/time and updates dynamically
    changeTime = () => {
      currentDay = moment().format('MMMM Do YYYY, hh:mm a');
      let $subtitle = $('#currentDay');
      $subtitle.text(currentDay);
    }
    setInterval(changeTime, 1000);
  
    //create all hours am/pm in full array
    let fullDay = [
      {
        id: '0',
        militaryId: "00",
        hour: "12",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '1',
        militaryId: "01",
        hour: "01",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '2',
        militaryId: "02",
        hour: "02",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '3',
        militaryId: "03",
        hour: "03",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '4',
        militaryId: "04",
        hour: "04",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '5',
        militaryId: "05",
        hour: "05",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '6',
        militaryId: "06",
        hour: "06",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '7',
        militaryId: "07",
        hour: "07",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '8',
        militaryId: "08",
        hour: "08",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '9',
        militaryId: "09",
        hour: "09",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '10',
        militaryId: "10",
        hour: "10",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '11',
        militaryId: "11",
        hour: "11",
        minutes: ["00", "15", "30", "45"],
        ampm: "am",
        text: ""
      },
      {
        id: '12',
        militaryId: "12",
        hour: "12",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '13',
        militaryId: "13",
        hour: "01",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '14',
        militaryId: "14",
        hour: "02",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '15',
        militaryId: "15",
        hour: "03",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '16',
        militaryId: "16",
        hour: "04",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '17',
        militaryId: "17",
        hour: "05",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '18',
        militaryId: "18",
        hour: "06",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '19',
        militaryId: "19",
        hour: "07",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '20',
        militaryId: "20",
        hour: "08",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '21',
        militaryId: "21",
        hour: "09",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '22',
        militaryId: "22",
        hour: "10",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      },
      {
        id: '23',
        militaryId: "23",
        hour: "11",
        minutes: ["00", "15", "30", "45"],
        ampm: "pm",
        text: ""
      }
    ];
    /* two arrays for extra project later 
     let hoursAM = [
       {
         id: "0",
         hour: "12",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "1",
         hour: "01",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "2",
         hour: "02",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "3",
         hour: "03",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "4",
         hour: "04",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "4",
         hour: "04",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "5",
         hour: "05",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "6",
         hour: "06",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "7",
         hour: "07",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "8",
         hour: "08",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "9",
         hour: "09",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "10",
         hour: "10",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       },
       {
         id: "11",
         hour: "11",
         minutes: ["00", "15", "30", "45"],
         ampm: "am",
         text: ""
       }
     ];
     let hoursPM = [
       {
         id: "12",
         hour: "12",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "13",
         hour: "01",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "14",
         hour: "02",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "15",
         hour: "03",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "16",
         hour: "04",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "17",
         hour: "05",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "18",
         hour: "06",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "19",
         hour: "07",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "20",
         hour: "08",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "21",
         hour: "09",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "22",
         hour: "10",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       },
       {
         id: "23",
         hour: "11",
         minutes: ["00", "15", "30", "45"],
         ampm: "pm",
         text: ""
       }
     ];*/
  
    //10 hour work day container array
    let workDayHours = [];
  
    //allow user to change the integers in this workday function(later for extras)
    workDay = () => {
      fullDay.forEach(function (e) {
        if (e.id >= 9 && e.ampm === 'am' || e.id <= 18 && e.ampm === 'pm') {
  
          workDayHours.push(e);
        }
      })
    }
    workDay();
  
    //after any changes, save to local storage
    saveEvents = () => {
      localStorage.setItem("workDayHours", JSON.stringify(workDayHours));
    }
  
    //pulls from local storage to display event
    storageEvents = () => {
      workDayHours.forEach(function (_currentHour) {
        $(`#${_currentHour.id}`).val(_currentHour.text);
      })
    }
  
    //check localStorage for timeBlock data and if there is create,
    pullEvents = () => {
      let pulledHours = JSON.parse(localStorage.getItem("workDayHours"));
      if (pulledHours) {
        workDayHours = pulledHours;
      }
      saveEvents();
      storageEvents();
    }
  
    //iterate through work day hours create <form> for row & input
    workDayHours.forEach(function (currentHour) {
      let eventRow = $('<form>').attr({ 'class': 'row' });
      $('.container').append(eventRow);
      //put workday hours in left side (on md lg size, on sm left underneath)
      let eventTime = $('<div>').text(`${currentHour.hour}:${currentHour.minutes[0]}${currentHour.ampm}`).attr({ 'class': ' col-2 hour eventTime' });
      //event text input container
      let eventDataContainer = $('<div>').attr({ 'class': 'col-8 time-block eventDataContainer' });
      //event text
      let eventText = $('<textarea>').attr({ 'class': 'text', 'id': currentHour.id });
      eventDataContainer.append(eventText);
      //event text
      eventText.attr({ 'class': 'eventText' });
  
      //<div> needs to be able to change color based on if the hour is past, present, or future
      // compare real time to time on schedule (military times for 
      //logistical problems with AM / PM having the same numbers)
      if (currentHour.militaryId < moment().format('HH')) {
        eventText.attr({ 'class': 'past text' });
      } else if (currentHour.militaryId === moment().format('HH')) {
        eventText.attr({ 'class': 'present text' });
      } else if (currentHour.militaryId > moment().format('HH')) {
        eventText.attr({ 'class': 'future text' });
      }
      //create save button
      let saveEventBtnContainer = $('<div>').attr({ 'class': 'col-1 remove' });
      let saveEventBtn = $('<button>').attr({ 'class': 'saveBtn', 'type': 'submit', 'id': `${currentHour.id}` });
      let saveBtnImage = $('<img>').attr({ 'src': 'assets/images/cogs.svg', 'alt': 'Two gears', 'class': 'iconInject' })
      let saveBtnText = $('<span>').text('Save').attr({ 'class': 'btnText' });
      saveEventBtnContainer.append(saveEventBtn.append(saveBtnImage, saveBtnText));
      //form container for time block
      eventRow.append(eventTime, eventDataContainer, saveEventBtnContainer);
      //$('#timeBlockContainer').append(eventRow);
    })
  
    pullEvents();
  
    $('.text').on('blur', function () {
      let text = $(this).val().trim();
      let textIndex = $(this).attr('id');
      workDayHours.forEach(function (i) {
        if (i.id === textIndex) {
          i.text = text;
        }
      })
    })
  
  
    $(".saveBtn").on('click', function (event) {
      event.preventDefault();
      saveEvents();
      storageEvents();
    })
  
    let imageInject = $('.iconInject');
  
    SVGInjector(imageInject);
  
    $(window).resize(function () {
      if ($(window).width() <= 980) {
        $('.hour').removeClass('col-2');
        $('.hour').addClass('col-12 hourSmall'); 
        $('.time-block').removeClass('col-8');
        $('.time-block').addClass('col-12 timeBlockSmall');
        $('.remove').removeClass('col-1');
        $('.remove').addClass('col-12');
        $('.saveBtn').addClass('removeSmall');
        $('.row').addClass('eventRow');
      } else
        if ($(window).width() > 980) {
          $('.hour').removeClass('col-12 hourSmall');
          $('.hour').addClass('col-2');
          $('.time-block').removeClass('col-12 timeBlockSmall');
          $('.time-block').addClass('col-8');
          $('.remove').removeClass('col-12');
          $('.saveBtn').removeClass('removeSmall');
          $('.remove').addClass('col-1');
          $('.row').removeClass('eventRow');
        }
    });
  
  });
  
  /* extras for later if possible?
  1- can the user adjust the time of the work day?
  2- can the user choose 1/2 hour or 1/4 hour time increments?
  3- can they adjust the colors of past present future time blocks?
  4- if a event takes up more than one time block can they be put togther into one large text area,
  and the time be changed? example = 7:30 - 8:30? */