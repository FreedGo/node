/**
 * Created by Freed on 2016/11/4.
 * Email flyxz@126.com
 */
var http = require('http');
	http.createServer(function (request,response) {
		// 发送 HTTP 头部
		// HTTP 状态值: 200 : OK
		// 内容类型: text/plain
		response.writeHead(200,{'contentType':'text/plain'});
		//发送响应数据
		response.end('hello node,again!');
	}).listen(8888);