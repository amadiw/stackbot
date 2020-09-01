const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

//Seeding database
const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all([
      Project.create({
        title: 'Make pizza',
        deadline: '09-17-2020',
        priority: 9,
        completed: false,
        description:
          'Toss dough, spread tomato sauce, and cover with mozzarella cheese',
      }),
    ]);

    await Promise.all([
      Project.create({
        title: 'Wash car',
        deadline: '09-13-2020',
        priority: 3,
        completed: false,
        description: 'Vacuum and wax car',
      }),
    ]);

    await Promise.all([
      Project.create({
        title: 'Laundry',
        deadline: '09-10-2020',
        priority: 6,
        completed: false,
        description: 'Wash, fold, and put away laundry',
      }),
    ]);

    await Promise.all([
      Robot.create({
        name: 'R2-D2',
        imageUrl: '/https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png/revision/latest/top-crop/width/720/height/900?cb=20161108040914/r2d2.png',
        fuelType: 'electric',
        fuelLevel: 88.34,
      }),
      Robot.create({
        name: 'Wall-E',
        imageUrl: 'https://vignette.wikia.nocookie.net/pixar/images/d/de/Wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20170807223723',
        fuelType: 'diesel',
        fuelLevel: 52.36,
      }),
      Robot.create({
        name: 'Thundercleese',
        imageUrl: 'https://i.ytimg.com/vi/PTg-I3qtDrU/maxresdefault.jpgtps://vignette.wikia.nocookie.net/pixar/images/d/de/Wall%E2%80%A2e_clipped_rev_1.png/revision/latest?cb=20170807223723',
        fuelType: 'gas',
        fuelLevel: 100.00,
      }),
    ]);
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
