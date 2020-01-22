exports.render = (burgers) => {
  return burgers.map(b => {
    `Id: ${b.id},
     Burger Name: ${b.burger_name},
     Devoured: ${b.devoured}
     <hr>` 
  });
};