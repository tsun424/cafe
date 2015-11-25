
function doOrder(){
	var today = new Date();
	var subject = 'OnlineOrder';
	subject += today.getYear().toString()+(today.getMonth()+1)+today.getDate()
	+today.getHours()+today.getMinutes()+today.getMinutes()+today.getMilliseconds();
	$("#subject").val(subject);
	
	var bodyStr = 'Name:\t'+$("#name").val()+'\n';
	bodyStr += 'Email:\t'+$("#email").val()+'\n';
	bodyStr += 'DeliveryTime:\t'+$("#time").val()+'\n';
	bodyStr += 'Address:\t'+$("#address").val()+'\n';
	if($("#latte").val()>0){
		bodyStr += 'Latte:\t'+$("#latte").val()+'\tcups\n';
	}
	if($("#creamlatte").val()>0){
		bodyStr += 'Cream\tLatte:\t'+$("#creamlatte").val()+'\tcups\n';
	}
		if($("#cappuccino").val()>0){
		bodyStr += 'Cappuccino:\t'+$("#cappuccino").val()+'\tcups\n';
	}
		if($("#espresso").val()>0){
		bodyStr += 'Espresso:\t'+$("#espresso").val()+'\tcups\n';
	}
		if($("#bacon").val()>0){
		bodyStr += 'Bacon:\t'+$("#bacon").val()+'\tpieces\n';
	}	if($("#chicksalad").val()>0){
		bodyStr += 'Chick\tSalad:\t'+$("#chicksalad").val()+'\tpieces\n';
	}
		if($("#applepie").val()>0){
		bodyStr += 'Apple\tPie:\t'+' '+$("#applepie").val()+'\tpieces\n';
	}
		if($("#blueberry").val()>0){
		bodyStr += 'Blueberry\tPie:\t'+$("#blueberry").val()+'\tpieces\n';
	}
	if($("#fruitsalad").val()>0){
		bodyStr += 'Fruit\tSalad:\t'+$("#fruitsalad").val()+'\tplates\n';
	}
	if($("#chefsalad").val()>0){
		bodyStr += 'Chef\tSalad:\t'+$("#chefsalad").val()+'\tplates\n';
	}
	if($("#coleslaw").val()>0){
		bodyStr += 'Coleslaw:\t'+$("#coleslaw").val()+'\tplates\n';
	}
	if($("#golbaengi").val()>0){
		bodyStr += 'Golbaengi\tmuchim:\t'+$("#golbaengi").val()+'\tplates\n';
	}
	
	$("#body").val(bodyStr);
	$("#order-form").submit();
}