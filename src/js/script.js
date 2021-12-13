    let shop = new DonutShop();

    const donutCountBtn = document.getElementById('donutCountBtn');
    
    const autoBakersBtn = document.getElementById('autoBakersBtn');

    const aboutGameBtn = document.getElementById("aboutGameBtn");

    const aboutMeBtn = document.getElementById("aboutMeBtn");

    const inspirationBtn = document.getElementById("inspirationBtn");

    const disableAutoBakersBtn = document.getElementById('autoBakersBtn');

    const donutMultiplierBtn = document.getElementById('donutMultiplierBtn');

    const startOverBtn = document.getElementById('startOverBtn');

    const autoBakerCostText = document.getElementById('autoBakerCostText');

    const multiplierCostText = document.getElementById('multiplierCostText');
   
    const donutCountText = document.getElementById('donutInputText');

    const multiplierText = document.getElementById('multiplierText');

    const autoBakersText =document.getElementById('autoBakersText');

    const aboutGameModal = document.getElementById("aboutGameModal");

    const aboutMeModal = document.getElementById("aboutMeModal");

    const inspirationModal = document.getElementById("inspirationModal");

    const closeSpan1 = document.getElementsByClassName("close")[0];

    const closeSpan2 = document.getElementsByClassName("close")[1];

    const closeSpan3 = document.getElementsByClassName("close")[2];

   donutCountBtn.addEventListener('click', function(){
    shop.createDonut();
    updateDisplay();
   });

   autoBakersBtn.addEventListener('click', function(){
     console.log('purchased auto clicker');
    shop.purchaseAutoClicker();
    updateDisplay();
   });
   donutMultiplierBtn.addEventListener('click', function(){
       console.log("purchase multi button clicked");
    shop.purchaseMultiplier();
    updateDisplay();
   });

   startOverBtn.addEventListener('click', function(){
    shop.startOver();
    updateDisplay();
   });

   aboutGameBtn.onclick = function() {
    aboutGameModal.style.display = "block";
  }
  
  aboutMeBtn.onclick = function() {
    aboutMeModal.style.display = "block";
  }

  inspirationBtn.onclick = function() {
    inspirationModal.style.display = "block";
  }

  closeSpan1.onclick = function() {
    aboutGameModal.style.display = "none";
  }
  
  closeSpan2.onclick = function() {
    aboutMeModal.style.display = "none";
  }

  closeSpan3.onclick = function() {
    inspirationModal.style.display = "none";
  }

    window.onclick = function(event) {
    if (event.target == aboutGameModal) {
        aboutGameModal.style.display = "none";
    }
    if (event.target == aboutMeModal) {
        aboutMeModal.style.display = "none";
    }
    if (event.target == inspirationModal) {
        inspirationModal.style.display = "none";
      }
  }

  function enableDisableAutoBakerBtns(){
    console.log('enable btn');
    if (shop.getDonuts()>=shop.getAutoBakerCostText()){
       console.log('autoBaker btn enabled');
       autoBakersBtn.disabled = false;
    }else{
      console.log('autoBaker btn disabled');
      autoBakersBtn.disabled = true;
    }
  };

  function enableDisabledonutMultiplierBtns(){
    console.log('enable btn');
    if (shop.getDonuts()>=shop.getMultipliercostText()){
       console.log('Multiplier btn enabled');
       donutMultiplierBtn.disabled = false;
    }else{
      console.log('Multiplier btn disabled');
      donutMultiplierBtn.disabled = true;
    }
  };

   function updateDisplay(){
    autoBakersText.value = Math.round(shop.getAutoClickerCount());
    donutCountText.value = Math.round(shop.getDonuts());
    multiplierText.value = Math.round(shop.getMultiplierCount());
    autoBakerCostText.value = Math.round(shop.getAutoBakerCostText());
    multiplierCostText.value = Math.round(shop.getMultipliercostText());
    multiplierText.value = Math.round(shop.getMultiplierCount());
    enableDisableAutoBakerBtns();
    enableDisabledonutMultiplierBtns();
    };


    function ShowHideAboutGameSection() {
        if (aboutGameSection.style.display == "none"){
            aboutGameSection.style.display = "block"; 
        }else{
            aboutGameSection.style.display = "none";
        }
    };

    function ShowHideAboutMeSection() {
        if (aboutMeSection.style.display == "none"){
            aboutMeSection.style.display = "block"; 
        }else{
            aboutMeSection.style.display = "none";
        }
    };

    function ShowHideInspirationSection() {
        if (inspirationSection.style.display == "none"){
            inspirationSection.style.display = "block"; 
        }else{
            inspirationSection.style.display = "none";
        }
    };


