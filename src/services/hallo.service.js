const db = require("./db.service");
const helper = require("../utils/helper.util");
const config = require("../configs/general.config");

async function getHighestSalary(job) {
  const rows = await db.query(
    `SELECT job, name, salary
     FROM salaries
     WHERE salary = (select MAX(salary) from salaries WHERE job = ?)`,
    [job]
  );
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

async function getAverageSalaries() {
  const rows = await db.query(
    `SELECT job, avg(Salary) averageSalary
    FROM salaries
    group by job`
  );
  const data = helper.emptyOrRows(rows);
  const result = data.reduce((previousValue, currentValue) => {
    previousValue[currentValue.job] = parseInt(currentValue["averageSalary"]);
    return previousValue;
  }, {});

  return {
    result,
  };
}

async function getJobPopularity() {
  const rows = await db.query(
    `SELECT job, count(*) popularity
    FROM salaries
    group by job`
  );
  const data = helper.emptyOrRows(rows);
  const result = data.reduce((previousValue, currentValue) => {
    previousValue[currentValue.job] = parseInt(currentValue["popularity"]);
    return previousValue;
  }, {});

  return {
    result,
  };
}

async function createOrUpdate(row) {
  const result = await db.query(
    `SET @name = ?,
         @job = ?,
         @salary = ?;
     INSERT INTO salaries (name, job, salary) 
     VALUES(@name, @job, @salary)
     ON DUPLICATE KEY UPDATE job=@job, salary=@salary`,
    [row.name, row.job, row.salary]
  );

  let message = "Error in creating or updating the row";

  if (result.affectedRows) {
    message = "Row updated successfully";
  }

  return { message };
}

module.exports = {
  getHighestSalary,
  getAverageSalaries,
  getJobPopularity,
  createOrUpdate,
};
