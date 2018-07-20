
let listelments=[];
window.onload=function()
{
	let textvalue=document.getElementById("textvalue");
	let addbtn=document.getElementById("addbtn");
	let delbtn=document.getElementById("delbtn");
	let list=document.getElementById("list");
	addbtn.onclick=function(){
		task(textvalue.value);
		showtodo();
		textvalue.value='';
	}
	function showtodo()
	{
		list.innerHTML='';
		for(i in listelments){
			addlistelments(listelments[i].taskvalue,listelments[i].done,i);
		}
	}
	
	delbtn.onclick=function(){
		listelments=[];
		$(list).empty();
	}
	function addlistelments(todovalue,done,id)
	{
		let newtextvalue=textvalue.value;
		
		let newlist=document.createElement("li");
		newlist.setAttribute('data-id',id);
		newlist.className="list-group-item";
		var input=document.createElement("input");
		input.type="checkbox";
		input.onchange=strike;
		
		
		let newspan=document.createElement("span");
		newspan.innerText=listelments[i].taskvalue;
		newspan.className="col-sm-4 ml-5 mr-5"
		let crossbtn=document.createElement("button");
		crossbtn.className="btn btn-danger col-sm-1 ml-2";

		let crossicon=document.createElement("i");
		crossicon.className="fa fa-times";
		crossbtn.appendChild(crossicon);
		crossbtn.onclick=del;
		let upbtn=document.createElement("button");
		upbtn.className="btn col-sm-1 ml-2";
		let upicon=document.createElement("i");
		upicon.className="fa fa-chevron-up" ;
		upbtn.appendChild(upicon);
		let downbtn=document.createElement("button");
		downbtn.className="btn col-sm-1 ml-2";
		let downicon=document.createElement("i");
		downicon.className="fa fa-chevron-down" ;
		downbtn.appendChild(downicon);
		if(done)
		{
			input.setAttribute('checked',true);
			newspan.style.textDecoration="line-through";
		}

		newlist.appendChild(input);
		newlist.appendChild(newspan);
		newlist.appendChild(crossbtn);
		newlist.appendChild(upbtn);
		newlist.appendChild(downbtn);
		list.appendChild(newlist);
	}
	function task(todovalue){
		let taskstatus={
		taskvalue:todovalue,
		done:false
		}
		listelments.push(taskstatus);
	}
	function del(event){
		let index=event.target.parentElement.getAttribute('data-id');
		listelments.splice(index,1);
		showtodo();
	}
	function strike(event){
		let index=event.target.parentElement.getAttribute('data-id');
		listelments[index].done=event.target.checked;
		showtodo();
	}

}	