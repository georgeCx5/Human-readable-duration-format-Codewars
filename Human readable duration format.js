function formatDuration(totalTime) {
   let seconds = 1;
   let minutes = seconds * 60;
   let hours = minutes * 60;
   let days = hours * 24;
   let years = days * 365;
   let text = "";
   let result = "";
   // if (timeInSeconds >= 365 * 3600 * 24) {
   //      console.log(`${years} years has passed`);
   // }
   // if (timeInSeconds >= 3600 * 24) {
   //      console.log(`${days} days has passed`);
   // }
   if (totalTime >= seconds) {
      if (totalTime >= minutes) {
         if (totalTime >= hours) {
            if (totalTime >= days) {
               if (totalTime >= years) {
                  let yearsRounded = Math.floor(totalTime / years);
                  let daysRounded = Math.floor(totalTime / days - yearsRounded * (years / days));
                  let hoursRounded = Math.floor(totalTime / hours - (yearsRounded * (years / hours) + daysRounded * (days / hours)));
                  let minutesRounded = Math.floor(totalTime / minutes - (yearsRounded * (years / minutes) + daysRounded * (days / minutes) + hoursRounded * (hours / minutes)));
                  let secondsRounded = totalTime - (yearsRounded * years + daysRounded * days + hoursRounded * hours + minutesRounded * minutes);
                  text += `${yearsRounded} years `;
                  text += `${daysRounded} days `;
                  text += `${hoursRounded} hours `;
                  text += `${minutesRounded} minutes `;
                  text += `${secondsRounded} seconds `;
                  console.log(totalTime);
                  console.log(text);
               }
               let daysRounded = Math.floor(totalTime / days);
               let hoursRounded = Math.floor(totalTime / hours - daysRounded * (days / hours));
               let minutesRounded = Math.floor(totalTime / minutes - (daysRounded * (days / minutes) + hoursRounded * (hours / minutes)));
               let secondsRounded = totalTime - (daysRounded * days + hoursRounded * hours + minutesRounded * minutes);
               text += `${daysRounded} days `;
               text += `${hoursRounded} hours `;
               text += `${minutesRounded} minutes `;
               text += `${secondsRounded} seconds `;
            }
            let hoursRounded = Math.floor(totalTime / hours);
            let minutesRounded = Math.floor(totalTime / minutes - hoursRounded * minutes);
            let secondsRounded = totalTime - (hoursRounded * hours + minutesRounded * minutes);
            text += `${hoursRounded} hours `;
            text += `${minutesRounded} minutes `;
            text += `${secondsRounded} seconds`;
         }
         let minutesRounded = Math.floor(totalTime / minutes);
         text += `${minutesRounded} minutes `;
         text += `${totalTime - minutesRounded * minutes} seconds`;
      }
      let inSeconds = totalTime;
      if (inSeconds == 0) {

      }
   }
}

formatDuration(157680000 + 24 * 3600 * 15 + 3600 * 7 + 60 * 25 + 17);