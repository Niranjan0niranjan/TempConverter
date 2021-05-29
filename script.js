const calculateTemp = ()=>{
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const t = document.getElementById("temp_diff").value;
    // console.log(t);

    const result =document.getElementById("resultContainer");


    if(t=='cel')
    {
        document.getElementById("temp_diff1").value="fah";
        var far = numberTemp*1.8 + 32;
        result.value=far;
    }
    else
    {
        document.getElementById("temp_diff1").value="cel";
        var cel = (numberTemp -32)/1.8 ;
        result.value=cel;
    }
    
}

myFunc =()=>{
    setInterval(calculateTemp,100);
}

calculateTemp();