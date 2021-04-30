
![enter image description here](https://notenoughtech.com/wp-content/uploads/2021/04/thumbnail-3.jpg)
Take the advantage of ZigBee and Aqara T1 switches (review) in your own automation setup. Thanks to cc2531 (flash guide), I'm able to recreate functions from Aqara app AND add power metering to no-neutral version of the Aqara T1. This project should work just fine for other relays from Sonoff, Shelly etc (as long as they can use MQTT)

 - [Complete instructions](https://notenoughtech.com/home-automation/how-to-use-aqara-t1-with-zigbee2mqtt/)
 
![](https://notenoughtech.com/wp-content/uploads/2021/04/2021-04-30-17_15_20-Node-RED-Dashboard.jpg)

**Features**:
-    **dashboad**  – control main lights
-   **Power monitoring**  – control bedside lamp
-   **Link Quality**  – when the projector is in use
-   **Grafana & InfluxDB integration** –It's optional, but if you want fancy graphs
-   **Alexa**,  **Google Assistant**  integration

## Requirements

 - node-red-dashboard
 - node-red-contrib-influxdb
 - node-red-alexa-home-skill (Alexa integration)
 - node-red-contrib-smartnora

Relays with ZigBee2MQTT or MQTT support

 - Aqara T1 L&N ([AmazonUK](https://amzn.to/32pMTij), [AmazonUS](https://amzn.to/3tdOovC))
 - Aqara T1 no-neutral ([AmazonUK](https://amzn.to/32pMTij), [AmazonUS](https://amzn.to/3tdOovC))
 - [Shelly 1](https://notenoughtech.com/review/shelly-1-brilliant-software-flawed-hardware/) 
 - [Shelly 1L](https://notenoughtech.com/home-automation/shelly-1l/) 
 - [Sonoff ZBMini](https://notenoughtech.com/review/sonoff-zbmini-is-in-town/) 
 - [Zemismart ZB Switch](https://s.click.aliexpress.com/e/_d8Cx7wT) 

# Settings

 - **Setup Node** - Configure On Start section. Define if relay supports power metering (power.enabled), add load info for switches without the power meter and set the price of the elcricity as global.set("PowerCost", 0) per kWh.
 
 ## More about me:

If you want to get the latest updates to this project you can follow me via your preferred social media:

-   [Facebook](https://www.facebook.com/NotEnoughTECH/)
-   [Twitter](https://twitter.com/NotEnoughTECH)
-   [Instagram](https://www.instagram.com/notenoughtech/)
-   [YouTube](https://www.youtube.com/user/Polepositionpage)

And if you feeling like buying me a coffee or supporting me in a more continuous way:

-   [Paypal](https://www.paypal.me/notenoughtech)
-   [Patreon](https://www.patreon.com/NotEnoughTECH)

I hope you have enjoyed the project!

 