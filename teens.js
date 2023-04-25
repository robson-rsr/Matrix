function logar(){
    var equipe = document.getElementById('equipe').value.toUpperCase();
    var senha = document.getElementById('senha').value.toUpperCase();

    if(equipe == "PRETA" && senha == "ALPHA"){
        alert("Acesso Permitido");
        location.href = "matrix.html";
    }else
    if(equipe == "PRETA" && senha == "ADONAI"){
    alert("Acesso Permitido");
    location.href = "matrix.html";
    
    }else
        if(equipe == "LARANJA" && senha == "OMEGA"){
        alert("Acesso Permitido");
        location.href = "matrix.html";
    }else
    if(equipe == "LARANJA" && senha == "RAFAH"){
    alert("Acesso Permitido");
    location.href = "matrix.html";

    }else
    if(equipe == "ROXA" && senha == "JIREH"){
    alert("Acesso Permitido");
    location.href = "matrix.html";
   
    }else
    if(equipe == "ROXA" && senha == "BETA"){
    alert("Acesso Permitido");
    location.href = "matrix.html";

    }else
    if(equipe == "VERDE" && senha == "GAMA"){
    alert("Acesso Permitido");
    location.href = "matrix.html";

    }else
    if(equipe == "VERDE" && senha == "ELOHIM"){
    alert("Acesso Permitido");
    location.href = "matrix.html";

    }else
        alert("Acesso negado")
    }
    