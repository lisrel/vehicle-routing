var express = require('express');
var router = express.Router();
var sessions = require('express-sessions');
var alert = require('alert-node');
var db = require('pg');
var session;
var db = require('../user.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'welcome' });
});

router.get('/assessor1', function(req, res, next) {
    res.render('assessor1', { title: 'students' });
});
router.get('/assessor', function(req, res, next) {
    res.render('assessor', { title: 'students' });
});
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'services' });
});
router.get('/dashboard1', function(req, res, next) {
    res.render('dashboard1', { title: 'select' });
});

router.get('/lecturers', function(req, res, next) {
    res.render('lecturers', { title: 'lecturers' });
});
router.get('/routing1', function(req, res, next) {
    res.render('routing1', { title: 'routing and scheduling' });
});
router.get('/routing1_1', function(req, res, next) {
    res.render('routing1_1', { title: 'routing and scheduling' });
});
router.get('/vehicles', function(req, res, next) {
    res.render('vehicles', {
        title: 'vehicles list'
    });
});

router.get('/vehicles_1', function(req, res, next) {
    res.render('vehicles_1', {
        title: 'vehicles list'
    });
});

router.get('/drivers', function(req, res, next) {
    res.render('drivers', {
        title: 'drivers list'
    });
});

router.get('/drivers_1', function(req, res, next) {
    res.render('drivers_1', {
        title: 'drivers list'
    });
});


router.get('/firstassess', function(req, res, next) {
    res.render('firstassess', {
        title: 'first assessment'
    });
});

router.get('/secondassess', function(req, res, next) {
    res.render('secondassess', {
        title: 'second assessment'
    });
});

router.get('/schedules', function(req, res, next) {
    res.render('schedules', {
        title: 'schedules'
    });
});


router.get('/schedules_1', function(req, res, next) {
    res.render('schedules_1', {
        title: 'schedules'
    });
});

router.post('/schedules', function(req, res, next) {
    if (req.body.vehicles == '1') {
        res.render('routing1', { title: 'routing one vehicle' });
    } else {
        if (req.body.vehicles == '2') {
            res.render('routing2', { title: 'routing 2 vehicles' });
        }
    }
});

router.post('/schedules_1', function(req, res, next) {
    if (req.body.vehicles == '1') {
        res.render('routing1_1', { title: 'routing one vehicle' });
    } else {
        if (req.body.vehicles == '2') {
            res.render('routing2_1', { title: 'routing 2 vehicles' });
        }
    }
});


router.post('/', function(req, res, next) {
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        res.render('dashboard1', { title: 'dashboard1' });
    } else {
        if (req.body.username == 'driver' && req.body.password == 'driver') {
            res.render('schedules');
        }else {
            if (req.body.username == 'assessor' && req.body.password == 'assessor') {
                res.render('assessor1');
            } else {
                     res.render('loginerr', { title: 'loginerr' });
            }
           
        }
        
    }
});
router.get('/dashboard', function(req, res, next) {
    res.render('dashboard', { title: 'all students' });

});
router.get('/api/students', db.getStudents);

router.get('/api/lecturers', db.getLecturers);

router.get('/api/vehicles', db.getVehicles);

router.get('/api/drivers', db.getDrivers);

router.get('/api/first', db.getDueFirst);

router.get('/api/second', db.getDueSecond);

module.exports = router;