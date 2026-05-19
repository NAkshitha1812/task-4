function createPost(){

   const title = document.getElementById("title").value;

   const content = document.getElementById("content").value;

   const postDiv = document.getElementById("posts");

   postDiv.innerHTML += `

      <div class="post">

         <h2>${title}</h2>

         <p>${content}</p>

      </div>

   `;
}