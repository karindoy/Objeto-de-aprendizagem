    var sourcesatelite = location.href.replace('index.html', 'img/satelite.png');
    var sourcerouter = location.href.replace('index.html', 'img/router.png');
    var sourcerj = location.href.replace('index.html', 'img/rj.jpg');
    var sourcecoaxial = location.href.replace('index.html', 'img/coaxial.png');
    var sourceoptica = location.href.replace('index.html', 'img/optica.png');

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
        if (nova_img.src == sourcerouter){
            id_nova_img.value = "id_newrouter";
        }
        if (nova_img.src == sourcerj){
            id_nova_img.value = "id_newrj";
        }
        if (nova_img.src == sourcecoaxial){
            id_nova_img.value = "id_newcoaxial";
        }
        if (nova_img.src == sourceoptica){
            id_nova_img.value = "id_newoptica";
        }

        nova_img.setAttributeNode(id_nova_img);
        cont_ambiente.appendChild(nova_img);

    }

    function StartPacket() {
        var imgPacote = document.createElement("img");
        imgPacote.src = "img/dado.png";
        var id_imgPacote = document.createAttribute("id");
        id_imgPacote.value = "id_imgPacote";
        imgPacote.setAttributeNode(id_imgPacote);
        cont_ambiente.appendChild(imgPacote);

        if (document.getElementById('id_newsatelite') !== null) {

            var x = 0;
            var anime = setInterval(function () {
                x= x+2;

                if (x === 270) {
                    clearInterval(anime);
                    console.log(x);
                }

                document.getElementById("id_imgPacote").style.paddingLeft = (x+x) + 'px';
                document.getElementById("id_imgPacote").style.paddingTop = (350-x) + 'px';
            }, 100);

            if(x=== 270){

                var y=270;
                var anime2 = setInterval(function () {
                    y= y+5;

                    if (y === 500) {
                        clearInterval(anime2);
                    }
                    console.log(y);
                //document.getElementById("id_imgPacote").style.paddingLeft = (y+y) + 'px';
                document.getElementById("id_imgPacote").style.paddingBottom = y + 'px';
            }, 100);
            }
            
            
        }

        if (document.getElementById('id_newrouter') !== null) {
        }

        if (document.getElementById('id_newrj') !== null) {
        document.getElementById("id_imgPacote").style.paddingTop = 330 + 'px';
            var x = 50;
            var anime = setInterval(function () {
                x= x+5;

                if (x === 600) {
                    clearInterval(anime);
                    console.log(x);
                }

                document.getElementById("id_imgPacote").style.paddingLeft = (x+x) + 'px';
            }, 100);   
        }

        if (document.getElementById('id_newcoaxial') !== null) {
        document.getElementById("id_imgPacote").style.paddingTop = 330 + 'px';
            var x = 50;
            var anime = setInterval(function () {
                x= x+10;

                if (x === 600) {
                    clearInterval(anime);
                    console.log(x);
                }

                document.getElementById("id_imgPacote").style.paddingLeft = (x+x) + 'px';
            }, 100);   
        }

        if (document.getElementById('id_newoptica') !== null) {
        document.getElementById("id_imgPacote").style.paddingTop = 330 + 'px';
            var x = 50;
            var anime = setInterval(function () {
                x= x+20;

                if (x > 600) {
                    clearInterval(anime);
                    console.log(x);
                }

                document.getElementById("id_imgPacote").style.paddingLeft = (x+x) + 'px';
            }, 100);   
        }



    }