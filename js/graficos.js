
let linguagens = [{
    'linguagem': 'C/C++',
    'dominio': 9
}, {
    'linguagem': 'Java',
    'dominio': 8
}, {
    'linguagem': 'JavaScript',
    'dominio': 8
}, {
    'linguagem': 'Object Pascal',
    'dominio': 9
}, {
    'linguagem': 'Ruby',
    'dominio': 6
}, {
    'linguagem': 'Bash (Shell Script)',
    'dominio': 7
}, {
    'linguagem': 'PHP',
    'dominio': 8
}, {
    'linguagem': 'R',
    'dominio': 5
}, {
    'linguagem': 'MATLAB',
    'dominio': 7
}, {
    'linguagem': 'Verilog',
    'dominio': 7
}, {
    'linguagem': 'Python',
    'dominio': 6
}, {
    'linguagem': 'Assembly',
    'dominio': 4
}];

let idiomas = [{
    'idioma': 'Inglês',
    'escrita': 7,
    'leitura': 8,
    'fala': 6,
    'escuta': 9
}, {
    'idioma': 'Espanhol',
    'escrita': 4,
    'leitura': 6,
    'fala': 4,
    'escuta': 4
}];

AmCharts.ready(() => {
    let langChart = new AmCharts.AmSerialChart();
    langChart.dataProvider = linguagens;
    langChart.creditsPosition = 'top-right';
    langChart.categoryField = 'linguagem';

    let categoryAxis = langChart.categoryAxis;
    categoryAxis.autoGridCount = false;
    categoryAxis.gridCount = linguagens.length;
    categoryAxis.gridPosition = 'start';
    categoryAxis.labelRotation = 45;
    categoryAxis.axisAlpha = 1;
    categoryAxis.gridAlpha = 0;
    categoryAxis.title = 'Linguagens de Programação';

    let valueAxis = new AmCharts.ValueAxis();
    valueAxis.minimum = 0
    valueAxis.maximum = 10;
    valueAxis.axisAlpha = 1;
    valueAxis.gridAlpha = 0;
    valueAxis.title = 'Nível de Domínio';
    langChart.addValueAxis(valueAxis);

    let graph = new AmCharts.AmGraph();
    graph.valueField = 'dominio';
    graph.type = 'column';
    graph.fillAlphas = 0.8;
    graph.balloonText = '[[category]]: <b>[[value]]</b>';
    langChart.addGraph(graph);


    langChart.write('grafico-linguagens');

    let idiomaChart = new AmCharts.AmSerialChart();
    idiomaChart.dataProvider = idiomas;
    idiomaChart.creditsPosition = 'top-right';
    idiomaChart.categoryField = 'idioma';

    let categoryAxis2 = idiomaChart.categoryAxis;
    categoryAxis2.autoGridCount = false;
    categoryAxis2.gridCount = idiomas.length;
    categoryAxis2.gridPosition = 'start';
    categoryAxis2.labelRotation = 45;
    categoryAxis2.axisAlpha = 1;
    categoryAxis2.gridAlpha = 0;
    categoryAxis2.title = 'Idiomas';

    let valueAxis2 = new AmCharts.ValueAxis();
    valueAxis2.minimum = 0
    valueAxis2.maximum = 10;
    valueAxis2.axisAlpha = 1;
    valueAxis2.gridAlpha = 0;
    valueAxis2.title = 'Nível de Domínio';
    idiomaChart.addValueAxis(valueAxis2);

    let graphEscrita = new AmCharts.AmGraph();
    graphEscrita.valueField = 'escrita';
    graphEscrita.title = 'Escrita';
    graphEscrita.type = 'column';
    graphEscrita.fillAlphas = 0.8;
    graphEscrita.balloonText = '[[category]]: <b>[[value]]</b>';
    idiomaChart.addGraph(graphEscrita);

    let graphLeitura = new AmCharts.AmGraph();
    graphLeitura.valueField = 'leitura';
    graphLeitura.title = 'Leitura';
    graphLeitura.type = 'column';
    graphLeitura.fillAlphas = 0.8;
    graphLeitura.balloonText = '[[category]]: <b>[[value]]</b>';
    idiomaChart.addGraph(graphLeitura);

    let graphFala = new AmCharts.AmGraph();
    graphFala.valueField = 'fala';
    graphFala.title = 'Fala';
    graphFala.type = 'column';
    graphFala.fillAlphas = 0.8;
    graphFala.balloonText = '[[category]]: <b>[[value]]</b>';
    idiomaChart.addGraph(graphFala);

    let graphEscuta = new AmCharts.AmGraph();
    graphEscuta.valueField = 'escuta';
    graphEscuta.title = 'Escuta';
    graphEscuta.type = 'column';
    graphEscuta.fillAlphas = 0.8;
    graphEscuta.balloonText = '[[category]]: <b>[[value]]</b>';
    idiomaChart.addGraph(graphEscuta);

    let legend = new AmCharts.AmLegend();
    legend.hozitalGap = 10;
    legend.maxColumns = 1;
    legend.position = 'right';
    legend.useGraphSettings = true;
    legend.markerSize = 10;
    legend.marginTop = 20;
    idiomaChart.addLegend(legend);

    idiomaChart.write('grafico-idiomas');
});