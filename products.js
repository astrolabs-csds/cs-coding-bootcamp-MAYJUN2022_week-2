function cardTemplate(title) {
    return `<div class="col-3">
        <div class="card" 
        style="width: 300px; margin-bottom: 20px;">
            <img src="./shoe1.jpg" width="300" alt="..." />
                <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`;
}

var row = document.getElementsByClassName('row')[0];
var i = 0;
function loadMore() {
    i++;
    row.innerHTML += cardTemplate('Card ' + i);
}