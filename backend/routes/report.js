const express = require('express');
const path = require('path');
const multer = require('multer');
const { uploadReport, getReportById } = require('../controllers/reportController');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'text/xml' || file.mimetype === 'application/xml') {
            cb(null, true);
        } else {
            cb(new Error('Only XML files are allowed!'), false);
        }
    }
})


// api call
router.post('/upload', upload.single('file'), uploadReport);

router.get('/report/:reportId', getReportById);

module.exports = router;
