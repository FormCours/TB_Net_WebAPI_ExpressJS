const fakeData = [
    {
        cakeId: 1,
        name: "Hjónabandssae",
        origin: "Island"
    },
    {
        cakeId: 2,
        name: "Opera",
        origin: "France"
    },
    {
        cakeId: 3,
        name: "Fraisier",
        origin: "France"
    },
    {
        cakeId: 4,
        name: "Melonpan",
        origin: "Japon"
    }
];
let lastId = 4;


module.exports = {

    getAll: (req, res) => {
        res.status(200).json(fakeData);
    },

    getById: (req, res) => {
        const id = parseInt(req.params.id);

        const cake = fakeData.find(c => c.cakeId === id);
        
        if(cake) {
            res.status(200).json(cake);
        }
        else {
            res.sendStatus(404);
        }
    },

    post: (req, res) => {
        const {name, origin} = req.body;    // Necessite le middleware 'express.json()'

        if(!name.trim()) {
            res.sendStatus(400);
            return;
        }

        const id = ++lastId;
        fakeData.push({id, name, origin});

        res.status(200).json({id})
    },

    put: (req, res) => {
        //TODO Implemente this
        res.sendStatus(501);
    },

    delete: (req, res) => {
        const id = parseInt(req.params.id);

        const targetIndex = fakeData.findIndex(c => c.cakeId === id);
        console.log(targetIndex, typeof(targetIndex));

        if(targetIndex === -1) {
            res.sendStatus(400);
            return;
        }
            
        fakeData.splice(targetIndex, 1);
        res.sendStatus(204);
    }


}