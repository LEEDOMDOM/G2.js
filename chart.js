var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var lineData = {
    data: [
      {month: '01', amount: 700.00, shape: 'no'},
      {month: '02', amount: 600.90, shape: 'no'},
      {month: '03', amount: 900.50, shape: 'yes'},
      {month: '04', amount: 1400.50, shape: 'yes'},
      {month: '05', amount: 1000.20, shape: 'fail'},
      {month: '06', amount: 700.50, shape: 'fail'}
    ],
    dash: [
      {month: '01', amount: 700.00, shape: 'no'},
      {month: '02', amount: 600.90, shape: 'yes'},
      {month: '03', amount: 900.50, shape: 'yes'},
      {month: '04', amount: 1400.50, shape: 'yes'},
      {month: '05', amount: 1000.20, shape: 'yes'},
      {month: '06', amount: 700.50, shape: 'fail'}
    ]
  };

  var pieData = [
    {name: '手机', value: 56.33 },
    {name: '网购', value: 24.03},
    {name: '缴费', value: 10.38},
    {name: '线下',  value: 4.77},
    {name: '其他', value: 0.91}
  ];

  res.render('chart', { title: '图表', lineData: JSON.stringify(lineData), pieData: JSON.stringify(pieData) });
});

module.exports = router;
