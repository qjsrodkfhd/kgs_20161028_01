//article domain 객체
exports.Article = function (t, c, w) {

	this.num = 0;
	this.title = t; 
	this.content = c;
	this.writer = w;
	this.readCount = 0;
	
};