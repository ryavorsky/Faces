//-----------------------------------------------------------------------------
//  Show all to select leaders
//-----------------------------------------------------------------------------
function select_leaders(id){
    y = [];
    for (i=0; i<x.length ; i++){
        if (i != id){ y.push(x[i])}
    }

    str = '<img src = "pic/' + x[id][1] + '" width="120"> <b> ' +  x[id][0] + ' выбирает 5 лидеров: </b>';
    str += '<div id="leaders"></div><br><hr>';

    str += '<div id="faces">';
    str += '<h1 style="text-align:center">Выбери 5 лидеров!</h1>';
    str += '<table border = "0"  cellpadding = "12" align="center"><tr>';
    for (i=0; i<y.length ; i++){

        str += '<td width="100"  align="center" >';
		str += '<div id="block' + i + '" onclick = "chosen_leader(' + id + ',y[' + i + '])">';
        str += '<p> ' + y[i][0] + '\n';
        str += '<p> <img src = "pic/' + y[i][1] + '" width="90">';
        str += '</div></td>';

        if (i%5 == 4){
            str+= '</tr><tr>';
        }
    }
    str += '</tr></table></div>';
    page.innerHTML = str;
    page.style.background="red";
}

var l = 0;
res_l = '';

//-----------------------------------------------------------------------------
//  Display selected leaders in the page header
//-----------------------------------------------------------------------------
function chosen_leader(id, data){

    if (l < 5){
        str = ' <img src = "pic/' + data[1] + '" width="90">';
        leaders.innerHTML += str;
        l++;
        res_l += '<br>l;' + x[id][1] + ';' + data[1] + '\n';
    };

    if (l == 5){

        str = '<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="font-size:larger" value="  Да, это лидеры!  "';
		str += 'onclick="select_experts(' + id + ')" />';
        str += ' или  <input type="button" value="   Переиграть этот шаг  "';
		str += ' onclick="l=0;res_l = \'\';select_leaders(' + id + ')"/>';

        leaders.innerHTML += str;
		faces.innerHTML = '';
        l++;
    }

    window.scrollTo(0,0);
}
