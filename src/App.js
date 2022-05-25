import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
    <h1 class='text-center text-success my-5'>Videocuestionario</h1>
    <div class='container'>
      <div class='row'>
        <div class='col-md-3' id="modal1">
          <div class="card">
            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fondo_Negro.jpg" alt="Card image cap"/>
            <div class="card-body">
              <div class="card-title">Pregunta 1</div>
              <p class="card-text">¿Cuanto es 1 + 1?</p>
              <a href="#" class="btn btn-primary open-modal" data-open="modal1">Grabar Video</a>
            </div>
          </div>
        </div>

        <div class='col-md-3'>
          <div class="card">
            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fondo_Negro.jpg" alt="Card image cap"/>
            <div class="card-body">
              <div class="card-title">Pregunta 2</div>
              <p class="card-text">¿Cuanto es 2 + 2?</p>
              <a href="#" class="btn btn-primary">Grabar Video</a>
            </div>
          </div>
        </div>

        <div class='col-md-3'>
          <div class="card">
            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fondo_Negro.jpg" alt="Card image cap"/>
            <div class="card-body">
              <div class="card-title">Pregunta 3</div>
              <p class="card-text">¿Cuanto es 3 + 3?</p>
              <a href="#" class="btn btn-primary">Grabar Video</a>
            </div>
          </div>
        </div>

        <div class='col-md-3'>
          <div class="card">
            <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Fondo_Negro.jpg" alt="Card image cap"/>
            <div class="card-body">
              <div class="card-title">Pregunta 4</div>
              <p class="card-text">¿Cuanto es 4 + 4?</p>
              <a href="#" class="btn btn-primary">Grabar Video</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default App;
