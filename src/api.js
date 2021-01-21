const baseUrl = "https://api.rawg.io/api/";

// Getting the current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
}

// Getting the current date
const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
}

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=8`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=8`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=8`;


// full links
export const popularGamesUrl = () => `${baseUrl}${popularGames}`;
export const upcomingGamesUrl = () => `${baseUrl}${upcomingGames}`;
export const newGamesUrl = () => `${baseUrl}${newGames}`;

export const gameDetailsUrl = gameId => `${baseUrl}games/${gameId}`;
export const gameScreenshotUrl = gameId => `${baseUrl}games/${gameId}/screenshots`;

export const searchGameUrl = gameName => `${baseUrl}games?search=${gameName}&page_size=9`;