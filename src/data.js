/* eslint-disable max-len */
export const getArray = (champions) => (Array.isArray(champions) ? champions : Object.values(champions));

export const filterBy = (championList, role) => getArray(championList).filter(({ tags }) => tags.indexOf(role) >= 0);

export const searchBy = (champions, string) => champions.filter(({ name }) => name.toLowerCase().startsWith(string));/* searchByString,position */

export const sortOrder = (champions, condition) => getArray(champions).sort(() => (condition === 'az' ? 1 : -1));


export const arithmeticAverage = (champions, cases) => {
  const sectionAreaPolar = [];
  let emptyArrayToNumbers;
  let finalAverage;
  const getStats = (arr) => arr.filter((stat) => sectionAreaPolar.push(champions.stats[stat]));/* en común */
  switch (cases) {
    case 'Utility':
      getStats(['armor', 'armorperlevel', 'attackdamage', 'attackdamageperlevel', 'attackrange']);
      emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
      finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
      + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
      break;
    case 'Damage':
      getStats(['crit', 'critperlevel']);
      emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
      finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
      + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
      break;
    case 'Hardness':
      getStats(['hp', 'hpperlevel', 'hpregen', 'hpregenperlevel']);
      emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
      finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
      + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
      break;
    case 'Mobility':
      getStats(['movespeed', 'attackspeedoffset', 'attackdamageperlevel']);
      emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
      finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
        + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
      break;
    case 'Mp':
      getStats(['mp', 'mpperlevel', 'mpregen', 'mpregenperlevel', 'spellblock', 'spellblockperlevel']);
      emptyArrayToNumbers = sectionAreaPolar.map((numUtilidad) => parseFloat(numUtilidad));
      finalAverage = ((emptyArrayToNumbers.reduce((numUtilidad, numUtilidad2) => numUtilidad
      + numUtilidad2)) / emptyArrayToNumbers.length).toFixed(1);
      break;
    default:
  }
  return finalAverage;
};
