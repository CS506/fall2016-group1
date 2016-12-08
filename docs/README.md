# Documents

Requirements and design artifacts for a specific sprint can be found in the 
corresponding sprint directory. This page lists general information about the 
Buckchat Messaging Service.

## Quality Characteristics

See our [metrics page](./metric-definitions/) for a discussion of our selected quality characteristics and metrics.

See our [metric measurement graph](./all-metrics.pdf) to view all metrics over our three sprints.

## High-level Features

These are the high-level features the customers wants in order to differentiate his service from other services:
* Buckets
* Choice of window period
* Choice of anonymity


## High-level Requirements

1. The user shall have the option to create an account with the service.
    1. The user shall specify basic information to register.
1. The user shall have the option to login with an existing account in another social media service.
1. The service shall allow the user to post messages, which are called *drips*.
1. The service shall organize drips into *buckets*.
    1. The buckets shall be displayed to the user after the user logs in.
    1. The user shall associate a drip with one or more buckets when authoring the drip.
1. The user shall have the option of adding a timing window when authoring a drip.
    1. The drip shall be visible to other users only during this window period.
1. The user shall have the option of making a drip anonymous when authoring the drip.
    1. A user shall not be able to see the author of an anonymous drip authored by another user.
1. The user shall be able to view his own drips, regardless of anonymity, on a personal page.
