"use strict";

$(document).ready(function () {
        $("#productForm").on("submit",
        function(evt){
            evt.preventDefault();
            $("#displayDiv").html(
                "Product Number : " + $("#productNumber").val() + "</br>" +
                "Product Name : " + $("#name").val() + "</br>" +
                "Product Number : " + $("#unitPrice").val() + "</br>" +
                "Quantity : " + $("#quantity").val() + "</br>" +
                "Supplier : " + $("#supplier").val() + "</br>" +
                "Date Supplied : " + $("#date-supplied").val() + "</br>" 
            );
        });
});


            // $("#displayDiv").append(
            //     $("<p>", {  "text": "My paragraph is awesome!" })
            // );
            // $("#displayDiv").text(
            //     `$ ("<p>") {$("#productNumber").val()}`
            // );