// 6. modify basic JS object, with "this" keyword
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  fullName: function() {return this.firstName  + " " + person.lastName}
}

document.getElementById("1A").innerHTML = person.fullName();

// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">
person["streetAddress"] = "1234 Road Street";
person["city"] = "Metrocity";
person["state"] = "Michigan";
person["zipCode"] = 12345;
person["fullAddress"] =function() {return this.streetAddress + " " + this.city + " " + this.state + " " + this.zipCode}

document.getElementById("1B").innerHTML = person.fullAddress();
// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");
let table2a = createTable("table2a");
div2a.appendChild(table2a);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
appendTableRow3(table2a,"1","2","3");
appendTableRow3(table2a,"4","5","6");
appendTableRow3(table2a,"7","8","9");


// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">
let div2b = document.getElementById("2B");
let table2b = createTable("table2b");
div2b.appendChild(table2b);
table2b.setAttribute("style", "border:1px solid black;")
table2b.setAttribute("width", "100%")
for(let x = 0; x < 5; x++){
  //made appendTableRow5() next to appendTableRow3() 
  appendTableRow5(table2b,1 + 5*x,2 + 5*x,3 + 5*x,4 + 5*x,5 + 5*x);
}

// ==================

// 8. create "totals" row and column in a table


// Instructions
// don't change table3A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above. 
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table03B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column
let div3b = document.getElementById("3B");
let table3b = createTable("table3b");
div3b.appendChild(table3b);
table3b.setAttribute("border", "1")
table3b.setAttribute("width", "100%")
table3b.setAttribute("id", "table03B")
table3b.setAttribute("class", "table table-striped")

let  prevTable = document.getElementById("3A");
let cells = new Array(4);

for(let x = 0; x < 4; x ++){
  cells[x] = new Array(3);
    for(let y = 0; y < 3; y ++){
        cells[x][y] = prevTable.children[0].children[0].children[x].children[y].innerHTML;
    }
}

let priceTotal = 0.00;
let qtyTotal = 0;

for(let x = 1; x < 4; x++){
  priceTotal += parseInt(cells[x][1]);
  qtyTotal += parseFloat(cells[x][2]);
}

createHeader3(table3b, cells[0][0], cells[0][1], cells[0][2]);
appendTableRow3(table3b,cells[1][0],cells[1][1],cells[1][2]);
appendTableRow3(table3b,cells[2][0],cells[2][1],cells[2][2]);
appendTableRow3(table3b,cells[3][0],cells[3][1],cells[3][2]);
appendTableRow3(table3b,"Totals",priceTotal,qtyTotal);


// 9. Revise a non-object-oriented HTML form. Make it so the field in focus displays *only* its own error (not the errors of all the other fields), however, if the user clicks the "validate" button, then display all errors.
// code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html 

    // initialize error div id array
    var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";

    // function: validate() ---------------------------------------------
    function validate() {
        // initialize input array
        var inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value;
      
        // initialize error array
        var errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        // update error array with error message
        for (i in inputs) {
            var errMessage = errors[i];
            var div = divs[i];
          //MY LINE
          if(inputs[i]){
            if (inputs[i] == "")
                document.getElementById(div).innerHTML = errMessage;
            else if (i == 2) {
                var atpos = inputs[i].indexOf("@");
                var dotpos = inputs[i].lastIndexOf(".");
                if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[i].length)
                    document.getElementById('errEmail').innerHTML 
                      = "<span style='color: red'>Enter a valid email address!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else if (i == 5) {
                var first = document.getElementById('password').value;
                var second = document.getElementById('confirm').value;
                if (second != first)
                    document.getElementById('errConfirm').innerHTML 
                      = "<span style='color: red'>Your passwords don't match!</span>";
                else
                    document.getElementById(div).innerHTML = "OK!";
            } else
                document.getElementById(div).innerHTML = "OK!";
          }
        }
    }

    // function: finalValidate() ------------------------------------
    function finalValidate() {
        var count = 0;
        for (i = 0; i < 6; i++) {
            var div = divs[i];
            if (document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
        }
        if (count == 6)
            document.getElementById("errFinal").innerHTML 
              = "All the data you entered is correct!!!";
    }


// 10. Create a more object-oriented form

// Step 1. Create/append the DOM object
let form5B = document.getElementById("5B");
let table5B = createTable("5B");
form5B.appendChild(table5B);

// Step 2. Create an JS object array containing form info 
let formArray = [
  {label: "First name:", inputType: "text", id: "first10", 
    onkeyup: "validate10();", errorId: "errFirst10"}, 
  {label: "Last name:",  inputType: "text", id: "last10",  
    onkeyup: "validate10();", errorId: "errLast10" }, 
  {label: "Email:",      inputType: "text", id: "email10", 
    onkeyup: "validate10();", errorId: "errEmail10"}, 
  {label: "User id:",    inputType: "text", id: "uid10",   
    onkeyup: "validate10();", errorId: "errUid10"  }, 
  {label: "Password:",   inputType: "password", id: "password10", 
    onkeyup: "validate10();", errorId: "errPassword10"}, 
  {label: "Confirm Password:", inputType: "password", id: "confirm10", 
    onkeyup: "validate10();", errorId: "errConfirm10"}
];

// Step 3. loop through the JS object array to populate the form

// your code here
for(let x = 0; x < formArray.length; x++){
addTextBox(table5B, formArray[x].label, formArray[x].inputType, formArray[x].id, formArray[x].onkeyup, formArray[x].errorId);
}

// append to tableobj a 3-column table row 
function appendTableRow3 (tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}
// append to tableobj a 5-column table row 
function appendTableRow5 (tableobj, col1, col2, col3, col4, col5) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  td5.innerHTML = col5;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

function createHeader3(tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  // insert content into columns
  th1.innerHTML = col1;
  th2.innerHTML = col2;
  th3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

// return a DOM object containing an empty table (with tbody element)
function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}

// possible object oriented form append code
function addTextBox(tableobj, label, inputType, id, onkeyup, errorId){
  let tr = document.createElement("tr");
  let box = document.createElement("td");
  let label1 = document.createElement("td");
  let input = document.createElement("input");
  let error = document.createElement("td");
  let errorDiv = document.createElement("div");
  //input
  let labeltext = document.createTextNode(label);
  input.setAttribute("inputtype", inputType)
  input.setAttribute("id", id)
  input.setAttribute("onekeyup", onkeyup)
  //errorDiv
  errorDiv.setAttribute("id", errorId)
  
  
  box.appendChild(input);
  error.appendChild(errorDiv)
  label1.appendChild(labeltext);
  tr.appendChild(label1);
  tr.appendChild(box);
  tr.appendChild(error);
  
  tableobj.children[0].appendChild(tr);
  
}

/*
let fieldLabel, fieldEntry, fieldError;
for(let i=0; i<formArray.length; i++) {
  fieldLabel = formArray[i].label;
  fieldEntry =  `<input type='${formArray[i].inputType}' `
    + `id='${formArray[i].id}' name='${formArray[i].id}' `  
    + `onkeyup='${formArray[i].onkeyup}' \/>`;
  fieldError = `<span id='' + formArray[i].errorId + ''></span>`;
  appendTableRow3(table00,fieldLabel,fieldEntry,fieldError);
}
console.log(fieldLabel);
console.log(fieldEntry);
console.log(fieldError);
*/
