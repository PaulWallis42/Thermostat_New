var Thermostat = function(){
  this.defaultTemp = 20;
  this.temperature = this.defaultTemp;
  this.powersaving = true;
  this.minimumTemp = 10;
  this.maxTempPowerSaveOn = 25;
  this.maxTempPowerSaveOff = 32;
};

Thermostat.prototype.currentTemp = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function () {
  if (this.powersaving && this.temperature < this.maxTempPowerSaveOn) {
    this.temperature += 1;
  } else if (!this.powersaving && this.temperature < this.maxTempPowerSaveOff) {
    this.temperature += 1;
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temperature > this.minimumTemp) this.temperature -= 1;
};

Thermostat.prototype.turnPowersavingOn = function () {
  this.powersaving = true;
};

Thermostat.prototype.turnPowersavingOff = function () {
  this.powersaving = false;
};

Thermostat.prototype.resetTemp = function () {
  this.temperature = this.defaultTemp;
};

Thermostat.prototype.powerSavingStatus = function () {
  if (this.powersaving){
    return "On"
  } else if (!this.powersaving){
    return "Off"
  }
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18){
    return "low-usage"
  } else if (this.temperature >= 25){
    return "high-usage"
  } else {
    return "medium-usage"
  }
};
