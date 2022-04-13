document.getElementById('todo1').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText1");
  
  if (this.checked)
  {
    textTodo.innerHTML = "0000";
  }
  else
  {
    textTodo.innerHTML = "Nguyễn Minh Quân";
  }
}


document.getElementById('todo2').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText2");

  if (this.checked)
  {
    textTodo.innerHTML = "0001";
  }
  else
  {
    textTodo.innerHTML = "Nguyễn Thành Đạt";
  }
}

document.getElementById('todo3').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText3");

  if (this.checked)
  {
    textTodo.innerHTML = "1187";
  }
  else
  {
    textTodo.innerHTML = "Mã Chiến Thắng";
  }
}

document.getElementById('todo4').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText4");

  if (this.checked)
  {
    textTodo.innerHTML = "9957";
  }
  else
  {
    textTodo.innerHTML = "Vũ Xuân Trường";
  }
}

document.getElementById('todo5').onclick = function(e)
{
  var textTodo = document.getElementById("TodoText5");

  if (this.checked)
  {
    textTodo.innerHTML = "8762";
  }
  else
  {
    textTodo.innerHTML = "Triệu Vỹ";
  }
}
