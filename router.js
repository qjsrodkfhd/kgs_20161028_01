//Node 서버 및 라우터
var http = require('http');
var express = require('express');
var mysql = require('mysql');
//다른 파일들과 연결되는 부분
var ArticleControllerjs = require('./serverController');
var articleController = new ArticleControllerjs.ArticleController();
var Articlejs = require('./serverDomain');

//db 생성시 주의 사항 
//database 생성 이름
var db = mysql.createConnection({
	host : 'localhost',
	port : 3306,
	user : 'root',
	password : '1234',
	database : 'articledb'
});

var app = express();
app.use(express.static('public'));

app.use(app.router);

http.createServer(app).listen(3000, function() {

	console.log('웹서버 실행 중...http://127.0.0.1:3000');

});

//컨트롤러 연결 부분
var ArticleContollerjs = require('./serverController.js');
var articleController = new ArticleContollerjs.ArticleController();

//글쓰기 
app.all('/save', function(req, res) {

	var title = req.param('title');
	var writer = req.param('writer');
	var content = req.param('content');
	
	
	console.log('title = ' +title);
	console.log('writer = ' + writer);
	console.log('content = ' + content);	

	
var article = new Article(title, writer, content);
	
	articleController.requestSave(article, function(isSuccess){
		
		 console.log('응답 데이터');
		    var output = '';
		    output += '<?xml version="1.0" encoding="UTF-8" ?>';  
		    output += '<message>';
		    output += isSuccess.message;
		    output += '</message>';
		    console.log(output);
		    res.type('text/xml'); //<- 반드시 기술해야 함. 
		    res.send(output);    
		
	});
	

});

//글목록
app.all('/selectAll', function(req, res) {

	console.log('/selectAll 요청 받음');
	
	articleController.requestSelectAll(function(send_articles){
	var output ='';
	output +='<?xml version="1.0" encoding ="UTF-8"?>';
	 output += '<articles>';
	    send_articles.forEach(function (article) {
	        output += '<article>';
	        output += '<num>' + article.num + '</num>';
	        output += '<title>' + article.title + '</title>';
	        output += '<writer>' + article.writer + '</writer>';
	        output += '<readcount>' + article.readCount + '</readcount>';
	        output += '</article>';
	
	});
	    output += '</articles>';
		console.log(output);
		res.type('text/xml');    
	    res.send(output);

});

//글조회
app.all('/selectOne', function(req, res) {



});

//글삭제
app.all('/delete', function(req, res) {

	console.log('/delete를 요청한다.');

	var num = parseInt(req.param('num'));

	articleController.requestDelete(num, function(isSuccess){

		//xml
		var output = '';
		output = output + '<?xml version="1.0" encoding="UTF-8" ?>';  
		output = output + '<message>';
		output = output + isSuccess.message;
		output = output + '</message>';
		
		res.type('text/xml');  
		res.send(output);

	});

});

//글 수정
app.all('/update', function(req, res) {

	console.log('/update를 요청받는다.');

	var title = req.param('title');
	var content = req.param('content');
	var writer = req.param('writer');

	var article = new Articlejs.Article(title, content, writer);
	//클라이언트에서 받아온 넘값을 넣는다.
	var num = req.param('num');

	articleController.requestUpdate(article, function(isSuccess){

		//xml
		var output = '';
		output = output + '<?xml version="1.0" encoding="UTF-8" ?>';
		output = output + '<message>';
		output = output + isSuccess.message;
		output = output + '</message>';

		res.type('text/xml');
		res.send(output);

	});

});

//첫 화면
app.all('/', function(req, res) {

	res.redirect('view/article/selectAllView.html');

});