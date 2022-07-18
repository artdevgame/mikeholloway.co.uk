---
title: "iOS Push Notifications with React Native & Twilio"
dateTime: "2022-07-18"
description: "Customise an iOS Push Notification sent by Twilio Conversations"
---

I recently worked on a project that used [Twilio Conversations](https://www.twilio.com/messaging/conversations-api), which sent push notifications via APNs to an iOS device running a React Native app.

After a lot of trial & error, and settling on [React Native Notifications](https://github.com/wix/react-native-notifications) as the library to handle push notifications within React Native, the app was presenting the local notif but required customisation for the title and description.

I learnt a few things here:

1. Some providers (Twilio being one) send a notification with the `mutable-content: 1` flag
2. This flag causes a local notification on the device (it's not a background message) so if you have another library to handle push notifications - you could see multiple, each with different content.
3. To customise the content of a local notification with this flag, you need to create a _Notification Service Extension_ in Swift or Objective-C.

The [official documentation](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications) starts us off with:

> A notification service app extension ships as a separate bundle inside your iOS app. To add this extension to your app:
>
> 1. Select File > New > Target in Xcode.
> 2. Select the Notification Service Extension target from the iOS > Application section.
> 3. Click Next.
> 4. Specify a name (i.e. `NotificationService`) and other configuration details for your app extension.
> 5. Click Finish.

You will have several new files:

- Info.plist
- NotificationService.h
- NotificationService.m

Within the implementation (NotificationService.m), you will write the code that controls the content of the notification, here's an example that works for the Twilio Conversation payload:

```swift
#import "NotificationService.h"

@interface NotificationService ()

@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;

@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];

    // raw payload sent from twilio (use 'po' from the debug console to inspect)
    // request.content.userInfo

    // 'pick' a value from the dictionary
    // request.content.userInfo[@"conversation_title"]

    // request.content.body
    // [{"type":"paragraph","children":[{"text":"hey"}]}]

    // Modify the notification content here...
    self.bestAttemptContent.title = [NSString stringWithFormat:@"%@", request.content.userInfo[@"conversation_title"]];
    self.bestAttemptContent.body = [NSString stringWithFormat:@"You have a new message"];

    self.contentHandler(self.bestAttemptContent);
}

- (void)serviceExtensionTimeWillExpire {
    // Called just before the extension will be terminated by the system.
    // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
    self.contentHandler(self.bestAttemptContent);
}

@end
```

We create a mutable copy of the `request.content` object and modify the title/body properties based on content that comes with the notification payload.

To debug what data you have available in the payload, you can use the `po` command from XCode's debug console.
