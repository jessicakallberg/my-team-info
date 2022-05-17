function generateCard(answer) {
  var p = "";
  if (answer.getRole() === "Manager") {
    p = ` <p class="card-text fs-2 text  text-white">Manager
    <i class="fa-solid fa-mug-hot"></i>
  </p>
      `;
  } else if (answer.getRole() === "Engineer") {
    p = `     <<li class="list-group-item">Github:
    <a href="https://github.com/${answer.gitHub}" class="card-link">${answer.gitHub}</a>
</li>
      `;
  } else {
    p = `   <li class="list-group-item">School:${answer.school}
    </li>
      `;
  }
  return `
  <div class="card shadow p-2 mb-5 bg-light pt-0 px-0"     style="width: 16rem;">
  <div class="card-body bg-primary ">
      <h5 class="card-title text-white">${answer.name}</h5>
      <p class="card-text fs-2 text  text-white">${answer.getRole()}
          <i class="fa-solid fa-mug-hot"></i>
      </p>
  </div>
  <ul class="list-group list-group-flush border border-3 mt-4 mx-2 ">
      <li class="list-group-item">ID: ${answer.id}</li>
      <li class="list-group-item" >Email: 
          <a href="mailto:${answer.email}" class="card-link">${answer.email}</a>
      </li>
      <li class="list-group-item">Office Number:${answer.officeNumber}
      </li>
    </ul>
    <div class="card-body">
    </div>
  </div>
</div>
  `;
}

function generateHTML(data) {
  var card = "";
  for (var i = 0; i < data.length; i++) {
    card += generateCard(data[i]);
  }
  return `
      
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <script src="https://kit.fontawesome.com/3ca8e6acc0.js" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
  </head>
  
  <body>
  
      <div class="p-5 mb-4 bg-danger m-2">
          <div class="container-fluid py-1 text-center text-white">
              <h1 class="display-5 fw-bold ">My Team</h1>
          </div>
      </div>
  
      <div class="container">
        <div class="row justify-content-around">
            <div class="col-sm-4 ">
  ${card}
      
  </body>
  </html>
      
      `;
}

module.exports = { generateHTML };
