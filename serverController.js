//다른 파일들과 연결하는 부분
var Dao = require('./serverDao.js');
var dao = new Dao.serverDao();
var Articlejs = require('./serverDomain.js');
var article = new Articlejs.Article();

//article controller 객체
exports.ArticleController = function() {

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
				
		var isSuccess = dao.deleteDao(num, callback);
		
		return isSuccess;
			
	};
	
// 글 수정 controller
	this.requestUpdate = function(article, callback){
		
		var isSuccess = dao.updateDao(article, callback);
		
		return isSuccess;
	};
	
};
