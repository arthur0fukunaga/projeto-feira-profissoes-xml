//Instancia uma variável para manipular XML     
xmlhttp = new XMLHttpRequest();
//Ler o arquivo XML
xmlhttp.open("GET", "db/db_conteudo.xml", false)
//Envia o arquivo para ser lido
xmlhttp.send();
//declarar o tipo de resposta para o navegador
xmlDoc = xmlhttp.responseXML;
//Organizando  os dados do xml em um vetor
x = xmlDoc.getElementsByTagName("postagem");


function funcContent() {
    for (n = 0; n < x.length; n++) {
        document.write("<div class='row d-flex justify-content-center' id='post'><div class='col-md-3 text-white'><img src='img/blog-imgs/" + x[n].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'width='400'></div><div class='col-md-6 text'><div id='noticiaTitulo'><a href='./post.html?posicao=" + n + "'>" + "<h1>" + x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</h1></a></div>" + x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0, 250) + "</div></div>");
    }
}

function funcPost() {
    url = new URL(window.location.href);
    //posicao = 0
    parametro = url.searchParams;
    i = parametro.get("posicao");
    document.write("<div id='background-texto'><div id='postagemBloco'>" + "<div id='postTitle'>" + x[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</div><div id='postContent'><div class='text-center pb-3'><img src='img/blog-imgs/"  + x[i].getElementsByTagName("imagem")[0].childNodes[0].nodeValue + "'width='500'></div>" +
        "<p>" + x[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_2")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_3")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_4")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_5")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_6")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_7")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_8")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_9")[0].childNodes[0].nodeValue + "</p>" +
        "<p>" + x[i].getElementsByTagName("corpo_10")[0].childNodes[0].nodeValue + "</p>" +
        "</div></div></div>");
}