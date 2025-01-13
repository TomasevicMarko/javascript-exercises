// const findTheOldest = function (arrOfPeople) {
//   const currentYear = new Date().getFullYear();
//   let oldestObject = arrOfPeople[0];
//   let yearsOld = arrOfPeople[0].yearOfDeath
//     ? arrOfPeople[0].yearOfDeath - arrOfPeople[0].yearOfBirth
//     : currentYear - arrOfPeople[0].yearOfBirth;
//   for (let i = 1; i < arrOfPeople.length; i++) {
//     const yearsOldCurrent = arrOfPeople[i].yearOfDeath
//       ? arrOfPeople[i].yearOfDeath - arrOfPeople[i].yearOfBirth
//       : currentYear - arrOfPeople[i].yearOfBirth;

//     if (yearsOldCurrent > yearsOld) {
//       oldestObject = arrOfPeople[i];
//       yearsOld = yearsOldCurrent;
//     }
//   }
//   return oldestObject;
// };
const getAge = ({ yearOfBirth, yearOfDeath }) =>
  (yearOfDeath || new Date().getFullYear()) - yearOfBirth;

const findTheOldest = function (people) {
  return (oldestObject = people.reduce((oldest, current, _, array) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);
    return currentAge > oldestAge ? current : oldest;
  }));
};

// Do not edit below this line
module.exports = findTheOldest;
