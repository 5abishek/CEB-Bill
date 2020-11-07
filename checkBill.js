function checkBill(){

		let rUnit = Number(document.getElementById('unit').value);
		
		let rUnitResult = document.getElementById('result');
		
		var bill;
		
		if(rUnit<=0)
		{
			bill = "Invalid Input";
		}
		else if(rUnit>0 && rUnit<=30)
		{
			bill = rUnit*7.85;
		}
		else if(rUnit>30 && rUnit<=60)
		{
			bill = 235.5 + ((rrUnit-30)*7.85);
		}
		else if(rUnit>60 && rUnit<=90)
		{
			bill = 471 + ((rUnit-60)*10);
		
		}
		else if(rUnit>90 && rUnit<=120)
		{
			bill =771 + ((rUnit-90)*27.75);
		}
		else if(rUnit>120)
		{
			bill = 1603.5 + ((rUnit - 120)*32);
		}

		rUnitResult.innerHTML = "RS"+bill;
		

}