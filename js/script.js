// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Botão topo
const topBtn=document.getElementById("topBtn");
window.onscroll=function(){
  if(document.documentElement.scrollTop>300){
    topBtn.style.display="block";
  } else { topBtn.style.display="none"; }
};
topBtn.onclick=function(){
  window.scrollTo({top:0,behavior:'smooth'});
};

// Formulário
const form=document.getElementById("formContato");
const msg=document.getElementById("msgForm");

form.addEventListener("submit",e=>{
  e.preventDefault();
  const nome=document.getElementById("nome").value.trim();
  const email=document.getElementById("email").value.trim();
  const mensagem=document.getElementById("mensagem").value.trim();

  if(!nome||!email||!mensagem){
    msg.textContent="Preencha todos os campos!";
    msg.style.color="red";
  } else {
    msg.textContent="Pedido enviado com sucesso!";
    msg.style.color="green";
    form.reset();
  }
});
