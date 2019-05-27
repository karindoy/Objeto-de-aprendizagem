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
    init.appendChild(cont_ambiente);

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

    var nova_img = document.createElement("img");
    nova_img.src = imagem.src;
    var sourcesatelite = location.href.replace('index.html', 'img/satelite.png');
    var sourcerouter = location.href.replace('index.html', 'img/router.png');
    if (nova_img.src == sourcesatelite || nova_img.src == sourcerouter) {
        console.log("ok" + nova_img.src);
        var cl_nova_img = document.createAttribute("class");
        cl_nova_img.value = "cl_nova_img1";
    }
    else {
        console.log("nao " + nova_img.src);
        var cl_nova_img = document.createAttribute("class");
        cl_nova_img.value = "cl_nova_img2";
    }
    nova_img.setAttributeNode(cl_nova_img);
    cont_ambiente.appendChild(nova_img);
    

}