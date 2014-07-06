// JavaScript source code to select experts

function select_experts(id){
    y = [];
    for (i=0; i<x.length ; i++){
        if (i != id){ y.push(x[i])}
    }

    str = '<img src = "pic/' + x[id][1] + '" width="120"> <b> ' +  x[id][0] + ' выбирает 5 экспертов: </b>';
    str += '<div id="leaders"></div><br><hr>';

    str += '<div id="faces">';
    str += '<h1 style="text-align:center">Выбери 5 экспертов!</h1>';
    str += '<table border = "0"  cellpadding = "12" align="center"><tr>';
    for (i=0; i<y.length ; i++){

        str += '<td width="100"  align="center" >';
        str += '<div id="block' + i + '" onclick = "chosen_expert(' + id + ',y[' + i + '])">';
        str += '<p> ' + y[i][0] + '\n';
        str += '<p> <img src = "pic/' + y[i][1] + '" width="90">';
        str += '</div></td>';

        if (i%5 == 4){
            str+= '</tr><tr>';
        }
    }
    str += '</tr></table></div>';
    page.innerHTML = str;
    page.style.background="#ccffcc";
}

//-----------------------------------------------------------------------------
//  Display selected experts in the page header
//-----------------------------------------------------------------------------
var e = 0;

function chosen_expert(id, data){

    if (e < 5){
        str = ' <img src = "pic/' + data[1] + '" width="90">';
        leaders.innerHTML += str;
        e++;
        r += 'e:' + x[id][1] + '-' + data[1] + '<br>';
    };

    if (e == 5){

        str = '<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" style="font-size:larger" value="   Это точно эксперты!   "';
		str += 'onclick="select_friends(' + id + ')" />';
        str += ' или  <input type="button" value="   Переиграть   " />';

        leaders.innerHTML += str;
		faces.innerHTML = '';
        e++;
    }

    window.scrollTo(0,0);
}

