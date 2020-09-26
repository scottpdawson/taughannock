const moment = require("moment");

let dateToSeason = dateObj => {
    let month = moment.utc(dateObj).month();
    if ([11,0,1].includes(month)) {
      return "winter";
    }
    if ([2,3,4].includes(month)) {
      return "spring";
    }
    if ([5,6,7].includes(month)) {
      return "summer";
    }
    if ([8,9,10].includes(month)) {
      return "autumn";
    }
}

module.exports = {
    eleventyComputed: {
       season: (data) => dateToSeason(data.date),
    }
}