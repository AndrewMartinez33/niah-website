import getMonthName from "./Modules/getMonthName.js";
import banner from "./Modules/banner.js";
import featuredItem from "./Modules/featuredItem.js";

// Sets Top Banner Message
const bannerMessage = document.querySelector("#banner");
bannerMessage.textContent = banner();

// Get the current Month and Year in the featured section
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const monthName = getMonthName(currentMonth);
const displayDate = `${monthName} ${currentYear}`;

// Display the current date in the featured section of the homepage.
const featuredDate = document.querySelector("#featured-date");
featuredDate.textContent = displayDate;

featuredItem();
