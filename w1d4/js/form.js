"use strict";

function printDetails(e) {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let website = document.getElementById('website').value;
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Website: " + website);
    }

    function printDetails(e) {
        let productNumber = document.getElementById('productNumber').value;
        let productName = document.getElementById('name').value;
        let price = document.getElementById('unitPrice').value;
        let quantity = document.getElementById('quantity').value;
        let supplier = document.getElementById('supplier').value;
        let date = document.getElementById('date-supplied').value;
    
        let arr = {
            "ProductNumber": productNumber, 
            "quantity": quantity, 
            "ProductName": productName, 
            "Supplier": supplier, 
            "Price": price, 
            "Date": date};
    
            for(const label in arr) {
            alert(label + ': ' + arr[label]);
        }
    }
    