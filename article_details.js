var data = [];
var comment = [];
var dataUser = [];
var dataParam = [];

window.onload = async () => {
  showLoading();
  await loadData();
  await loadParam();
  hideLoading();
  await Category(data);
  userClick();

  // document.getElementById("title").innerHTML = dataParam.title;
  // document.getElementById("body").innerHTML = dataParam.body;

  const card = document.getElementById("card");
  card.innerHTML = ` <div class="card border-dark mb-3"> <div class="card-header ">${dataParam.title}</div>
  <div class="card-body text-dark">
  <h5 class="card-title">${dataParam.title}</h5>
  <p class="card-text">${dataParam.body}</p>
  <button type="button" class="badge rounded-pill">
      ${dataUser.name} <span class="badge bg-secondary">4</span>
  </button>
  </div> 
  </div>`;

  console.log("object33 :>> ", dataParam);
};

const showLoading = () => {
  const load = document.getElementById("loading");
  load.classList.add("d-flex");
};

const hideLoading = () => {
  const hide = document.getElementById("loading");
  hide.classList.add("d-none");
};

const loadParam = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${myParam}`
  );
  dataParam = await response.json();
  console.log("dataparam :>> ", dataParam);
};

const loadData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  data = await response.json();
  console.log("data :>> ", data);

  const responseUser = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  dataUser = await responseUser.json();
  console.log(dataUser);

  const responseComment = await fetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  dataComment = await responseComment.json();
  console.log(dataComment);
};

const Category = (data) => {
  const list_ = document.getElementById("list");
  list_.innerHTML = "";

  data.forEach((title) => {
    const listTemplate = `<button href="${title.id}" onclick="userClick(${
      title.id
    })" id="articleTitle" type="button" class="list-group-item list-group-item-action">
        ${title.title.substring(0, 25)}
      </button>`;

    list_.innerHTML += listTemplate;
  });
};

const userClick = (id) => {
  const articleFind = document.getElementById("card");
  articleFind.innerHTML = "";

  const dataItem = data.filter((x) => x.id == id);
  console.log(dataItem);
  dataItem.forEach((item) => {
    const articleTemplate = `<div class="card border-dark mb-3"> <div class="card-header ">${item.title}</div>
                 <div class="card-body text-dark">
                 <h5 class="card-title">${item.title}</h5>
                 <p class="card-text">${item.body}</p>
                 <button type="button" class="badge rounded-pill">
                     ${dataUser.name} <span class="badge bg-secondary">4</span>
                 </button>
                 </div> 
                 </div>`;
    articleFind.innerHTML = articleTemplate;
  });
};

const search = (event) => {
  let searchText = event.target.value;
  showLoading();
  const filteredData = data.filter((x) =>
    new RegExp(searchText, "i").test(x.title)
  );
  hideLoading();
  Category(filteredData);
};

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("id");

// document.getElementById("demo").innerHTML = myParam;
console.log("id", myParam);
