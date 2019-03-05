"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 3

   Author:  Jose Felix
   Date:    3.3.19
   
   Filename: ah_report.js
   
   Functions:
   
   calcSum(donorAmt)
      A callback function that adds the current donation amount in the array to the donationTotal variable
   
   findMajorDonors(donorAmt)
      A callback function that returns the value true only if the current donation amount in the array
      is greater than or equal to 1000
      
   donorSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeDonorRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/
//this is the initial value for the donationTotal variable
var donationTotal = 0;

donors.forEach(calcSum);
// .toLocaleString is the method to get the commas after where the thousand marks belong. Concatenated donors and donationTotal for the variables to be added to the code in two tds.
var summaryTable = "<table> <tr><th>Donors</th> <td>" + donors.length + "</td></tr> <tr><th>Total Donations</th> <td>$" + donationTotal.toLocaleString() + "</td> </tr> </table>";


document.getElementById('donationSummary').innerHTML = summaryTable;
// majordonors variable is declared to be the same as donors.filter(findMajorDonors) where the callback is the function findMajorDonors for the code to run. FIlter is the method that displays only the ones which the parameters specify.
var majorDonors = donors.filter(findMajorDonors);

majorDonors.sort(donorSortDescending);
// donorTable is set to an initial value and it is of a text string.
var donorTable = "<table> <caption>Major Donors</caption> <tr> <th>Donation</th><th>Donor ID</th> <th>Date</th><th>Name</th><th>Address</th> <th>Phone</th><th>E-mail</th> </tr>";

//this is using the MajorDonors variable with the foreach method to work on the function writeDonorRow. The callback function is where the writeDonorRow comes in place. This is being called back into the foreach method so that the function will run for each.
majorDonors.forEach(writeDonorRow);
//this is to end the table in donorTable so we can add the text string to it
donorTable += "</table>";
// this is to show everything in the code, because document gets the code from the page document and getelementbyid is where we select the div of donorTable.
document.getElementById('donorTable').innerHTML = donorTable;




// dont change this code ======================================================================================================
function calcSum(donorAmt) {
   donationTotal += donorAmt[9];
}

function findMajorDonors(donorAmt) {
   return donorAmt[9] >= 1000;
}

function donorSortDescending(a, b) {
   return b[9] - a[9];
}

function writeDonorRow(value) {
   donorTable += "<tr>";
   donorTable += "<td>$" + value[9].toLocaleString() + "</td>";   
   donorTable += "<td>" + value[0] + "</td>";
   donorTable += "<td>" + value[10] + "</td>";   
   donorTable += "<td>" + value[2] + ", " + value[1] + "</td>";  
   donorTable += "<td>" + value[3] + "<br />" + value[4] + ", " + value[5] + " " + value[6]  + "</td>";    
   donorTable += "<td>" + value[7] + "</td>";   
   donorTable += "<td>" + value[8] + "</td>";         
   donorTable += "</tr>";
}