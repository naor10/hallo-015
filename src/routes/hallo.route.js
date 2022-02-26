const express = require("express");
const router = express.Router();
const halloController = require("../controllers/hallo.controller");

/* GET highest salary. */
router.get("/highest-salary", halloController.getHighestSalary);

/* GET average salaries. */
router.get("/average-salaries", halloController.getAverageSalaries);

/* GET job popularity. */
router.get("/job-popularity", halloController.getJobPopularity);

/* POST row */
router.post("/update-job", halloController.createOrUpdate);

module.exports = router;
