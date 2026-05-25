'use strict';

function randomize(){
    let chart = '';
    let fontsize = core_storage_data.fontsize;
    const min = globalThis.innerWidth / (core_storage_data.count + 1);
    let line = 1;

    for(let row = 0; row < core_storage_data.rows; row++){
        if(fontsize < min){
            chart += '<tr><td class=big>' + line++ + '<td style="font-size:' + fontsize + 'rem">';
            for(let letter = 0; letter < core_storage_data.count; letter++){
                chart += core_storage_data.letters[core_random_integer(core_storage_data.letters.length)] + ' ';
            }
        }

        fontsize *= core_storage_data.multiplier;
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
      'info': '<button class=medium id=randomize type=button>Randomize</button>',
      'storage': {
        'count': 5,
        'fontsize': 10,
        'letters': 'WEMƎ',
        'multiplier': .8,
        'rows': 20,
      },
      'storage_menu': '<table><tr><td><input class=mini id=fontsize step=any type=number><td>Initial Size (rem)'
        + '<tr><td><input class=mini id=multiplier step=any type=number><td>Size Multiplier'
        + '<tr><td><input class=mini id=letters type=text><td>Letters'
        + '<tr><td><input class=mini id=rows min=1 step=1 type=number><td>Rows of <input class=mini id=count min=1 step=1 type=number></table>',
      'title': 'EyeChart.htm',
      'ui_elements': [
        'chart',
      ],
    });

    randomize();
}
