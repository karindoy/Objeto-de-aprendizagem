var sourcesatelite = location.href.replace('sim_pacotededados.html', 'img/satelite.png');
var sourcerouter = location.href.replace('sim_pacotededados.html', 'img/router.png');
var sourcerj = location.href.replace('sim_pacotededados.html', 'img/rj.png');
var sourcecoaxial = location.href.replace('sim_pacotededados.html', 'img/coaxial.png');
var sourceoptica = location.href.replace('sim_pacotededados.html', 'img/optica.png');
var anime = setInterval(function () {
    console.log();
}, 1000000);
var anime2 = setInterval(function () {
    console.log();
}, 1000000);
function clickaimagem(imagem) {

    if (document.getElementById("id_newsatelite") !== null) {
        var image_x = document.getElementById("id_newsatelite");
        cont_ambiente.removeChild(image_x);     
    }
    if (document.getElementById("id_newrouter") !== null) {
        var image_x = document.getElementById("id_newrouter");
        cont_ambiente.removeChild(image_x);
    }
    if (document.getElementById("id_newrj") !== null) {
        var image_x = document.getElementById("id_newrj");
        cont_ambiente.removeChild(image_x);
    }
    if (document.getElementById("id_newcoaxial") !== null) {
        var image_x = document.getElementById("id_newcoaxial");
        cont_ambiente.removeChild(image_x);
    }
    if (document.getElementById("id_newoptica") !== null) {
        var image_x = document.getElementById("id_newoptica");
        cont_ambiente.removeChild(image_x);
    }
    

    var nova_img = document.createElement("img");
    nova_img.src = imagem.src;
    var id_nova_img = document.createAttribute("id");

    if (nova_img.src == sourcesatelite) {
        id_nova_img.value = "id_newsatelite";
    }
    if (nova_img.src == sourcerouter) {
        id_nova_img.value = "id_newrouter";
    }
    if (nova_img.src == sourcerj) {
        id_nova_img.value = "id_newrj";
    }
    if (nova_img.src == sourcecoaxial) {
        id_nova_img.value = "id_newcoaxial";
    }
    if (nova_img.src == sourceoptica) {
        id_nova_img.value = "id_newoptica";
    }

    nova_img.setAttributeNode(id_nova_img);
    cont_ambiente.appendChild(nova_img);

}

function redirecionar() {
	  window.location.href="sim_pacotededados.html";
}
function StartPacket() {
    resetaDado();
    clearInterval(anime);
    clearInterval(anime2);
    if (document.getElementById('id_newsatelite') !== null) {

        var x = 5;
        anime = setInterval(function () {
            x = x + 0.2;

            var y = 20;
            var y1 = 3;
            if (x >20) {
             clearInterval(anime);

             anime2 = setInterval(function () {
                y = y + 0.2;
                y1 = y1 + 0.2;
                if (y > 40) {
                    clearInterval(anime2);
                }
                document.getElementById("id_imgPacote").style.paddingLeft = (y + y) + 'vw';
                document.getElementById("id_imgPacote").style.paddingTop = y1 + 'vw';
            }, 100);
         }

         document.getElementById("id_imgPacote").style.paddingLeft = (x + x) + 'vw';
         document.getElementById("id_imgPacote").style.paddingTop = (25 - x) + 'vw';
     }, 100);

    }

    if (document.getElementById('id_newrouter') !== null) {
        var x = 5;
        anime = setInterval(function () {
            x = x + 0.4;

            var y = 20;
            var y1 = 3;
            if (x> 20) {
                clearInterval(anime);

               anime2 = setInterval(function () {
                    y = y + 0.4;
                    y1 = y1 + 0.4;
                    if (y > 40) {
                        clearInterval(anime2);
                    }

                    document.getElementById("id_imgPacote").style.paddingLeft = (y + y) + 'vw';
                    document.getElementById("id_imgPacote").style.paddingTop = y1 + 'vw';
                }, 100);
            }

            document.getElementById("id_imgPacote").style.paddingLeft = (x + x) + 'vw';
            document.getElementById("id_imgPacote").style.paddingTop = (25 - x) + 'vw';
        }, 100);
    }

    if (document.getElementById('id_newrj') !== null) {

        var x = 5;
       anime = setInterval(function () {
            x = x + 0.5;

            if (x > 44) {
                clearInterval(anime);
            }

            document.getElementById("id_imgPacote").style.paddingLeft = (x + x) + 'vw';
        }, 100);
    }

    if (document.getElementById('id_newcoaxial') !== null) {

        var x = 0.5;
        anime = setInterval(function () {
            x = x + 1.0;

            if (x > 44) {
                clearInterval(anime);
            }

            document.getElementById("id_imgPacote").style.paddingLeft = (x + x) + 'vw';
        }, 100);
    }

    if (document.getElementById('id_newoptica') !== null) {
        var x=5;
        anime = setInterval(function () {
            x = x + 2.0;

            if (x > 44) {
                clearInterval(anime);
            }

            document.getElementById("id_imgPacote").style.paddingLeft = (x + x) + 'vw';
        }, 100);
    }
}


function resetaDado(){
    var pacote =  document.getElementById("id_imgPacote");

    if(pacote !== null){
        cont_ambiente.removeChild(pacote);
    }

    
    var imgPacote = document.createElement("img");
    imgPacote.src = "img/dado.png";
    var id_imgPacote = document.createAttribute("id");
    id_imgPacote.value = "id_imgPacote";
    imgPacote.setAttributeNode(id_imgPacote);
    cont_ambiente.appendChild(imgPacote);

    document.getElementById("id_imgPacote").style.paddingLeft = 5 + 'vw';
    document.getElementById("id_imgPacote").style.paddingTop = 24 + 'vw';

}
