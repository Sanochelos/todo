var input = document.querySelector("input[type = 'text']")
var ul = document.querySelector("ul")
var spans = document.getElementsByTagName("span")
var saveBtn = document.querySelector('.save')
var clearBtn = document.querySelector('.clear')

function deleteTodo(){
	for(let span of spans){
		span.addEventListener('click',function(){
			span.parentElement.remove()
		})
	}
}
input.addEventListener('keypress',function(keyPressed){
	if(keyPressed.which === 13){
		var li = document.createElement('li')
		var spanElement = document.createElement('span')
		var buttonElement = document.createElement('button')
		buttonElement.innerHTML='X'


		var newTodo = input.value
		input. value = ""

		buttonElement.classList.add('f')
		spanElement.append(buttonElement)
		ul.appendChild(li).append(spanElement, newTodo)

		deleteTodo()
	}
})
function loadTodo(){
	if (localStorage.getItem('todoList')){
		ul.innerHTML = localStorage.getItem('todoList')
	}
}
loadTodo()

saveBtn.addEventListener('click',function(){
	localStorage.setItem('todoList',ul.innerHTML)

})

clearBtn.addEventListener('click',function(){
	ul.innerHTML=" "
	localStorage.removeItem('todoList',ul.innerHTML)
})

ul.addEventListener('click',function(event){
	if(event.target.tagName ==='LI'){
		event.target.classList.toggle('checked')
	}
})