![enter image description here](https://notenoughtech.com/wp-content/uploads/2020/01/maxresdefault-4.jpg)
Monitoring more than a couple Zigbee devices for battery levels can be cumbersome. So I made a system that adds new devices automatically,keeps the battery info as a dashboard and sends you an Android notification when battery needs replacing.

 - [Complete instructions](https://notenoughtech.com/home-automation/zigbee-low-battery-warning/)

**Features**:
-   add devices automatically    
-   Dashboard chart    
-   notification for Android    
-   custom low trigger    
-   support for battery types and purchase links    
-   more...

## Requirements

 - node-red-contrib-dashboard-average-bars
 - node-red-dashboard

You will need the following Android Apps:

 - [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=en)
 - [AutoNotification](https://play.google.com/store/apps/details?id=com.joaomgcd.autonotification&hl=en)
 - [AutoTools](https://play.google.com/store/apps/details?id=com.joaomgcd.autotools&hl=en)
 - [AutoRemote](https://play.google.com/store/apps/details?id=com.joaomgcd.autoremote&hl=en)
 - [AutoApps](https://play.google.com/store/apps/details?id=com.joaomgcd.autoappshub&hl=en)
 
 This Setup leans on the following guides:
 [Perfect Autonotifications](https://notenoughtech.com/tasker/tasker-projects/tasker-perfect-autonotifications/), [Credentials in NodeRED](https://notenoughtech.com/home-automation/nodered-home-automation/serving-credentials-with-nodered/),

# Settings

 - **battery** - battery type for your device
 - **name**  - friendly_name from yaml file (or ID)
 - **Notification Device**  - name of AutoRemote device served with credential system
 - **min Value**  - Low battery threshold value for notifications
 
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