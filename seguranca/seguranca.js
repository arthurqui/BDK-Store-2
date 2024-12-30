//document.addEventListener('', function () { // Descomente essa linha para codar
  document.addEventListener('DOMContentLoaded', function () { //descomente essa linha para colocar em produção



  // Desabilitar clique direito
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Não abrir ferramentas de desenvolvedor com Ctrl + Shift + C
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor.");
      // logout();
    }
  });

  // Não abrir ferramentas de desenvolvedor com Ctrl + Shift + I
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. ");
      //   logout();
    }
  });

  // desabilitar alt
  document.addEventListener('keydown', function (e) {
    if (e.altKey) {
      e.preventDefault();

      //   logout();
    }
  });

  // Interceptar Ctrl + U e limpar a página
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {

      e.preventDefault();
      alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. ");
      // document.body.innerHTML = 'Ferramentas de desenvolvedor desativadas, pressione F5 ou atualize a página'; // Limpar o conteúdo da página
    }
  });




  // Detectar ferramentas de desenvolvedor baseando-se no desempenho
  function detectDevTools() {
    const start = performance.now();
    debugger;
    const end = performance.now();
    return end - start > 100;
  }

  // Verificar se as ferramentas de desenvolvedor estão abertas ao carregar a página
  if (detectDevTools()) {
    alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. Efetuando Logout.");
    logout();
  }

  // Verificar periodicamente se as ferramentas de desenvolvedor foram abertas
  setInterval(function () {
    if (detectDevTools()) {
      alert("Para segurança dos usuários, NÃO é permitido o uso das ferramentas de desenvolvedor. Efetuando Logout.");
      logout();
    }
  }, 1000);


});



export function processText(input, key) {
  let output = "";
  for (let char of input) {
    if (/[a-zA-Z]/.test(char)) {
      const base = char === char.toUpperCase() ? 65 : 97;
      output += String.fromCharCode(((char.charCodeAt(0) - base - key + 26) % 26) + base);
    } else if (/[0-9]/.test(char)) {
      output += String.fromCharCode(((char.charCodeAt(0) - 48 - key + 10) % 10) + 48);
    } else {
      output += char;
    }
  }
  return output;
}

function logout() { window.location.href = "https://lojabdk.vercel.app" }


async function loadConfig() {
  const response = await fetch('data.txt');
  const rawLines = (await response.text()).split('\\n');

  const key = 3;
  const Data = rawLines.map(line => processText(line.trim(), key));

  return {
    apiKey: Data[0],
    authDomain: Data[1],
    databaseURL: "https://bdksell-default-rtdb.firebaseio.com/",
    projectId: Data[1],
    storageBucket: Data[2],
    messagingSenderId: Data[3],
    appId: Data[4],
    measurementId: Data[5]
  };
}

window.onload = checkAndSetBrowserHash;

function checkAndSetBrowserHash() {
  let hashDoBrowser = localStorage.getItem("hashDoBrowser");
  if (!hashDoBrowser) {
    hashDoBrowser = Array.from({ length: 20 }, () => Math.floor(Math.random() * 10)).join('');
    localStorage.setItem("hashDoBrowser", hashDoBrowser);
  }
}

let databaseInstance;
loadConfig().then(config => {
  const app = initializeApp(config);
  databaseInstance = getDatabase(app);
});

