const db = require('./models');

async function seed() {
  await db.sequelize.sync();

  const prom1 = db.Burger.create({
    burger_name: "Double Double Animal Style"
  });
  const prom2 = db.Burger.create({
    burger_name: "Black and Blue"
  });
  const prom3 = db.Burger.create({
    burger_name: "Portabello and Swiss"
  });

  const [burger1, burger2, burger3] = await Promise.all([prom1, prom2, prom3])
  .then(data => console.log(data));

}

seed();