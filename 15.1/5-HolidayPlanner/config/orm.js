var connection = require("./connection.js");

var orm = {
  select: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    console.log(queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },
  selectAndOrder: function(tableInput, colToOrderBy, sortOrder) {
    var queryString = "SELECT * FROM ?? order by ??";

    console.log(queryString);
console.log("sdaasdasdasdasd");
console.log("SELECT * FROM parties order by party_cost DESC");
    connection.query("SELECT * FROM parties order by party_cost DESC", function(err, result) {
      console.log(result);
    });
  },
  leftJoin: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString = "SELECT ?? FROM ?? AS tOne";
    queryString = queryString + " LEFT JOIN ?? AS tTwo";
    queryString = queryString + " ON tOne.?? = tTwo.??";

    console.log(queryString);

  //orm.leftJoin("*", "clients", "parties", "id", "client_id");

    connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
