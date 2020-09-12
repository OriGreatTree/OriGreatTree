function say_hi() { 
			var fname = document.getElementById('user').value;
			var obj = document.getElementById('block_id');
			if(fname == 0){
				var html = 'ВВЕДИТЕ ИМЯ!';
				document.getElementById('result').innerHTML = html;
				return false;
			}
			if(fname!=0){
				var html = 'Добро пожаловать, <b>' + fname + '!';
				document.getElementById('result').innerHTML = html;
                    if (obj.style.display = "none") { 
                        obj.style.display = "block"; 
                    } 
                }
			}
			document.getElementById('next').addEventListener('click', say_hi);