const faker = require('faker');

function generateLocation() {
  return {
    state: faker.address.stateAbbr(),
    city: faker.address.city()
  };
}

function generateSpecialty() {
  const specialties = ["gym", "single pitch", "multi-pitch"];
  return faker.random.arrayElement(specialties);
}

function generatePayRate() {
  const range = faker.datatype.boolean();
  if(range) {
    return {
      range: [
        faker.datatype.number({ min: 35, max: 50 }),
        faker.datatype.number({ min: 35, max: 50 })
      ].sort()
    };
  } else {
    return {
      value: faker.datatype.number({ min: 35, max: 50 })
    };
  }
}

function generateWeeklySchedule() {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const availableDays = [];
  while(availableDays.length === 0){
    daysOfWeek.forEach((day) => {
      if(Math.random() < .4) {
        availableDays.push(day);
      }
    });
  }
  return availableDays;
}

function generateGuides() {
  const guides = [];
  for(let i = 0; i < 15; i += 1) {
    const guide = {
      location: generateLocation(),
      type: generateSpecialty(),
      description: faker.lorem.paragraphs(5),
      payRate: generatePayRate(),
      schedule: generateWeeklySchedule()
    };
    guides.push(guide);
  }
  return guides
}

module.exports = {
  generateGuides
};