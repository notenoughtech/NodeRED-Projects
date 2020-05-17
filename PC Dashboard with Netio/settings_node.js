flow.set("refresh_rate", msg.payload);

//reset
flow.set("TimeDay",0);
flow.set("TimeTotal",0);
flow.set("TotalUseByDay",[0]);
flow.set("TotalUseByHour",[0]);
flow.set("AverageUsePerHour",0);




return msg;