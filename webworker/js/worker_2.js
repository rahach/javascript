self.onmessage = function (e) {
	for(var ib=1; ib<1000000; ib++) {
		if(ib%99==0) {
			postMessage(ib);
		} else {
			self.close();
		}
	}
}
