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
        imageUrl:
          'https://lh3.googleusercontent.com/proxy/6v_XFb8WZ2dfwWPIKnw4q_KJwK1xoRlsMsaBmIT5VTXiGoiUM8EPPTR32KKZmsK8QtS_uVQUjY8zMqa-ckiI8z2ta2wHbsQutcH-819e3IEd0Q',
        fuelType: 'electric',
        fuelLevel: 88.34,
      }),
      Robot.create({
        name: 'Wall-E',
        imageUrl:
          'https://i.pinimg.com/originals/83/8b/41/838b41a126747204325d2352c2cfa219.png',
        fuelType: 'diesel',
        fuelLevel: 52.36,
      }),
      Robot.create({
        name: 'Bender',
        imageUrl:
          'https://lh3.googleusercontent.com/proxy/ZJtYYfUjlqoz80Rx-CabqEVvXdHCxw7ciQetUDiMLXO7jul0pG9nmCJff852l79eUQ-c9D76CbxA9vTVSF3JzrFP8VMN1ogaWYsxa9XJGaWgyQ',
        fuelType: 'gas',
        fuelLevel: 100.0,
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
