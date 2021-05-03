
let comm = [];

Comload();

document.getElementById('comment-add').onclick = function()
{
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now() / 1000)
    }

    commentName.value = '';
    commentBody.value = '';

    comm.push(comment);
    saveComments();
    Comshow();
}

function saveComments(){
    localStorage.setItem('comm', JSON.stringify(comm));
}

function Comload()
{
    if(localStorage.getItem('comm')) comm = JSON.parse(localStorage.getItem('comm'));
    Comshow();
}



function Comshow (){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comm.forEach(function(item){
        out += `<p class="text-right small">${timeConverter(item.time)}</p>`;
        out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
        out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
    });
    commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Янв.','Февр','Мар.','Апр.','Май.','Июн','Июл.','Авг.','Сен.','Окт.','Ноя.','Дек.'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }