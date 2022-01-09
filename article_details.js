var data=[];
var comment=[];
var dataUser=[];

window.onload=async()=>{
await loadData();
Category(data);
userClick();
}

const loadData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await response.json();
    console.log(data);

    const responseUser = await fetch("https://jsonplaceholder.typicode.com/users");
    dataUser = await responseUser.json();
    console.log(dataUser);

    const responseComment = await fetch("https://jsonplaceholder.typicode.com/comments");
    dataComment = await responseComment.json();
    console.log(dataComment);
}

const Category=(data)=>{
    const list_=document.getElementById("list");
    list_.innerHTML="";

    data.forEach((title)=>{
        const listTemplate =`<button onclick="userClick(${title.id})" id="articleTitle" type="button" class="list-group-item list-group-item-action">
        ${title.title.substring(0,25) }
      </button>`

    list_.innerHTML+=listTemplate;
});
}

const userClick=(id)=>{
    const articleFind=document.getElementById('card');
    articleFind.innerHTML='';

    const dataItem =data.filter(x=>x.id==id);
    console.log(dataItem);
    dataItem.forEach((item)=>{ 
    const articleTemplate=`<div class="card border-dark mb-3"> <div class="card-header ">${item.title}</div>
                 <div class="card-body text-dark">
                 <h5 class="card-title">${item.title}</h5>
                 <p class="card-text">${item.body}</p>
                 <button type="button" class="badge rounded-pill">
                     ${dataUser.name} <span class="badge bg-secondary">4</span>
                 </button>
                 </div> 
                 </div>`;
    articleFind.innerHTML=articleTemplate;
    });
}

const search=(event)=>{
    let searchText =event.target.value;
    //showLoading();
    const filteredData=data.filter(x=>new RegExp(searchText,"i").test(x.title));
    //hideLoading();
   list_(filteredData);
}