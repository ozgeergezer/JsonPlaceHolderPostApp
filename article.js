var data = [];
window.onload = async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  data = await response.json();
  console.log(data);
  const articles = document.getElementById("accordionExample");
  articles.innerHTML = "";

  data.forEach((item) => {
    const template = `<div class="my-3 accordion-item">
<h2 class="accordion-header" id="headingOne">
  <button
    class="accordion-button"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#collapseOne"
    aria-expanded="true"
    aria-controls="collapseOne"
  >
    ${item?.title}
  </button>
</h2>
<div
  id="collapseOne"
  class="accordion-collapse collapse show"
  aria-labelledby="headingOne"
  data-bs-parent="#accordionExample"
>
  <div class="accordion-body">
    ${item?.body}
  </div>
</div>
</div>`;
    articles.innerHTML += template;
  });
};
