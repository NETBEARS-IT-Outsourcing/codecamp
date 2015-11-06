<script type='text/javascript'>
$(document).ready(function(){
	$('#submit').click(function){
		var name = $('#email').val();
		var email = 'm.mitrofan1990@gmail.com';
		
		var varData = 'name='+name+'&email='+email;
		console.log(varData);
		
		$.ajax({
			type:"POST",
			url:"sendMail.php",
			data: varData,
			success: function(){
				alert("Thank you for subscribing.");
			}
		})
		return false;
	}
}
</script>