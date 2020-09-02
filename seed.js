const { green, red } = require('chalk');
const { db, Project, Robot } = require('./server/db');

//Seeding database
const seed = async () => {
  try {
    await db.sync({ force: true });

    // Projects
    const pizza = await
      Project.create({
        title: 'Make pizza',
        deadline: '09-17-2020',
        priority: 9,
        completed: false,
        description:
          'Toss dough, spread tomato sauce, and cover with mozzarella cheese',
      })




    const washCar = await
      Project.create({
        title: 'Wash car',
        deadline: '09-13-2020',
        priority: 3,
        completed: false,
        description: 'Vacuum and wax car',
      })

    const laundry = await
      Project.create({
        title: 'Laundry',
        deadline: '09-10-2020',
        priority: 6,
        completed: false,
        description: 'Wash, fold, and put away laundry',
      })

    //Robots
      const r2d2 = await Robot.create({
        name: 'R2-D2',
        imageUrl:
          'https://icon-library.com/images/r2d2-icon/r2d2-icon-11.jpg',
        fuelType: 'electric',
        fuelLevel: 88.34,
      })

      const walle = await Robot.create({
        name: 'Wall-E',
        imageUrl:
          'https://i.pinimg.com/originals/83/8b/41/838b41a126747204325d2352c2cfa219.png',
        fuelType: 'diesel',
        fuelLevel: 52.36,
      })

      const bender = await Robot.create({
        name: 'Bender',
        imageUrl:
          'https://lh3.googleusercontent.com/proxy/G8RaAJr55o1Y3YzwCqs7dkcbdogyMR47O1Q48rfPJ_61HTUyC0d-7O6sv52MKL9QwOKfEdBod14nFu4pvNSbV2l-L7t22zF-Kw33wKuVf_gTWg',
        fuelType: 'gas',
        fuelLevel: 100.0,
      })

      await pizza.setRobots([r2d2, bender])
      await washCar.setRobots([r2d2, walle])
      await laundry.setRobots([bender, walle, r2d2])

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
