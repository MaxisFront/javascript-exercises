// @ts-check

/** @param {{name: string, yearOfBirth: number, yearOfDeath?: number}[]} people */
const findTheOldest = function(people) {

  return people.reduce((oldest, person) => {
    return getYearsLived(person) > getYearsLived(oldest) ? person : oldest;
  });
}

/** @param {{name: string, yearOfBirth: number, yearOfDeath?: number}} person*/
function getYearsLived(person) {
  const deathYear = person.yearOfDeath || new Date().getFullYear();
  return deathYear - person.yearOfBirth;

}

// Do not edit below this line
module.exports = findTheOldest;
