"use strict";

$(document).ready(function () {
    $("#form").on("submit", 
        function (event){
            event.preventDefault();
        console.log($("#email").val());
        console.log($("#password").val());
        console.log($("#website").val());
    });

//     $("productForm").on("submit",
//         function(evt){
//             evt.preventDefault();
//             console.log($("#productNumber").val());
//             // $("#displayDiv").append(
//             //     $("<p>", {  "text": "My paragraph is awesome!" });
//             // );
//             // $("#displayDiv").text(
//             //     `${$("#productNumber").val()}`
//             // );
//             $("#displayDiv").html(
//                 "Product Number : " + $("#productNumber").val() + "</br>" +
//                 "Product Name : " + $("#name").val() + "</br>" +
//                 "Product Number : " + $("#unitPrice").val() + "</br>" +
//                 "Quantity : " + $("#quantity").val() + "</br>" +
//                 "Supplier : " + $("#supplier").val() + "</br>" +
//                 "Date Supplied : " + $("#date-supplied").val() + "</br>" 
//             );
//         });

});



function printDetails() {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let website = document.getElementById('website').value;
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Website: " + website);
    }

    function addProduct() {
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
            console.log(label + ': ' + arr[label]);
        }
    }
    