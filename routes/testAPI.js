const express = require('express');
const router = express.Router();

// initialize api with ticker names, prices, and images
let data = [
    { id: 1, name: 'AAPL', time: 0, price: 144.44, image: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png' },
    { id: 2, name: 'TSLA', time: 0, price: 1003.96, image: 'https://www.picng.com/upload/tesla_logo/png_tesla_logo_65534.png' },
    { id: 3, name: 'AMZN', time: 0, price: 3345.29, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png' },
    { id: 4, name: 'PLTR', time: 0, price: 19.85, image:'https://upload.wikimedia.org/wikipedia/commons/3/37/Palantir_company_logo.png' },
    { id: 5, name: 'GOOGL', time: 0, price: 2938.23, image: 'https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png' },
];

// get all data from api
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// get data from a particular id in the api
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

// update data from a particualar id in the api
router.put('/:id', function (req, res) {
    // get item object match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    // check if item found
    if (found) {

        // generates random percent between -5 and 5
        var sign = Math.random();
        if (sign > 0.5) {
            sign = -1;
        } else {
            sign = 1;
        }
        var percent = Math.random()/20;

        let updated = {
            id: found.id,
            name: found.name,
            time: found.time + 1,
            // history: found.history.push(found.price),
            price: Math.round((found.price + sign*found.price*percent)*100)/100,
            image: found.image,
        };

        // find index of found object from array of data
        let targetIndex = data.indexOf(found);

        // replace object from data list with `updated` object
        data.splice(targetIndex, 1, updated);

        // return with status 204
        // success status response code 204 indicates
        // that the request has succeeded
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});

module.exports = router;