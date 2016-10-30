var mysql = require('mysql');
var ArticleController = require('./serverController')

//article dao 객체
exports.ArticleDao = function ArticleDao() {
		
//	글저장 dao 메서드
	this.saveDao = function(article, callback) {
	
		var isSuccess;
		try{
			
			var sql = 'insert into articles(title, writer, content) values (?,?,?)';
			var values = [article.title, article.writer, article.content];
			
			db.query(sql, values, function(error, result){
				
				if(error){
					isSuccess = { message : false};
				}else{
					isSuccess = { message: true};
				}
				callback(isSuccess);
			});
		}catch(e){
			console.log('serverDao 예외 발생');
			console.log(e.message);
			isSuccess = { message : false };
			return isSuccess;
		}
		
	};	
	
//	글목록 dao 메서드
	this.selectAllDao = function(callback) {
		
		var send_articles;
		
		try{
			var sql ='select * from articles';
			
			db.query(sql,function(error,result){
				if(!error){
					send_article = result;
				}
				callback(send_articles);
			});
		}catch(e){
			console.log('목록보기 예외 발생!');
			console.log(e.message);
			send_articles = undefined;
			return send_articles;
		}
		
	};
	
//	글조회 dao 메서드
	this.selectOneDao = function(num, callback) {
	
	
	};
	
//	글삭제 dao 메서드
	this.deleteDao = function(num, callback) {
		
		var isSuccess;
		
		try{
			var sql = 'delete from articles where num = ?';
			var values = [num];
			
			db.query(sql, values, function(err, result){
				
				console.log('result =' + result);
				
				if(!error){
					isSuccess = {message : true};
				}
				callback(isSuccess);
			});
			
		}catch(e){
			console.log('ArticleDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
			isSuccess = { message : false };
			return isSuccess;
		}
	
	};
	
	//update
	this.updateDao  = function(article, callback){
		
		var isSuccess;
		
		try{
	
			var sql = 'update articles set title = ?, content = ?, writer = ? where num = ? ';
			var values = [article.title, article.content, article.writer, article.num];
			
			db.query(sql, values, function(err, result){
				
				console('result = ' + result);
				
				if(!error){
					isSuccess = {message : true};
				}
				callback(isSuccess);
			});
			
		}catch(e){
			console.log('ArticleDao 객체 : updateDao 메서드에서 예외 발생');
			console.log(e.message);
			isSuccess = { message : false };
			return isSuccess;
		}
		
	};
	
}
