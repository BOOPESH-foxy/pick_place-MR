
"use strict";

let SetEndpointFrame = require('./SetEndpointFrame.js')
let TimeToDestination = require('./TimeToDestination.js')
let SetPTPJointSpeedLimits = require('./SetPTPJointSpeedLimits.js')
let SetSmartServoLinSpeedLimits = require('./SetSmartServoLinSpeedLimits.js')
let SetSpeedOverride = require('./SetSpeedOverride.js')
let SetPTPCartesianSpeedLimits = require('./SetPTPCartesianSpeedLimits.js')
let ConfigureControlMode = require('./ConfigureControlMode.js')
let SetSmartServoJointSpeedLimits = require('./SetSmartServoJointSpeedLimits.js')
let SetWorkpiece = require('./SetWorkpiece.js')

module.exports = {
  SetEndpointFrame: SetEndpointFrame,
  TimeToDestination: TimeToDestination,
  SetPTPJointSpeedLimits: SetPTPJointSpeedLimits,
  SetSmartServoLinSpeedLimits: SetSmartServoLinSpeedLimits,
  SetSpeedOverride: SetSpeedOverride,
  SetPTPCartesianSpeedLimits: SetPTPCartesianSpeedLimits,
  ConfigureControlMode: ConfigureControlMode,
  SetSmartServoJointSpeedLimits: SetSmartServoJointSpeedLimits,
  SetWorkpiece: SetWorkpiece,
};
