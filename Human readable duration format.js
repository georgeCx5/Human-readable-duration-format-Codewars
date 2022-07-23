function formatDuration(timeInSeconds) {
   let seconds = 1;
   let minutes = seconds * 60;
   let hours = minutes * 60;
   let days = hours * 24;
   let years = days * 365;
   let result = "";

   let onlySeconds = "";
   let onlyMinutes = "";
   let onlyHours = "";
   let onlyDays = "";
   let onlyYears = "";

   if (timeInSeconds >= seconds - 1) {
      if (timeInSeconds >= minutes) {
         if (timeInSeconds >= hours) {
            if (timeInSeconds >= days) {
               if (timeInSeconds >= years) {
                  let items = 5;
                  let yearsRounded = Math.floor(timeInSeconds / years);
                  let daysRounded = Math.floor(timeInSeconds / days - yearsRounded * (years / days));
                  let hoursRounded = Math.floor(timeInSeconds / hours - (yearsRounded * (years / hours) + daysRounded * (days / hours)));
                  let minutesRounded = Math.floor(timeInSeconds / minutes - (yearsRounded * (years / minutes) + daysRounded * (days / minutes) + hoursRounded * (hours / minutes)));
                  let secondsRounded = timeInSeconds - (yearsRounded * years + daysRounded * days + hoursRounded * hours + minutesRounded * minutes);
                  if (yearsRounded > 1) {
                     onlyYears = "years";
                  }
                  else {
                     onlyYears = "year";
                  }
                  if (daysRounded > 1) {
                     onlyDays = "days";
                  }
                  else if (daysRounded == 1) {
                     onlyDays = "day";
                  }
                  else {
                     onlyDays = "";
                     items--;
                  }
                  if (hoursRounded > 1) {
                     onlyHours = "hours";
                  }
                  else if (hoursRounded == 1) {
                     onlyHours = "hour";
                  }
                  else {
                     onlyHours = "";
                     items--;
                  }
                  if (minutesRounded > 1) {
                     onlyMinutes = "minutes";
                  }
                  else if (minutesRounded == 1) {
                     onlyMinutes = "minute";
                  }
                  else {
                     onlyMinutes = "";
                     items--;
                  }
                  if (secondsRounded > 1) {
                     onlySeconds = "seconds";
                  }
                  else if (secondsRounded == 1) {
                     onlySeconds = "second";
                  }
                  else {
                     onlySeconds = "";
                     items--;
                  }
                  if (items == 5) {
                     result = `${yearsRounded} ${onlyYears}, ${daysRounded} ${onlyDays}, ${hoursRounded} ${onlyHours}, ${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`;
                  }
                  else if (items == 4) {
                     if (onlySeconds == "") { result = `${yearsRounded} ${onlyYears}, ${daysRounded} ${onlyDays}, ${hoursRounded} ${onlyHours} and ${minutesRounded} ${onlyMinutes}`; }
                     if (onlyMinutes == "") { result = `${yearsRounded} ${onlyYears}, ${daysRounded} ${onlyDays}, ${hoursRounded} ${onlyHours} and ${secondsRounded} ${onlySeconds}`; }
                     if (onlyHours == "") { result = `${yearsRounded} ${onlyYears}, ${daysRounded} ${onlyDays}, ${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`; }
                     if (onlyDays == "") { result = `${yearsRounded} ${onlyYears}, ${hoursRounded} ${onlyHours}, ${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`; }
                  }
                  else if (items == 3) {
                     if (onlySeconds == "" && onlyMinutes == "") { result = `${yearsRounded} ${onlyYears}, ${daysRounded} ${onlyDays} and ${hoursRounded} ${onlyHours}`; }
                     if (onlySeconds == "" && onlyHours == "") { result = `${yearsRounded} ${onlyYears}, ${daysRounded} ${onlyDays} and ${minutesRounded} ${onlyMinutes}`; }
                     if (onlySeconds == "" && onlyDays == "") { result = `${yearsRounded} ${onlyYears}, ${hoursRounded} ${onlyHours} and ${minutesRounded} ${onlyMinutes}`; }
                     if (onlyMinutes == "" && onlyHours == "") { result = `${yearsRounded} ${onlyYears}, ${daysRounded} ${onlyDays} and ${secondsRounded} ${onlySeconds}`; }
                     if (onlyMinutes == "" && onlyDays == "") { result = `${yearsRounded} ${onlyYears}, ${hoursRounded} ${onlyHours} and ${secondsRounded} ${onlySeconds}`; }
                     if (onlyHours == "" && onlyDays == "") { result = `${yearsRounded} ${onlyYears}, ${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`; }
                  }
                  else if (items == 2) {
                     if (onlySeconds == "" && onlyMinutes == "" && onlyHours == "") { result = `${yearsRounded} ${onlyYears} and ${daysRounded} ${onlyDays}`; }
                     if (onlySeconds == "" && onlyHours == "" && onlyDays == "") { result = `${yearsRounded} ${onlyYears} and ${minutesRounded} ${onlyMinutes}`; }
                     if (onlySeconds == "" && onlyMinutes == "" && onlyDays == "") { result = `${yearsRounded} ${onlyYears} and ${hoursRounded} ${onlyHours}`; }
                     if (onlyMinutes == "" && onlyHours == "" && onlyDays == "") { result = `${yearsRounded} ${onlyYears} and ${secondsRounded} ${onlySeconds}`; }
                  }
                  else if (items == 1) {
                     result = `${yearsRounded} ${onlyYears}`;
                  }
                  // console.log(totalTime);
                  // console.log(result);
                  return result;
               }

               let items = 4;
               let daysRounded = Math.floor(timeInSeconds / days);
               let hoursRounded = Math.floor(timeInSeconds / hours - daysRounded * (days / hours));
               let minutesRounded = Math.floor(timeInSeconds / minutes - (daysRounded * (days / minutes) + hoursRounded * (hours / minutes)));
               let secondsRounded = timeInSeconds - (daysRounded * days + hoursRounded * hours + minutesRounded * minutes);
               if (daysRounded > 1) {
                  onlyDays = "days";
               }
               else {
                  onlyDays = "day";
               }
               if (hoursRounded > 1) {
                  onlyHours = "hours";
               }
               else if (hoursRounded == 1) {
                  onlyHours = "hour";
               }
               else {
                  onlyHours = "";
                  items--;
               }
               if (minutesRounded > 1) {
                  onlyMinutes = "minutes";
               }
               else if (minutesRounded == 1) {
                  onlyMinutes = "minute";
               }
               else {
                  onlyMinutes = "";
                  items--;
               }
               if (secondsRounded > 1) {
                  onlySeconds = "seconds";
               }
               else if (secondsRounded == 1) {
                  onlySeconds = "second";
               }
               else {
                  onlySeconds = "";
                  items--;
               }
               if (items == 4) {
                  result = `${daysRounded} ${onlyDays}, ${hoursRounded} ${onlyHours}, ${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`;
               }
               else if (items == 3) {
                  if (onlySeconds == "") { result = `${daysRounded} ${onlyDays}, ${hoursRounded} ${onlyHours} and ${minutesRounded} ${onlyMinutes}`; }
                  if (onlyMinutes == "") { result = `${daysRounded} ${onlyDays}, ${hoursRounded} ${onlyHours} and ${secondsRounded} ${onlySeconds}`; }
                  if (onlyHours == "") { result = `${daysRounded} ${onlyDays}, ${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`; }
               }
               else if (items == 2) {
                  if (onlySeconds == "" && onlyMinutes == "") { result = `${daysRounded} ${onlyDays} and ${hoursRounded} ${onlyHours}`; }
                  if (onlySeconds == "" && onlyHours == "") { result = `${daysRounded} ${onlyDays} and ${minutesRounded} ${onlyMinutes}`; }
                  if (onlyMinutes == "" && onlyHours == "") { result = `${daysRounded} ${onlyDays} and ${secondsRounded} ${onlySeconds}`; }
               }
               else if (items == 1) {
                  result = `${daysRounded} ${onlyDays}`;
               }
               return result;
            }

            let items = 3;
            let hoursRounded = Math.floor(timeInSeconds / hours);
            let minutesRounded = Math.floor(timeInSeconds / minutes - hoursRounded * minutes);
            let secondsRounded = timeInSeconds - (hoursRounded * hours + minutesRounded * minutes);
            if (hoursRounded > 1) {
               onlyHours = "hours";
            }
            else {
               onlyHours = "hour";
            }
            if (minutesRounded > 1) {
               onlyMinutes = "minutes";
            }
            else if (minutesRounded == 1) {
               onlyMinutes = "minute";
            }
            else {
               onlyMinutes = "";
               items--;
            }
            if (secondsRounded > 1) {
               onlySeconds = "seconds";
            }
            else if (secondsRounded == 1) {
               onlySeconds = "second";
            }
            else {
               onlySeconds = "";
               items--;
            }
            if (items == 3) {
               result = `${hoursRounded} ${onlyHours}, ${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`;
            }
            else if (items == 2) {
               if (onlySeconds == "") { result = `${hoursRounded} ${onlyHours} and ${minutesRounded} ${onlyMinutes}`; }
               if (onlyMinutes == "") { result = `${hoursRounded} ${onlyHours} and ${secondsRounded} ${onlySeconds}`; }
            }
            else if (items == 1) {
               result = `${hoursRounded} ${onlyHours}`;
            }
            return result;
         }

         let items = 2;
         let minutesRounded = Math.floor(timeInSeconds / minutes);
         let secondsRounded = timeInSeconds - minutesRounded * minutes;
         if (minutesRounded > 1) {
            onlyMinutes = "minutes";
         }
         else {
            onlyMinutes = "minute";
         }
         if (secondsRounded > 1) {
            onlySeconds = "seconds";
         }
         else if (secondsRounded == 1) {
            onlySeconds = "second";
         }
         else {
            onlySeconds = "";
            items--;
         }
         if (items == 2) {
            result = `${minutesRounded} ${onlyMinutes} and ${secondsRounded} ${onlySeconds}`;
         }
         else if (items == 1) {
            result = `${minutesRounded} ${onlyMinutes}`;
         }
         return result;
      }

      let items = 1;
      let secondsRounded = timeInSeconds;
      if (secondsRounded > 1) {
         onlySeconds = `seconds`;
      }
      else if (secondsRounded == 1) {
         onlySeconds = "second";
      }
      else {
         onlySeconds = "";
         items--;
      }
      if (items == 1) {
         result = `${secondsRounded} ${onlySeconds}`;
      }
      else if (items == 0) {
         result = `now`;
      }
      return result;
   }
}

// formatDuration(157680000 + 24 * 3600 * 15 + 3600 * 7 + 60 * 25 + 17);
// console.log(formatDuration(232134));
console.log(formatDuration(205851834));