const loadFile = function(event) {
    let imgData = document.querySelector("input#imgs");
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    console.log(reader)

    reader.addEventListener("load", function () {
    // convert image file to base64 string
    imgData.setAttribute("data",reader.result);
    console.log(reader)
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
  }
  function add() {
      let bgUrl = document.querySelector("input#imgs").getAttribute("data");
      let cardBg = document.getElementById("container");
      let bgCont = document.querySelector("img.player-img");
      let mainCont = document.getElementById("container");
      let btns = document.querySelector("div.special-buttons");
      let playerName = document.querySelector("h4.name");
      let playerPos = document.querySelector("h3.pos")
      let playerRating = document.querySelector("h3.rating");
      let selectPos = document.getElementById("position").value;
      let inputName = document.getElementById("name").value;
      let inputRating = document.getElementById("rating").value;
      let cardType = document.getElementById("card-type").value;
      bgCont.src = bgUrl;
      console.log(bgCont.src);
      mainCont.style.display = "block";
      btns.style.display = "block";
      playerName.innerText = inputName;
      playerRating.innerText = inputRating;
      playerPos.innerText = selectPos;
      let rating = document.querySelector("h3.rating");
      let ballImg = document.querySelector("img.ball");
      if(rating.innerText >= 85){
        ballImg.src = "../assets/ball4.png";
      } else if(rating.innerText < 85 && rating.innerText >= 80 ) {
        ballImg.src = "../assets/ball3.png";
      } else if (rating.innerText < 80 ) {
        ballImg.src = "../assets/ball2.png";
      }
      console.log(cardType);
        if( cardType == "Iconic-card" ){
          cardBg.style.backgroundImage = 'url(../assets/iconicMomentBG_l.webp)';
          // console.log(cardType);
        }else if (cardType == "Legend-card"){
        cardBg.style.backgroundImage = 'url(../assets/legendsBG_l.webp)';
        // console.log(cardType);
      }else if (cardType == "Base-card"){
        cardBg.style.backgroundImage = 'url(../assets/baseBG_l.webp)';
        // console.log(cardType);
      }
  }

  function btnUp() {
    let playerImg = document.querySelector("img.player-img");
    let topStyle = getComputedStyle(playerImg).top;
    style = window.getComputedStyle(playerImg, null).getPropertyValue('top');
    currentSize = parseFloat(style);
    playerImg.style.top = (currentSize - 1) + 'px';
  }

  function btnDown() {
    let playerImg = document.querySelector("img.player-img");
    let topStyle = getComputedStyle(playerImg).top;
    style = window.getComputedStyle(playerImg, null).getPropertyValue('top');
    currentSize = parseFloat(style);
    playerImg.style.top = (currentSize + 1) + 'px';
  }

  function btnLeft() {
    let playerImg = document.querySelector("img.player-img");
    let topStyle = getComputedStyle(playerImg).right;
    style = window.getComputedStyle(playerImg, null).getPropertyValue('right');
    currentSize = parseFloat(style);
    playerImg.style.right = (currentSize - 1) + 'px';
  }

  function btnRight() {
    let playerImg = document.querySelector("img.player-img");
    let topStyle = getComputedStyle(playerImg).right;
    style = window.getComputedStyle(playerImg, null).getPropertyValue('right');
    currentSize = parseFloat(style);
    playerImg.style.right = (currentSize + 1) + 'px';
  }

  function sizeInc() {
    let playerImg = document.querySelector("img.player-img");
    let topStyle = getComputedStyle(playerImg).height;
    style = window.getComputedStyle(playerImg, null).getPropertyValue('height');
    currentSize = parseFloat(style);
    console.log(currentSize)
      playerImg.style.height = (currentSize + 1) + 'px';
  }

  function sizeDec() {
    let playerImg = document.querySelector("img.player-img");
    let topStyle = getComputedStyle(playerImg).height;
    style = window.getComputedStyle(playerImg, null).getPropertyValue('height');
    currentSize = parseFloat(style);
    console.log(currentSize)
      playerImg.style.height = (currentSize - 1) + 'px';
  }

  function screenshot(){
    html2canvas(document.getElementById('container')).then(function(canvas) {
    document.getElementById("new").appendChild(canvas);
    let a = document.createElement('a');
        a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        let imgname = document.querySelector("h4.name").innerText;
        let hi = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
        a.download = `${hi}/${imgname}.jpg`;
        a.click();
  });
  }