
//article dao 객체
exports.ArticleDao = function ArticleDao() {
	
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
		
		var isSuccess;
		
		try{
			var requestString = '/update';
			requestString = requestString + '?num=' + article.num;
			requestString = requestString + '&title=' + article.title;
			requestString = requestString + '&content=' + article.content;
			requestString = requestString + '&writer=' + article.writer;
			var request = new XMLHttpRequest();
			request.open('GET', requestString, false);
			request.send();

			var xml = request.responseXML;

			var messages = xml.getElementsByTagName('message');
			var isSuccessString = messages[0].childNodes[0].nodeValue;
			var isSuccess = eval('(' + isSuccessString + ')');

		}catch(e){
			console.log('ArticleDao 객체 : updateDao 메서드에서 예외 발생');
			console.log(e.message);
			isSuccess = false;
		}
		
		return isSuccess;
		
	};
	
//	글삭제 dao 메서드
	this.deleteDao = function(num) {
		
		var isSuccess;
			
		try{
			var requestString = '/delete?num=' + num
			var request = new XMLHttpRequest();
			request.open('GET', requestString, false);
			request.send();
			
			var xml = request.respnseXML;
			var messageValue = xml.getElementsByTagName('message')[0].childNodes[0].nodeValue;
			isSuccess = eval('(' +messageValue+')');
			
		}catch(e){
			console.log('ArticleDao 객체 : deleteDao 메서드에서 예외 발생');
			console.log(e.message);
			isSuccess = false;
		}
		
		return isSuccess;
		
	};
		
};