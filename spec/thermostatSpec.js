describe('Thermostat', function(){

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts off at 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('temperature can be increased', function(){
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('temperature can be decreased', function(){
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it("can\t be deacreased below 10 degrees", function(){
    for ( i = 0; i < 12; i++ ){
      thermostat.decreaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('if powersaving mode is on max temp is 25', function(){
    thermostat.turnPowersavingOn();
    for ( i = 0; i < 6; i++ ) {
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(25);
  });

  it('if powersaving is off max temp is 32', function(){
    thermostat.turnPowersavingOff();
    for ( i = 0; i < 15; i++ ){
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(32)
  });

  it('powersaving mode is on by default', function(){
    expect(thermostat.powersaving).toEqual(true);
  });

  it('can tell you the powersaving status', function(){
    expect(thermostat.powerSavingStatus()).toEqual("On")
  });

  it('can tell you when powersaving is off', function(){
    thermostat.turnPowersavingOff();
    expect(thermostat.powerSavingStatus()).toEqual("Off")
  });

  it('has a reset function that resets temp to 20', function(){
    thermostat.increaseTemp();
    thermostat.resetTemp();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it("can tell you it\'s current energy usage is medium", function(){
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("can tell you it\'s current energy usage is high", function(){
    thermostat.turnPowersavingOff();
    for (i = 0; i < 10; i++){
      thermostat.increaseTemp();
    }
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });

  it("can tell you it\'s current energy usage is low", function(){
    for ( i = 0; i < 5; i++ ){
      thermostat.decreaseTemp();
    }
    expect(thermostat.energyUsage()).toEqual("low-usage");
  })

});
