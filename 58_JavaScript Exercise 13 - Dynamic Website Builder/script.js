
function getdata(title, img_src, c_name, durations, views, days) {

     let html_data = `<div class="card">
     <div class="images">
          <img src="${img_src}"
          alt="">
          <div class="capsule">${durations}
          </div>
     </div>
     <div class="txt">
          <h1>${title}
          </h1>
          <p>${c_name} . ${views} views . ${days} months ago</p>
     </div>
</div>
</div>`

document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + html_data

}

