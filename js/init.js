function inicialize() {

    var init = document.getElementById("init");
    var cont_ambiente = document.createElement("div");
    var id_contambiente = document.createAttribute("id");
    id_contambiente.value = "cont_ambiente";
    cont_ambiente.setAttributeNode(id_contambiente);

    var pc1 = document.createElement("img");
    pc1.src = "img/pc.png";
    var id_pc1 = document.createAttribute("id");
    id_pc1.value = "id_pc1";
    pc1.setAttributeNode(id_pc1);
    cont_ambiente.appendChild(pc1);

    var pc2 = document.createElement("img");
    pc2.src = "img/pc.png";
    var id_pc2 = document.createAttribute("id");
    id_pc2.value = "id_pc2";
    pc2.setAttributeNode(id_pc2);
    cont_ambiente.appendChild(pc2);

    init.appendChild(cont_ambiente);
    init.appendChild(document.createElement("br"));
}



function clickaimagem(imagem) {
    /*try {
        var image_x = document.getElementsByClassName('cl_nova_img1');
          cont_ambiente.removeChild(image_x);
    } catch (error) {
        var image_x = document.getElementsByClassName('cl_nova_img2');
        cont_ambiente.removeChild(image_x);
    }*/

    if (document.getElementById("id_nova_img1") !== null) {
        var image_x = document.getElementById("id_nova_img1");
        cont_ambiente.removeChild(image_x);
    }
    if (document.getElementById("id_nova_img2") !== null) {
        var image_x = document.getElementById("id_nova_img2");
        cont_ambiente.removeChild(image_x);
    }
    var nova_img = document.createElement("img");
    nova_img.src = imagem.src;
    var sourcesatelite = location.href.replace('index.html', 'img/satelite.png');
    var sourcerouter = location.href.replace('index.html', 'img/router.png');

    var divAnime = document.createElement("div");
    var id_Anime = document.createAttribute("id");
    if (nova_img.src == sourcesatelite || nova_img.src == sourcerouter) {
        var id_nova_img = document.createAttribute("id");
        id_nova_img.value = "id_nova_img1";

        id_Anime.value = "id_Anime1";
    }
    else {
        var id_nova_img = document.createAttribute("id");
        id_nova_img.value = "id_nova_img2";

        id_Anime.value = "id_Anime2";
    }
    divAnime.setAttributeNode(id_Anime);
    cont_ambiente.appendChild(divAnime);
    nova_img.setAttributeNode(id_nova_img);
    cont_ambiente.appendChild(nova_img);

}

function StartPacket() {
    var divAnime = document.getElementById("id_Anime1");
    var imgPacote = document.createElement("img");
    imgPacote.src = "img/dado.png";
    var id_imgPacote = document.createAttribute("id");
    id_imgPacote.value = "id_imgPacote";
    imgPacote.setAttributeNode(id_imgPacote);
    divAnime.appendChild(imgPacote);

    var x = 5;
    var anime = setInterval(function () {
        var imgCaralho = document.getElementById("id_imgPacote");
        x++;
        if (x === 65) {
            clearInterval(anime);
        }
        imgCaralho.style.paddingLeft = x + '%';
    }, 100);
    //clearInterval(anime);
    
}
