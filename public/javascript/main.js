$().ready(function(){
    initializing();
});

function initializing()
{
    var i=0;
	var count=0;
	var table=$("#grid");
	
	for(i=0;i<20;i++)
	{
		table.append("<tr id='row"+ i +"'></tr>");
	}
	
	i=0;
	for(i=0;i<20;i++)
	{
		for(j=0;j<20;j++)
		{
			$("#row"+ i).last().append("<td id='c"+ count +"'></td>");
			count++;
		}
	}
	
	loadAlphanumerics();
	loadFunctions();
}

function loadAlphanumerics(){
	
	var alphanumerics="0123456789abcdefghijklmnopqrstuvwxyz";
	
	var i=0;
	for(i=0;i<400;i++)
	{
		$("#c" + i).html(alphanumerics.charAt(getRandomNumber(alphanumerics.length)));
	}
	
}


function getRandomNumber(alphanumericsLength){ 
	var randomAN;
	
    randomAN = Math.floor(Math.random() * (alphanumericsLength));    
	
    return randomAN;
}

function loadFunctions(){
	
	$("td").on("click", function(){
		if($(this).css("background-color")=="rgb(255, 255, 255)")
		{
			$(this).css("background-color","#FA5858");
		}
		else
		{
			$(this).css("background-color","#FFFFFF");
		}
		
	});


	$("#check").on("click", function(){
		
		
		
	});
	
}

