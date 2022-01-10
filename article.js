var data = [];
var dataUser = [];

window.onload = async function () {
  showLoading();
  await loadData();
  hideLoading();
};

const showLoading = () => {
  const load = document.getElementById("loading");
  load.classList.add("d-flex");
};

const hideLoading = () => {
  const hide = document.getElementById("loading");
  hide.classList.add("d-none");
};

const loadData = async () => {
  const responsePost = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  data = await responsePost.json();
  console.log(data);

  const responseUser = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  dataUser = await responseUser.json();
  console.log(dataUser);

  const articles = document.getElementById("accordionExample");
  articles.innerHTML = "";

  data.forEach((item) => {
    const template = `<div class="my-3 accordion-item">
<h2 class="accordion-header" id="heading_${item.id}">
  <button
    class="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapse_${item.id}"
    aria-expanded="true"
    aria-controls="collapse_${item.id}"
  >
    ${item?.title}
  </button>
</h2>
<div
  id="collapse_${item.id}"
  class="accordion-collapse collapse"
  aria-labelledby="heading_${item.id}"
  data-bs-parent="#accordionExample"
>
  <div class="accordion-body">
    ${item?.body}
    <div class="d-flex justify-content-end"><a type="button" href="/article_details.html?id=${item?.id}" class="btn btn-dark">Details</a></div>
  </div>
</div>
</div>`;
    articles.innerHTML += template;
  });
};
