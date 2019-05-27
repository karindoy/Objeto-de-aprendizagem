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
    console.log(imagem.src)
    var imagemstyle = document.createAttribute("style");
    imagemstyle.value = "{top: 10; left:20}";
    imagem.setAttributeNode(imagemstyle);

}