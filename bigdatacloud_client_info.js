;(function(_w,$) {
	var BDCClientInfo=function(endpoint,server) {
		this.endpoint=endpoint ? endpoint : 'client-info';
		this.server=server ? server : 'api.bigdatacloud.net';
	};
	BDCClientInfo.prototype={
		getClientInfo:function(cb) {
			var _this=this;
			if (!cb) return false;
			this.callApi(function(result) {
				cb(result);
			},function(err) {
				console.error(err);
				cb(false);
			});
		},
		callApi:function(cb) {
			var xhr = new XMLHttpRequest()
			xhr.open(
				'GET',
				'https://'+this.server+'/data/'+this.endpoint,
				true
				);
			xhr.onreadystatechange = function() {
				if (this.readyState === XMLHttpRequest.DONE) {
					if (this.status === 200) {
						try {
							cb(JSON.parse(this.responseText))
						} catch (e) {
							cb(false)
						}
					} else {
						try {
							var result=JSON.parse(this.responseText);
							console.error(result,this.status);
							cb(false);
						} catch (e) {
							console.error(this.responseText,this.status);
							cb(false);
						}
					}
				}
			}
			xhr.send();
		}
	}

	_w.BDCClientInfo=BDCClientInfo;
	_w.BDCClientInfoClient= new BDCClientInfo();
	_w.getBDCClientInfo=BDCClientInfoClient.getClientInfo.bind(BDCClientInfoClient);
})(window);