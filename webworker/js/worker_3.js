self.onmessage = function (e) {
	for(var ib=1; ib<1000000000; ib++) {
		if(ib%25000000==0) {
			postMessage(ib);
		}
	}
}
