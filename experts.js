// JavaScript source code to select experts

function select_experts(id){
    y = [];
    for (i=0; i<x.length ; i++){
        if (i != id){ y.push(x[i])}
    }

    str = '<img src = "pic/' + x[id][1] + '" width="120"> <b> ' +  x[id][0] + ' �������� 5 ���������: </b>';
    str += '<div id="leaders"></div><br><hr>';

    str += '<div id="faces">';
    str += '<h1 style="text-align:center">������ 5 ���������!</h1>';
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
var res_e = '';

function chosen_expert(id, data){

    if (e < 5){
        str = ' <img src = "pic/' + data[1] + '" width="90">';
        leaders.innerHTML += str;
        e++;
		d = new Date();
        res_e += '<br>e;' + x[id][1] + ';' + data[1] + ';' + d.getTime() + '\n';
    };

    if (e == 5){

        str = '<br/><br/>&nbsp;&nbsp;&nbsp;&nbsp;';
		str += '<input type="button" style="font-size:larger" value="   ��� ����� ��������!   " ';
		str += ' onclick="select_friends(' + id + ')" />';
        str += ' ���  <input type="button" value="   ����������   " ';
		str += ' onclick="e=0;res_e = \'\';select_experts(' + id + ')"/>';

        leaders.innerHTML += str;
		faces.innerHTML = '';
        e++;
    }

    window.scrollTo(0,0);
}

