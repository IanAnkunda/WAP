"use strict"
 
$(document).ready(function() {

    $("#registrationForm").submit(
        function(event) {
            event.preventDefault();
            const patientID = $("#patientID").val();
            const firstName = $("#firstName").val();
            const middleInitals = $("#middleInitals").val();
            const lastName = $("#lastName").val();
            const doB = $("#doB").val();
            const department = $("#department").val();
            const Outpatient = $("input[name='radioOutpatient']:checked").val();
            const older = calculateAge(doB)>65?'older':'young';
            let newDataRow = `<tr class = '${older} Outpatient${Outpatient}'>
                    <td>${patientID}</td>
                    <td>${firstName}</td>
                    <td>${middleInitals}</td>
                    <td>${lastName}</td>
                    <td>${doB}</td>
                    <td>${department}</td>
                    <td>${Outpatient}</td>
                    </tr>`; 
            $("#tbodyPatientList").append(newDataRow);
            $("#patientID").val("");
            $("#firstName").val("");
            $("#middleInitals").val("");
            $("#lastName").val("");
            $("#doB").val("");
            $("#department").val("");
            $("#yes").prop("checked", false);
            $("#no").prop("checked", false);
            $("#patientID").focus();
        }
    );
 
    function calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - new Date(birthday).getTime();
        var ageDate = new Date(ageDifMs); // miliseconds 
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    $("#outPatient").change(function(event) {
        outPatientChecked(event.target.checked);
        if($("#elderly").prop("checked")){
            olderCheckBoxClicked(true);
        }
     });
     function outPatientChecked(isChecked){
        if(isChecked){
            $(".Outpatientno").hide();
        }else{
            $(".Outpatientno").show();
        }
     }
    $("#elderly").change(function(event) {
        olderCheckBoxClicked(event.target.checked);
        if($("#outPatient").prop("checked")){
            outPatientChecked(true);
        }
     });

     function olderCheckBoxClicked(isChecked){
        if(isChecked){
            $(".young").hide();
        }else{
            $(".young").show();
        }
     }
 });