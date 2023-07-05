import moment from "moment";
const timeZone = 3;

export const formatMatch = (matches) => {
  return matches.map((match) => {
    const matchDate = moment(match.starting_at)
      .subtract(timeZone, "hours")
      .format("YY-MM-DD");
    const matchHour = moment(match.starting_at)
      .subtract(timeZone, "hours")
      .format("HH:mm");
    return { ...match, starting_at: `${matchDate} ${matchHour}` };
  });
};