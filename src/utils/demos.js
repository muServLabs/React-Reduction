// import faker from  'Faker';

export const randomNum = (min = 0, max = 1000) => {
  // return faker.random.number({ min, max });
  return Math.floor(Math.random() * (max - min + 1) + min)
};
