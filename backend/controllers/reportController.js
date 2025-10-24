const Report = require('../models/Reports');
const { constrainedMemory } = require('process');
const { parseXml } = require('../utils/xmlParser');

async function uploadReport(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const xmlData = req.file.buffer.toString('utf-8');
        const parsedData = await parseXml(xmlData);

        console.log(parsedData.creditAccountsInfo);

        const reportData = new Report({
            basicDetails: parsedData.basicDetails,
            reportSummary: parsedData.reportSummary,
            creditAccountsInfo: parsedData.creditAccountsInfo
        });

        const savedReport = await reportData.save();
        return res.status(201).json(savedReport);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function getReportById(req, res) {
    try {
        const id = req.params.reportId;
        const report = await Report.findById(id);
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        return res.status(200).json(report);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal server error' });    
    }    
}

module.exports = { uploadReport, getReportById };