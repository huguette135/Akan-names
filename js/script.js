
    function setName() {
        let birthday = document.getElementById('birthday').value;

        let century = parseInt(birthday.split("-")[0].substr(0,2));
        let year = parseInt(birthday.split("-")[0].substr(2));
        let month = parseInt(birthday.split("-")[1]);
        let day = parseInt(birthday.split("-")[2]);        

        let weekDay =  ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) %7
        
        var boysNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        var girlsNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    const rbs = document.getElementsByName("gender");
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue =rb.value;
            break;
        }
    }
if (selectedValue=="female") {
    document.getElementById("output").value=girlsNames[weekDay];
}
if (selectedValue=="male") {
    document.getElementById("output").value=boysNames[weekDay];
}
return false;
    }