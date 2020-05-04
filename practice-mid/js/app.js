"use strict"
 
    $(document).ready(function () {
           
        let senior ="yes";
        let num = 1;

        setInterval(function () {
            $("#clock").text(new Date());
          }, 1000);

            $("#censusForm").on("submit",
            function(event){
                event.preventDefault();
                const fullName = $("#fullName").val();
                const citzenID = $("#citzenID").val();
                const SSN = $("#SSN").val();
                const state = $("#state").val();
                $("#displayTable").append(
                    ` <tr id="row${num}">
                        <td>${fullName}</td>
                        <td>${citzenID}</td>
                        <td>${state}</td>
                        <td>${SSN}</td>
                        <td>${senior}</td> 
                        <td><a href="#"><span id ="edit">Edit</span></a></td>
                    </tr>`
                );
                num++;
            });
            $("input[type=radio][name=seniorCitzen]").change(function () {
                if (this.value == "yes") {
                  senior = "yes";
                } else if (this.value == "no") {
                  senior = "no";
                }
              });


                $("#displayTable").on('click','#edit',function(){
                    // get the current row
                    const currentRow=$(this).closest("tr"); 
                    
                    const col1=currentRow.find("td:eq(0)").text(); //Full name
                    const col2=currentRow.find("td:eq(1)").text(); // citzen id
                    const col3=currentRow.find("td:eq(2)").text(); // state
                    const col4=currentRow.find("td:eq(3)").text(); // ssn
                    const col5=currentRow.find("td:eq(4)").text(); // senior citzen
                    console.log(col5);
                    
                    $("#fullName").val(col1);
                    $("#citzenID").val(col2);
                    $("#SSN").val(col4);
                    $("#state").val(col3);
                    if(col5 =="yes"){
                        $("#yes").prop("checked", true);
                    }else if(col5 =="no"){
                        $("#no").prop("checked", true);                        
                    }
                    // console.log(data);
                    console.log( $("input[type=radio][name=seniorCitzen]").value)
               });
    });

