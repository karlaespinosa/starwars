const router = require('express').Router();
let Starship = require('../models/starship.model');

router.route('/').get((req, res) => {
    Starship.find()
        .then(starships => res.json(starships))
        .catch(err => res.status(400).json(`Error ${err}`));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const classShip = req.body.classShip;
    const length = Number(req.body.length);
    const passengers = Number(req.body.passengers);

    const newStarship = new Starship({
        name,
        classShip,
        length,
        passengers
    });

    newStarship.save()
    .then(() => res.json('Starship added'))
    .catch(err => res.status(400).json(`Error ${err}`));

});

router.route('/:id').get((req,res) => {
    Starship.findById(req.params.id)
    .then(starship => res.json(starship))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/update/:id').get((req,res) => {
    Starship.findById(req.params.id)
    .then(starship => {
        starship.classShip = req.body.classShip;
        starship.length = req.body.length;
        starship.passengers = req.body.passengers;

        starship.save()
        .then(() => res.json('Starship updated'))
        .catch(err => res.status(400). json(`Error ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;