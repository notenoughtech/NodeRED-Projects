flow.set("Voltage", msg.payload.GlobalMeasure.Voltage);
flow.set("TotalLoad", msg.payload.GlobalMeasure.TotalLoad);
flow.set("TotalEnergy", msg.payload.GlobalMeasure.TotalEnergy);
flow.set("PowerFactor", msg.payload.GlobalMeasure.TotalEnergy);
flow.set("Frequency", msg.payload.GlobalMeasure.Frequency);
flow.set("Current", msg.payload.Outputs[0].Current);
flow.set("StartDate", msg.payload.GlobalMeasure.EnergyStart);

return msg;