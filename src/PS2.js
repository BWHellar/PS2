export let BaseCortium {

  cortiumLevel: 10000,
  setDepletion: function(){
    const depletionRate = setInterval(() => {
      this.cortiumLevel--;
      if (this.Deterioration() == true) {
        clearInterval(depletionRate);
        return "Depleted Cortium";
      }
    }, 500);
  },
  Deterioration(){
    if(this.cortiumLevel > 0)
    {
      return false;
    }
    else
    {
      return true;
    }
  },

  Refill(){
    let that = this;
    return function(cortium)  {
      that.cortiumLevel += amount
      return 'The base has added ${cortium}. The new cortium rate has gone up ${amount}.'
    }
  }
};
