class DonutShop {
    constructor(){

       this.donutsEarned = 0;

       this.autoClickerCount = 0;
 
       this.autoClickerCost = 2;

       this.autoClickerIntervalId = undefined;

       this.donutMultiplier = 0;
 
       this.donutMultiplierCount = 0;

       this.donutMultiplierCost = 10;

       this.donutsPerClick = 1;
    }

auto = () => {
        for (let i=0; i<=this.autoClickerCount; i++) {
            console.log('now adding donuts automatically');
            this.createDonut();
            updateDisplay();
        }
    }

startAuto(){
    console.log(this.autoClickerIntervalId);
    console.log('Entered start auto');
        if(this.autoClickerIntervalId == undefined){
            this.autoClickerIntervalId = setInterval(this.auto, 1000);
        }
    }
    
stopAuto(){
    clearInterval(this.autoClickerIntervalId);
}

createDonut(){
       this.donutsEarned += this.donutsPerClick;
    }

getDonuts(){
        return this.donutsEarned;
    }
getAutoBakerCostText(){
        return this.autoClickerCost;
    }

getMultipliercostText(){
        return this.donutMultiplierCost;
    }
purchaseAutoClicker(){
    console.log('entered purchase auto clicker method');
    console.log('donutsEarned' + this.donutsEarned);
    console.log('autoClickerCost' + this.autoClickerCost);
       if(this.donutsEarned >= this.autoClickerCost){
           /*console.log('autoBaker btn enabled');
           autoBakersBtn.disabled = false;*/
           console.log('Was able to purchase');
           this.donutsEarned -= this.autoClickerCost;   
           this.autoClickerCount += 1;
           this.startAuto();
           this.autoClickerCost += this.autoClickerCost * .1;
        }/*else{
            console.log('autoBaker btn disabled');
            autoBakersBtn.disabled = true;
        }*/
   }

getAutoClickerCount(){
    return this.autoClickerCount;
   }

purchaseMultiplier(){
    console.log(this.donutsEarned + " " +  this.donutMultiplierCost);
    if(this.donutsEarned >= this.donutMultiplierCost){
        /*console.log('donutMultiplierBtn btn enabled');
        donutMultiplierBtn.disabled = false;*/
        this.donutsEarned -= this.donutMultiplierCost;   
        this.donutMultiplierCount += 1;
        this.donutMultiplierCost += this.donutMultiplierCost * .1;
        this.donutsPerClick += Math.pow(1.2, this.donutMultiplierCount);
    }/*else{
        console.log('donutMultiplierBtn btn diisabled');
        donutMultiplierBtn.disabled = true;
    }*/
   }

getMultiplierCount(){
    return this.donutMultiplierCount;
   }

startOver(){
    this.donutsEarned = 0;
    this.autoClickerCount = 0;
    this.autoClickerCost = 2;
    this.donutMultiplier = 0;
    this.donutMultiplierCount = 0;
    this.donutMultiplierCost = 10;
    this.stopAuto();
    }

}