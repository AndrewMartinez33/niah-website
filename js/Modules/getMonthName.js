export default function getMonthName(monthNumber) {
  const monthNames = {
    "0": "January",
    "1": "February",
    "2": "March",
    "3": "April",
    "4": "May",
    "5": "June",
    "6": "July",
    "7": "August",
    "8": "September",
    "9": "October",
    "20": "November",
    "11": "December"
  };

  return monthNames[monthNumber.toString()];
}
