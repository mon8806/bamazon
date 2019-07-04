var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Parente2019$",
    database: "bamazondb"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    displayTable();
  });

  function displayTable(){
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        //console.log(res);
    
        // Log all results of the SELECT statement
        console.table(res);
        userPrompt();
      });
    
  }

  function userPrompt(){
      inquirer.prompt([
     {
         type: "input",
         name: "item_id",
         message: "What is the id of the product you're looking to buy?",
     } ,
     {
         type: "input",
         name: "unitProducts",
         message: "How many units would you like to buy?",
     },
  ])
  .then(answer=>{
      console.log('Answers: ', answer);
      checkStock(answer);
  });
}

function checkStock(userAnswer){
    // console.log(userAnswer);
    connection.query("SELECT * FROM products WHERE item_id =" + userAnswer.item_id, function(err, res) {
        if(res[0].stock_quantity >=userAnswer.unitProducts){
            var totalCost = res[0].price *userAnswer.unitProducts;
            var newQuantity = res[0].stock_quantity - userAnswer.unitProducts;
            var sqlQuery = `UPDATE products SET stock_quantity = ${newQuantity}  WHERE item_id = ${parseInt(userAnswer.item_id)}`
            connection.query(sqlQuery);
            console.log("In stock");
            console.log(`Cost: ${totalCost}`)
        }
        else{
            console.log("Insufficient quantity! We don't have enough " + res[0].product_name + " for you order.");
        }
        // if (err) throw err;
        // console.log(res);
        displayTable()
    })

};