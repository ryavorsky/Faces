// JavaScript source code

// JavaScript source code
function a() {
    str = '<h1 style="text-align:center">Найди себя!</h1>';
    str += '<table border = "0"  cellpadding = "12" align="center"><tr>';
    for (i=0; i<x.length ; i++){

        str += '<td width="100"  align="center" ><div id="block' + i + '" onclick = "authorize(this.id)">'
        str += '<p> ' + x[i][0] + '\n';
        str += '<p> <img src = "pic/' + x[i][1] + '" width="90">';
        str += '</div></td>';

        if (i%5 == 4){
            str+= '</tr><tr>';
        }
    }
    str += '</tr></table>';
    page.innerHTML = str;
    page.style.background="yellow";
}

function authorize(senderId){
    id = senderId.substring(5,7);
    str = '<h1 style="text-align:center">Для подтверждения введите свой телефон или e-mail</h1>';
    str += '<p style="text-align:center; font-size:larger">' + x[id][0];
    str += '<br><img src = "pic/' + x[id][1] + '" width="141">';
    str += '<br>Ваш контактный телефон или e-mail: ';
	str += '<br><input id="code" type="text" value=""/>';
    str += '<br><br><input type="button" style="font-size:larger" value="  Перейти к шагу 3: Выборы лучших!  " ';
	str += 'onclick="select_leaders(' + id + ')" />';
    str += '</p>';

    page.innerHTML = str;
}


