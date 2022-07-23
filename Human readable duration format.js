function formatDuration(totalTime) {
   let seconds = 1;
   let minutes = seconds * 60;
   let hours = minutes * 60;
   let days = hours * 24;
   let years = days * 365;
   let result = "";
   
   let isSeconds = "";
   let isMinutes = "";
   let isHours = "";
   let isDays = "";
   let isYears = "";
   
   if (totalTime >= seconds - 1) {
      if (totalTime >= minutes) {
         if (totalTime >= hours) {
            if (totalTime >= days) {
               if (totalTime >= years) {
                  let yearsRounded = Math.floor(totalTime / years);
                  let daysRounded = Math.floor(totalTime / days - yearsRounded * (years / days));
                  let hoursRounded = Math.floor(totalTime / hours - (yearsRounded * (years / hours) + daysRounded * (days / hours)));
                  let minutesRounded = Math.floor(totalTime / minutes - (yearsRounded * (years / minutes) + daysRounded * (days / minutes) + hoursRounded * (hours / minutes)));
                  let secondsRounded = totalTime - (yearsRounded * years + daysRounded * days + hoursRounded * hours + minutesRounded * minutes);
                  let items = 5;

                  // console.log(totalTime);
                  // console.log(result);
               }
               let daysRounded = Math.floor(totalTime / days);
               let hoursRounded = Math.floor(totalTime / hours - daysRounded * (days / hours));
               let minutesRounded = Math.floor(totalTime / minutes - (daysRounded * (days / minutes) + hoursRounded * (hours / minutes)));
               let secondsRounded = totalTime - (daysRounded * days + hoursRounded * hours + minutesRounded * minutes);
               let items = 4;
               if (daysRounded > 1) {
                  isDays = "days";
               }
               else {
                  isDays = "day";
               }
               if (hoursRounded > 1) {
                  isHours = "hours";
               }
               else if (hoursRounded == 1) {
                  isHours = "hour";
               }
               else {
                  isHours = "";
                  items--;
               }
               if (minutesRounded > 1) {
                  isMinutes = "minutes";
               }
               else if (minutesRounded == 1) {
                  isMinutes = "minute";
               }
               else {
                  isMinutes = "";
                  items--;
               }
               if (secondsRounded > 1) {
                  isSeconds = "seconds";
               }
               else if (secondsRounded == 1) {
                  isSeconds = "second";
               }
               else {
                  isSeconds = "";
                  items--;
               }
               if (items == 4) {
                  result = `${daysRounded} ${isDays}, ${hoursRounded} ${isHours}, ${minutesRounded} ${isMinutes} and ${secondsRounded} ${isSeconds}`;
               }
               else if (items == 3) {
                  if (isSeconds == "") { result = `${daysRounded} ${isDays}, ${hoursRounded} ${isHours} and ${minutesRounded} ${isMinutes}`; }
                  if (isMinutes == "") { result = `${daysRounded} ${isDays}, ${hoursRounded} ${isHours} and ${secondsRounded} ${isSeconds}`; }
                  if (isHours == "") { result = `${daysRounded} ${isDays}, ${minutesRounded} ${isMinutes} and ${secondsRounded} ${isSeconds}`; }
               }
               else if (items == 2) {
                  if (isSeconds == "" && isMinutes == "") { result = `${daysRounded} ${isDays} and ${hoursRounded} ${isHours}`; }
                  if (isSeconds == "" && isHours == "") { result = `${daysRounded} ${isDays} and ${minutesRounded} ${isMinutes}`; }
                  if (isMinutes == "" && isHours == "") { result = `${daysRounded} ${isDays} and ${secondsRounded} ${isSeconds}`; }
               }
               else if (items == 1) {
                  result = `${daysRounded} ${isDays}`;
               }
               return result;
            }
            let hoursRounded = Math.floor(totalTime / hours);
            let minutesRounded = Math.floor(totalTime / minutes - hoursRounded * minutes);
            let secondsRounded = totalTime - (hoursRounded * hours + minutesRounded * minutes);
            let items = 3;
            if (hoursRounded > 1) {
               isHours = "hours";
            }
            else {
               isHours = "hour";
            }
            if (minutesRounded > 1) {
               isMinutes = "minutes";
            }
            else if (minutesRounded == 1) {
               isMinutes = "minute";
            }
            else {
               isMinutes = "";
               items--;
            }
            if (secondsRounded > 1) {
               isSeconds = "seconds";
            }
            else if (secondsRounded == 1) {
               isSeconds = "second";
            }
            else {
               isSeconds = "";
               items--;
            }
            if (items == 3) {
               result = `${hoursRounded} ${isHours}, ${minutesRounded} ${isMinutes} and ${secondsRounded} ${isSeconds}`;
            }
            else if (items == 2) {
               if (isSeconds == "") { result = `${hoursRounded} ${isHours} and ${minutesRounded} ${isMinutes}`; }
               if (isMinutes == "") { result = `${hoursRounded} ${isHours} and ${secondsRounded} ${isSeconds}`; }
            }
            else if (items == 1) {
               result = `${hoursRounded} ${isHours}`;
            }
            return result;
         }
         let minutesRounded = Math.floor(totalTime / minutes);
         let secondsRounded = totalTime - minutesRounded * minutes;
         let items = 2;
         if (minutesRounded > 1) {
            isMinutes = "minutes";
         }
         else {
            isMinutes = "minute";
         }
         if (secondsRounded > 1) {
            isSeconds = "seconds";
         }
         else if (secondsRounded == 1) {
            isSeconds = "second";
         }
         else {
            isSeconds = "";
            items--;
         }
         if (items == 2) {
            result = `${minutesRounded} ${isMinutes} and ${secondsRounded} ${isSeconds}`;
         }
         else if (items == 1) {
            result = `${minutesRounded} ${isMinutes}`;
         }
         return result;
      }
      let secondsRounded = totalTime;
      let items = 1;
      if (secondsRounded > 1) {
         isSeconds = `seconds`;
      }
      else if (secondsRounded == 1) {
         isSeconds = "second";
      }
      else {
         isSeconds = "";
         items--;
      }
      if (items == 1) {
         result = `${secondsRounded} ${isSeconds}`;
      }
      else if (items == 0) {
         result = `now`;
      }

   }
   return result;
}

// formatDuration(157680000 + 24 * 3600 * 15 + 3600 * 7 + 60 * 25 + 17);
// console.log(formatDuration(232134));
console.log(formatDuration(15731042));