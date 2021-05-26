![enter image description here](https://notenoughtech.com/wp-content/uploads/2021/05/maxresdefault-5.jpg)

Turns out the vibration sensors are just not good enough to detect the vibrations of the modern appliances. Power monitoring is the way, and this profile uses the power usage data to detect operational modes and notify you via Android, Alexa, Google Assistant when the cycle is complete.
 - [Complete Instructions](https://notenoughtech.com/home-automation/smarting-up-comfee-miniplus-dishwasher/)

**Features**:

-   Google Home, Android, Alexa, and Windows 10 Notifications 
-   No timers, nothing to set up    
-   Nagging mode for Google Home    
-   Cost of washing (supports multi tarifs)    

You will need the following nodes:

 - node-red-contrib-castv2 (for google home)
 - node-red-contrib-join-joaoapps (for android)
 - node-red-contrib-alexa-notifyme

and [Join app](https://play.google.com/store/apps/details?id=com.joaomgcd.join&hl=en_GB) for Android notifications 

## Recommended Relays
Please check the power consumption of your appliance before picking a relay to stay within its operational limits.

 - Sonoff POWR2 [Aliexpress](https://s.click.aliexpress.com/e/_AAkss7)|[AmazonUK](https://amzn.to/2TJRPN6)|[AmazonUS](https://amzn.to/2u9E0bs)|[Itead store](http://shrsl.com/1i9e8)|[Banggood](https://www.banggood.com/custlink/mGmvyM4HC2)
 - Sonoff Dual R3 (one relay for 2 devices)[Aliexpress](https://s.click.aliexpress.com/e/_9fbgFZ)|[AmazonUK](https://amzn.to/3flRBVp)|[Itead store]([https://shrsl.com/2kvip](https://shrsl.com/2kvip))
 - Shelly 1PM [AmazonUK](https://amzn.to/3uufKPd)|[AmazonUS](https://amzn.to/3aOdE4S)|[Shelly Store](https://shelly.cloud/products/shelly-1pm-smart-home-automation-relay/)
 - Shelly 2.5 (one relay for 2 devices) [AmazonUK](https://amzn.to/34h2KRg)|[AmazonUS](https://amzn.to/34nAOLo)|[Shelly Store](https://shop.shelly.cloud/shelly-2.5-ce-ul-wifi-smart-home-automation#54)
 


# Settings
See Settings node in the setup menu - each setting had been explained in the comment. Depending on the MQTT message structure, you will need to adjust it to your needs.