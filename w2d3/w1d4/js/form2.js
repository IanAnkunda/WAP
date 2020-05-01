"use strict";

$(document).ready(function () {
        $("#productForm").on("submit",
        function(evt){
            evt.preventDefault();
            // $("#displayDiv").html(
            //     "Product Number : " + $("#productNumber").val() + "</br>" +
            //     "Product Name : " + $("#name").val() + "</br>" +
            //     "Uuit Price : " + $("#unitPrice").val() + "</br>" +
            //     "Quantity : " + $("#quantity").val() + "</br>" +
            //     "Supplier : " + $("#supplier").val() + "</br>" +
            //     "Date Supplied : " + $("#date-supplied").val() + "</br>" 
            // );
            $("#displayDiv").append(
                `<p>Product Number :  ${$("#productNumber").val()} </p>
                <p>Product Name :  ${$("#name").val()} </p>
                <p>Unit :  ${$("#unitPrice").val()} </p>
                <p>Quantity :  ${$("#quantity").val()} </p>
                <p>Supplier :  ${$("#supplier").val()} </p>
                <p>Date Supplied :  ${$("#date-supplied").val()} </p>`
            )
        });
});


            // $("#displayDiv").append(
            //     $("<p>", {  "text": "My paragraph is awesome!" })
            // );
            // $("#displayDiv").text(
            //     `$ ("<p>") {$("#productNumber").val()}`
            // );