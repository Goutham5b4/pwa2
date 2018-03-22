
function jsondata(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      callback(xhr.responseText);
    }
  };
  xhr.send();
}
// function calling
jsondata("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  ba(data.basics);
  educa(data.education);
  skill(data.skills);
})
// main div class calling from html
var main=document.querySelector('.main');
// var main=document.getElementById('main');
// left div Creation
var left=document.createElement("div");
left.classList.add("left");
// id for left div
left.setAttribute("id","left");  //"left" is class name of id
// oppending to main div
main.appendChild(left);
function ba(basic){
  // image Creation
  var img=document.createElement('img');
  img.src=basic.photo;
  left.appendChild(img);
  // name Creation
  var name=document.createElement("h1");
  name.textContent=basic.name;
left.appendChild(name);
// email Creation
var mail=document.createElement("p");
mail.textContent=basic.email;
name.appendChild(mail);
// mobile Creation
var mb=document.createElement("h4");
mb.textContent=basic.mobile;
mail.appendChild(mb);

}
// right div Creation
var right=document.createElement("div");
right.classList.add("right");
main.appendChild(right);
// edu div Creation
var edu=document.createElement("h1");
edu.textContent="Education Details:";
edu.appendChild(document.createElement("HR"));
right.appendChild(edu);
// funtion Creation
function educa(education)
{
  for(i in education){
  var e1=document.createElement("div");
    e1.classList.add("edu1");
  e1.textContent=education[i].course;
// list Creation
    var ul=document.createElement("ul");
    ul.classList.add("edu2");
    for(j in education[i].institution){
      var li=document.createElement("li")
      li.textContent=education[i].institution[j];
      edu.appendChild(e1);
      e1.appendChild(ul);
      ul.appendChild(li);
    }
  }
}

function skill(skills)
{
var skill_title=document.createElement("h1");
skill_title.textContent="Skill set:";
// skill_title.appendChild(document.createElement(HR))
right.appendChild(skill_title);
var table=document.createElement("table");
table.classList.add("table");
skill_title.appendChild(table);
var row="";
for (var i=0;i<skills.length;i++)
{
  row+="<tr><td>"+skills[i].name+"</td><td>"+skills[i].values+"</td></tr>";

}
table.innerHTML=row;

}
