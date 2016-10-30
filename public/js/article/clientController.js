var daojs = require('./clientDao.js');
var dao = new daojs.ArticleDao();


//client controller 객체
exports.ArticleController = function ArticleController() {

	
//	글쓰기뷰 controller 메서드
	this.requestWriteView = function() {
		
		document.location = "writeView.html";
		
	};
	
//	글저장 controller 메서드
	this.requestSave = function(article) {
		
		
	document.location = 'selectAllView.html';
		
	};
	
//	글목록 controller 메서드
	this.requestSelectAll = function() {
		
	
	};
	
//	글조회 controller 메서드
	this.requestSelectOne = function(num) {
		
		
		
	};
	
//	글목록뷰 controller 메서드
	this.requestSelectAllView = function() {
		
		document.location = 'selectAllView.html';
		
	};
	
//	글수정 controller 메서드
	this.requestUpdate = function(article) {

		var isSuccess = dao.updateDao(article);
		
		return isSuccess;
		
		document.location = 'selectAllView.html';

	};
	
//	글삭제 controller 메서드
	this.requestDelete = function(num) {
		
		var isSuccess = dao.deleteDao(num);
		
		return isSuccess;
		
		document.location = 'selectAllView.html';
		
	};
	
}

//controller 객체(static)
var Controllers = function() {
		
};

Controllers.articleController = new ArticleController();

Controllers.getArticleController = function() {

	return Controllers.articleController;

};