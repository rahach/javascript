self.onmessage = function (e) {
	var start = e.data[0];
	var ende = e.data[1]

	for(var i=start;i<ende;i++ ) {
		flag = true;

		for(var j=2;j<=Math.sqrt(i);j++ ) {
			if(i%j==0){
				flag = false;				
				break;
			}
		}

		if (flag){
				postMessage(i);		
			}
		}		

}
