// const options = {
//   method: "GET",
//   headers: {
//     Authorization:
//       "Bearer 563492ad6f91700001000001117b8f068eb4434c863699bc2f262446",
//   },
// };

const getImages = (query) => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer 563492ad6f91700001000001117b8f068eb4434c863699bc2f262446",
    },
  })
    //parameter doesn't matter, just a name
    .then((response) => response.json())
    //here is a function
    .then((data) => {
      console.log(data);
      let photos = data.photos;
      renderImages(photos);
    })
    .catch((err) => console.log(err));
};

const renderImages = (photos) => {
  let row = document.getElementById("first-img");
  for (let i = 0; i < photos.length; i++) {
    const image = photos[i];
    row.innerHTML += `<div class="col">
    <div class="card">
    <img src="${image.src.large}" class="card-img-top" alt="..."></div>
    </div>`;
  }
};

window.onload = () => {
  getImages("cat");
};
