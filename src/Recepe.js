import React from "react";

export default function Recepe({ Title, image, det }) {
  return (
    <div className="col-4  mycard ">
      <div class="card ml-5 border w-75 m-3 shadow-lg p-3 mb-5 bg-white rounded ">
        <h4 class="card-title text-dark w">{Title}</h4>
        <img class=" img-thumbnail" src={image} alt="Card image cap" />

        <div class="card-body">
          {det.map((deti) => (
            // console.log(`deti`, deti.text);
            <p class="card-text">{deti.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
