console.log("hello")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '46add6928cmsh9b48884cf92b598p1f8ea3jsn381924218e4e',
		'X-RapidAPI-Host': 'ajith-messages.p.rapidapi.com'
	}
};

fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=Love', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category.innerHTML = response.Category
	Message.innerHTML = response.Message;
	})
	.catch(err => console.error(err));

	
fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=friendship', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category1.innerHTML = response.Category
	Message1.innerHTML = response.Message;
	})
	.catch(err => console.error(err));


fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=quotes', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category2.innerHTML = response.Category
	Message2.innerHTML = response.Message;
	})
	.catch(err => console.error(err));


fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=Good night', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category3.innerHTML = response.Category
	Message3.innerHTML = response.Message;
	})
	.catch(err => console.error(err));


fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=Good morning', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category4.innerHTML = response.Category
	Message4.innerHTML = response.Message;
	})
	.catch(err => console.error(err));


fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=Birthday', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category5.innerHTML = response.Category
	Message5.innerHTML = response.Message;
	})
	.catch(err => console.error(err));

fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=Sad', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category6.innerHTML = response.Category
	Message6.innerHTML = response.Message;
	})
	.catch(err => console.error(err));

fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=Sweet', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category7.innerHTML = response.Category
	Message7.innerHTML = response.Message;
	})
	.catch(err => console.error(err));

	fetch('https://ajith-messages.p.rapidapi.com/getMsgs?category=Random', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	Category8.innerHTML = response.Category
	Message8.innerHTML = response.Message;
	})
	.catch(err => console.error(err));