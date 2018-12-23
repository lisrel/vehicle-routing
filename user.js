var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:admin@127.0.0.1:5432/wrl_dss';
var db = pgp(connectionString);

module.exports = {
    getStudents: getStudents,
    getLecturers: getLecturers,
    getVehicles: getVehicles,
    getDrivers: getDrivers,
    getOrganisation: getOrganisation,
    getDueFirst: getDueFirst,
    getDueSecond: getDueSecond
};

function getStudents(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    db.any("select * from students LEFT JOIN organisation ON (students.org_name = organisation.org_name)")
        .then(function(data) {

            res.status(200)
                .json(
                    data
                );
        })
        .catch(function(err) {
            return next(err);
        });
}

function getDueFirst(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    db.any("select * from students LEFT JOIN organisation ON (students.org_name = organisation.org_name) WHERE number_of_assessments = 0")
        .then(function(data) {

            res.status(200)
                .json(
                    data
                );
        })
        .catch(function(err) {
            return next(err);
        });
}

function getDueSecond(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    db.any("select * from students LEFT JOIN organisation ON (students.org_name = organisation.org_name) WHERE number_of_assessments = 1")
        .then(function(data) {

            res.status(200)
                .json(
                    data
                );
        })
        .catch(function(err) {
            return next(err);
        });
}

function getLecturers(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    db.any("select * from lecturers")
        .then(function(data) {

            res.status(200)
                .json(
                    data
                );
        })
        .catch(function(err) {
            return next(err);
        });
}

function getVehicles(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    db.any("select * from vehicles")
        .then(function(data) {

            res.status(200)
                .json(
                    data
                );
        })
        .catch(function(err) {
            return next(err);
        });
}

function getDrivers(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    db.any("select * from driver")
        .then(function(data) {

            res.status(200)
                .json(
                    data
                );
        })
        .catch(function(err) {
            return next(err);
        });
}

function getOrganisation(req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    db.any("select * from organisation")
        .then(function(data) {

            res.status(200)
                .json(
                    data
                );
        })
        .catch(function(err) {
            return next(err);
        });
}