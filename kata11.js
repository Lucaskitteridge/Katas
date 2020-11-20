const talkingCalendar = function(date) {
  let newDate = date.split("/")
  let day = newDate[2]
  let month = newDate[1]
  let year = newDate [0]
  let finalMonth = ""
  let finalDay = ""
  if(month === "01"){
    finalMonth = 'January'
  } else if(month === '02'){
     finalMonth = 'February'
  } else if(month === '03'){
    finalMonth = 'March'
  } else if(month === '04'){
    finalMonth = 'April'
  } else if(month === '05'){
    finalMonth = 'May'
  } else if(month === '06'){
    finalMonth = 'June'
  } else if(month === '07'){
    finalMonth = July
  } else if(month === '08'){
    finalMonth = 'August'
  } else if (month === '09'){
    finalMonth = 'September'
  } else if (month === '10'){
    finalMonth = 'October'
  } else if (month === '11'){
    finalMonth = 'November'
  } else if (month === '12'){
    finalMonth = 'December'
  }; 
  
  if(day === '01'|| day === '21'|| day === '31'){
    finalDay = +day + 'st'
  } else if (day === '02' || day === '22'){
    finalDay = +day + 'nd'
  } else if (day === '03' || day === '23'){
    finalDay = +day + 'rd'
  } else finalDay = +day + 'th'

  let finalDate = finalMonth + " " + finalDay + ', ' + year

  return finalDate
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));