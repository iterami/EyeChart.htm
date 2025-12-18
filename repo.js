'use strict';

function randomize(){
    let chart = '';
    let fontsize = core_storage_data.fontsize;
    const min = globalThis.innerWidth / (core_storage_data.count + 1);
    let line = 1;

    for(let row = 0; row < core_storage_data.rows; row++){
        if(fontsize < min){
            chart += '<tr><td class=big>' + line++ + '<td style="font-size:' + fontsize + 'px">';
            for(let letter = 0; letter < core_storage_data.count; letter++){
                chart += core_storage_data.letters[core_random_integer(core_storage_data.letters.length)] + ' ';
            }
        }

        fontsize *= core_storage_data.decrease;
    }

    core_elements.chart.innerHTML = chart;
}

function repo_init(){
    core_repo_init({
      'events': {
        'randomize': {
          'onclick': randomize,
        },
      },
      'info': '<button id=randomize type=button>Randomize</button>',
      'storage': {
        'count': 5,
        'decrease': .8,
        'fontsize': 150,
        'letters': 'WEMƎ',
        'rows': 20,
      },
      'storage_menu': '<table><tr><td><input class=mini id=decrease step=any type=number><td>Font Decrease'
        + '<tr><td><input class=mini id=fontsize step=any type=number><td>Font Size'
        + '<tr><td><input class=mini id=count min=1 step=1 type=number><td>Letter Count'
        + '<tr><td><input class=mini id=letters type=text><td>Letters'
        + '<tr><td><input class=mini id=rows min=1 step=1 type=number><td>Rows</table>',
      'title': 'EyeChart.htm',
      'ui_elements': [
        'chart',
      ],
    });

    randomize();
}
