'use strict';

function randomize(){
    let chart = '';
    let fontsize = core_storage_data['fontsize'];
    const letters = ['W', 'E', 'M', '3'];

    for(let row = 0; row < core_storage_data['rows']; row++){
        chart += '<div style="font-size:' + fontsize + 'px">';

        for(let letter = 0; letter < core_storage_data['letters']; letter++){
            chart += letters[core_random_integer({
              'max': 4,
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
        'letters': 5,
        'rows': 20,
      },
      'storage-menu': '<table><tr><td><input class=mini id=font-decrease step=any type=number><td>Font Decrease'
        + '<tr><td><input class=mini id=fontsize step=any type=number><td>Font Size'
        + '<tr><td><input class=mini id=letters min=1 step=any type=number><td>Letters'
        + '<tr><td><input class=mini id=rows min=1 step=any type=number><td>Rows</table>',
      'title': 'EyeChart.htm',
      'ui-elements': [
        'chart',
      ],
    });

    randomize();
}
