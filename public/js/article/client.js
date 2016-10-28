//article domain 객체
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
	this.saveDao = function(article) {
				
		
	};
	
//	글목록 dao 메서드
	this.selectAllDao = function() {
				
		
		
	};
	
//	글조회 dao 메서드
	this.selectOneDao = function(num) {
				
		
		
	};
	
//	글수정 dao 메서드
	this.updateDao = function(article) {
		
		
	};
	
//	글삭제 dao 메서드
	this.deleteDao = function(num) {
		
	
}

//article controller 객체
function ArticleController() {

	var dao = new ArticleDao();	
	
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

		
		document.location = 'selectAllView.html';

		
	};
	
//	글삭제 controller 메서드
	this.requestDelete = function(num) {
		
		
		
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