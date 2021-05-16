![enter image description here](https://notenoughtech.com/wp-content/uploads/2019/09/maxresdefault-17.jpg)

We have all been there at some point, leaving washing in the washing machine for longer than required. I decided to fix this with NodeRED. These are Washing Machine Notifications. 
There is no need to set up anything as the flow measures the power use of the washing machine and activates when the washing starts and resets when the machine has been swiched off.

 - [Complete instructions for **Google Home, Android & Windows**](https://notenoughtech.com/home-automation/washing-machine-notifications/)
 - [Complete instructions for **Alexa**](https://notenoughtech.com/home-automation/alexa-is-my-washing-ready/): 

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

## You will need **Sonoff POWR2 **buy here:

 - [Aliexpress](http://s.click.aliexpress.com/e/by4YqwXQ)
 - [Banggood](https://www.banggood.com/custlink/mGmvyM4HC2)
 - [Gearbest](https://www.gearbest.com/smart-home-controls/pp_1829203.html?wid=1433363&lkid=20102743)
 - [AmazonUK](https://amzn.to/2TJRPN6)
 - [AmazonUS](https://amzn.to/2u9E0bs)
 - [Itead store](http://shrsl.com/1i9e8)



# Settings
See Settings node in the setup menu - each setting had been explained in the comment. Depending on the MQTT message structure, you will need to adjust it to your needs. 
