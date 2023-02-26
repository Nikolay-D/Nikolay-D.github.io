let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";


let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем

userid.innerText = `	${tg.initDataUnsafe.user.first_name}
		${tg.initDataUnsafe.user.last_name}
		${tg.initDataUnsafe.user.username}
		${tg.initDataUnsafe.user.id }	`;

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	var data = {
            'method': 'sendCommand',
            'command_name': '333'
        };
        var encoded_data = JSON.stringify(data);
	tg.sendData(encoded_data);

});


tg.MainButton.onClick(function(){
    	tg.sendData(JSON.stringify(111));
	tg.answerWebAppQuery(555);
	tg.MainButton.setText("Нажато!");
  })
