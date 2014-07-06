// JavaScript source code
function a() {
    str = '<h1  style="text-align:center">Найди себя!</h1>';
    str += '<table border = "0"  cellpadding = "12" align="center"><tr>';
    for (i=0; i<16 ; i++){

        str += '<td width="100"  align="center" ><div id="block' + i + '">'
        str += '<p> ' + x[i][0] + '\n';
        str += '<p> <img src = "' + x[i][1] + '" width="90">';
        str += '</div></td>';

        if (i%7 == 6){
            str+= '</tr><tr>';
        }
    }
    str += '</tr></table>';
    page.innerHTML = str;
}

function b(sendr,val){
    sender.style.color = val
}

