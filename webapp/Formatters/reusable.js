sap.ui.define([], function () {
return {
	fnFamilyStatus :function(family){
		if(family ==="Y"){
			return "Yes";
		}
		else{
			return "No";
		}
	},
	
	fnDOB :function(dob){
	if (dob === null){
		return dob;
			
	
	}
	else{
			return dob.substring(0,2) + "." + dob.substring(2,4) + "." + dob.substring(4);
	}
	

}
//save

};
	
});
