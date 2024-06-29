'use strict';

function randomize(){
    let chart = '';
    let fontsize = core_storage_data['fontsize'];

    for(let row = 0; row < core_storage_data['rows']; row++){
        chart += '<div style="font-size:' + fontsize + 'px">';

        for(let letter = 0; letter < core_storage_data['letter-count']; letter++){
            chart += core_storage_data['letters'][core_random_integer({
              'max': core_storage_data['letters'].length,
            })] + ' ';
        }

        chart += '</div>';

        fontsize *= core_storage_data['font-decrease'];
    }

    core_elements['chart'].innerHTML = chart;
}

function repo_init(){
    core_repo_init({
      'events': {
        'randomize': {
          'onclick': randomize,
        },
      },
      'info': '<button id=randomize type=button>Randomize</button>',
      'reset': randomize,
      'storage': {
        'font-decrease': .8,
        'fontsize': 150,
        'letter-count': 5,
        'letters': 'WEMƎ',
        'rows': 20,
      },
      'storage-menu': '<table><tr><td><input class=mini id=font-decrease step=any type=number><td>Font Decrease'
        + '<tr><td><input class=mini id=fontsize step=any type=number><td>Font Size'
        + '<tr><td><input class=mini id=letter-count min=1 step=1 type=number><td>Letter Count'
        + '<tr><td><input class=mini id=letters type=text><td>Letters'
        + '<tr><td><input class=mini id=rows min=1 step=1 type=number><td>Rows</table>',
      'title': 'EyeChart.htm',
      'ui-elements': [
        'chart',
      ],
    });

    randomize();
}
