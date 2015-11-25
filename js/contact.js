
function doSubmit(){
	var action= "mailto:tsun424@gmail.com";
	var message = "Name:\n"+$("#name").val()+"\n";
	message += "Message:\n"+$("#message").val()+"\n";
	$("#body").val(message);
	$("#contact-form").attr("action",action).submit();
}