var nameList = [];
while (nameList.length < 5) {
	nameList.push(prompt('Введите имя', ""));
}

 var yourname = prompt('Введите Ваше имя',"");

for (var i = 0; i < nameList.length; i++) {
	if (nameList[i] === yourname) {
		alert(yourname + ', вы успешно вошли');
	} else {
		alert('Error');
	}
}