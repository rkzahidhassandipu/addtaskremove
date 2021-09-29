const input = document.getElementById("input");
const btn = document.querySelector(".addTask > button");

btn.addEventListener("click", addList);

function addList(e){
	const notCompleted = document.querySelector(".notCompleted");
	const Completed = document.querySelector(".Completed");


	const newli = document.createElement("li");
	const checkBtn = document.createElement("button");
	const delBtn =document.createElement("button");

	checkBtn.innerHTML = '<i class="fa fa-check"></i>';
	delBtn.innerHTML = '<i class="fa fa-trash"></i>';

	if (input.value !== " ") {
		newli.innerText = input.value;
		input.value = "";
		notCompleted.appendChild(newli);
		newli.appendChild(checkBtn);
		newli.appendChild(delBtn);
	}

	checkBtn.addEventListener("click", function(){
		const parent = this.parentNode;
		parent.remove();
		Completed.appendChild(parent);
		checkBtn.style.display = "none";
	});

	delBtn.addEventListener("click", function(){
		const parent = this.parentNode;
		parent.remove();
	});

};