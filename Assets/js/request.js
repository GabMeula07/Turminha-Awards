const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 || xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};
const indice = document.querySelector('.Mini-navbar')
indice.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute("href");
  const objConfig = {
    method: "GET",
    url: href,
  };

  try {
    const resultado = await request(objConfig);
    criaTitulo(el);
    carregaResultado(resultado);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(resultado) {
  const container = document.querySelector(".container");
  container.innerHTML = resultado;
}
function criaTitulo(el) {
  const href = el.getAttribute("href");
  const section = document.querySelector(".section");
  let h1 = section.querySelector('.titulo');
 
  if (href === "./fundadores.html") {
   console.log(href)
   h1.innerHTML = 'Fundadores'
  } else if (href == './moradores.html'){
    h1.innerHTML = 'Moradores da Vila'
  } 
}
