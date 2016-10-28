function Article(t, c, w) {

	this.num = 0;
	this.title = t;
	this.content = c;
	this.writer = w;
	this.readCount = 0;

}

//article dao 객체
function ArticleDao() {
		
//	글저장 dao 메서드
	this.saveDao = function(article, callback) {
	
		
		
	};	
	
//	글목록 dao 메서드
	this.selectAllDao = function(callback) {
		
		
	};
	
//	글조회 dao 메서드
	this.selectOneDao = function(num, callback) {
	
	
	};
	
//	글삭제 dao 메서드
	this.deleteDao = function(num, callback) {
	
	
	};
	
//update
	this.updateDao  = function(article, callback){
		
		
	};
	
}

//article controller 객체
var ArticleController = function() {

	var dao = new ArticleDao();

//	글저장 controller 메서드
	this.requestSave = function(article, callback) {
				

	};
	
//	글목록 controller 메서드
	this.requestSelectAll = function(callback) {
				
			
	};
	
//	글조회 controller 메서드
	this.requestSelectOne = function(num, callback) {
				
	
	};
	
//	글삭제 controller 메서드
	this.requestDelete = function(num, callback) {
				
			
	};
	
// 글 수정 controller
	this.requestUpdate = function(article, callback){
		
		
	};
	
};

//Node 서버 및 라우터
var http = require('http');
var express = require('express');
var mysql = require('mysql');

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

var articleController = new ArticleController();

app.all('/save', function(req, res) {
	
	
   
});

app.all('/selectAll', function(req, res) {
	
	

});

app.all('/selectOne', function(req, res) {
	
	
	
});

app.all('/delete', function(req, res) {
	
	
 
});

app.all('/update', function(req, res) {
	
	
	
});

app.all('/', function(req, res) {
	
	res.redirect('view/article/selectAllView.html');
	
});