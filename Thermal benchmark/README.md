![](https://notenoughtech.com/wp-content/uploads/2022/01/2022-01-01-12_58_34-Node-RED-Dashboard.jpg)


A simple thermal benchmark flow that uses stress to put the strain on the CPU

The number of cores is hardcoded (easy to change in stress param function), the duration, graphs and menus can be accessed in dashboard. 

Node: record switch must be enabled to store values in db.



Requires Grafana and InfluxDB

and the following nodes:
dashboard, cpu, influx
