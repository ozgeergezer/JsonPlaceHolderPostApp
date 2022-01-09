const menuDiv_= `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container">
  <a class="navbar-brand" href="/index.html"
    ><img
      width="50"
      height="50"
      src="https://www.housingeurope.eu/site/theme/_assets/img/type-publication.png"
      alt=""
  /></a>
  <button
    class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/article_details.html">Article</a>
      </li>
         
    </ul>
  </div>
</div>
</nav>`

const menuDiv=document.getElementById('menu');
menuDiv.innerHTML=menuDiv_;