 les tabs=document,queryselectorALL(",tab=linkInot(.desactive))");
tabs,forEach((tab)=>{
	 tab,addEventlistener("click",() =>{
		 unSelectAll();
		 tab,classlist,add("active");
		 let,ref = tab.getAttribute("data-ref");
		 document
		 .querySelector('.tab-body[data-id="{ref]"]')
		 .classlist.add("active");
		 });
	 });
	 
	 function unSelectAll(){
		 tabs.forEach((tab)=>{
			 tab.classlist.remove("active");
		 });
	let tabbodies = document.querySelectorAll(".tab-body");
      tabbodies.forEach((tab)=>{
     tab.classlist.remove("active");	
	  });
}
document.querySelector(".tab-link.active").click();