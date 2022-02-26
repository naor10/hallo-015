const hallo = require("../services/hallo.service");

async function getHighestSalary(req, res, next) {
  try {
    res.json(await hallo.getHighestSalary(req.query.job));
  } catch (err) {
    console.error(`Error while getting highest salary`, err.message);
    next(err);
  }
}

async function getAverageSalaries(req, res, next) {
  try {
    res.json(await hallo.getAverageSalaries());
  } catch (err) {
    console.error(`Error while getting average salaries`, err.message);
    next(err);
  }
}

async function getJobPopularity(req, res, next) {
  try {
    res.json(await hallo.getJobPopularity());
  } catch (err) {
    console.error(`Error while getting job popularity`, err.message);
    next(err);
  }
}

async function createOrUpdate(req, res, next) {
  try {
    res.json(await hallo.createOrUpdate(req.body));
  } catch (err) {
    console.error(`Error while creating or updating the row`, err.message);
    next(err);
  }
}

module.exports = {
  getHighestSalary,
  getAverageSalaries,
  getJobPopularity,
  createOrUpdate,
};
