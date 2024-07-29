// This function works for any valid date string in the format 'YYYY-MM-DD'.
// and return the year part as a string.
export function getYearFromDate(dateString) {
  // example input '2024-07-25'
  const parts = dateString.split('-');
  const year = parts[0];

  return year;
}