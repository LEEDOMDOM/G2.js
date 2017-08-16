var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	var monthes = [
		'2017年07月',
		'2017年06月',
		'2017年05月',
		'2017年04月',
	];

	var data = [
		{
			month: '07/2017',
			total: '1999.90',
			singleData: [
				{type: '工商银行', amount: 2857.42},
				{type: '招商银行', amount: 1845.75},
				{type: '宁波通商银行', amount: 296.88},
				{type: '其他', amount: 296.88}
			]
		}, {
			month: '06/2017',
			total: '2999.90',
			singleData: [
				{type: '工行', amount: 2857.42},
				{type: '招行', amount: 1845.75},
				{type: '宁波银行', amount: 296.88},
				{type: '其他', amount: 296.88}
			]
		}, {
			month: '05/2017',
			total: '3999.90',
			singleData: [
				{type: '工商银行', amount: 2857.42},
				{type: '招行', amount: 1845.75},
				{type: '通商银行', amount: 296.88},
				{type: '其他', amount: 296.88}
			]
		}, {
			month: '04/2017',
			total: '4999.90',
			singleData: [
				{type: '工行', amount: 2857.42},
				{type: '招商银行', amount: 1845.75},
				{type: '宁波通商银行', amount: 296.88},
				{type: '其他', amount: 296.88}
			]
		},
	];

	var totalData = {
		first: '03',
		last: '08',
		data: [
			{month: '03', amount: 3614.09, c: 'spec'},
			{month: '04', amount: 4614.09, c: 'yes'},
			{month: '05', amount: 1921.63, c: 'yes'},
			{month: '06', amount: 1840.80, c: 'yes'},
			{month: '07', amount: 5000.05, c: 'yes'},
			{month: '08', amount: 0.00, c: 'fail'},
		],
		dash: [
			{month: '03', amount: 3614.09, c: 'yes'},
			{month: '04', amount: 4614.09, c: 'yes'},
			{month: '05', amount: null, c: 'yes'},
			{month: '06', amount: null, c: 'yes'},
			{month: '07', amount: 5000.05, c: 'fail'},
			{month: '08', amount: 0.00, c: 'fail'},
		]
	};
  res.render('monthlyBill', {title: '月账单', monthes: monthes, data: JSON.stringify(data), totalData: JSON.stringify(totalData)});
});


module.exports = router;
