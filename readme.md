# minesnf - cooperative non-flagging minesweeper (with a twist)

[![Google Play](./gplay.png)](https://play.google.com/store/apps/details?id=com.minesnf.openui5)
[![App Store](./appstr.png)](https://itunes.apple.com/app/id1448244535)
[![Youtube Channel](./ytb.png)](https://www.youtube.com/channel/UCEvqfPKGtfqfyeMCnw7B_zA)
[![Discord Channel](./dscrd.png)](https://discord.gg/uWnVeZE)

## what is this all about?
This stuff is a love letter to the original minesweeper game some of us used to play long time ago (and still continues to play) and some others are yet to discover

But this is also my manifest against pay-2-win games that treat players with a drug dealer's attitude. And by that I mean this stuff is not going to provide you with some little fun for free and demand insane amount of money to continue getting fun later. It is going to be free as beer and provide player with game mechanics that would challenge and reward him for being skillful.

Basically, *non-flagging* means you can not put flags to mark possible mines and instead can just left click/tap to open cells with no mines (if you are lucky) and  *cooperative* obviously means it is somehow can be played along with somebody else )

#### ***Current release: 1.2***

#### Classic flavour
Just non-flagging game with an option to play the same board with somebody in a real time
- solo, coop, versus modes for online mode
    -  solo/rank - had impact in old version to rank players, now does pretty much nothing 
    -  cooperative - just open the board together
    -  versus - open the board and win if you scored more points opening cells
- fastest possible experience with offline solo mode

#### RPG flavour (what a twist)
Introduces roguelike mechanics: mine -> fight -> craft -> repeat

Descend the floors by solving the boards and fighting the bosses. Claim the loot (digits from boards) by ascending back to use it in crafting.

- solo or cooperative experience
- endless mine floors to descend and gain loot upon ascending
- increasing difficulty of mobs on floors
- fight or flee or steal battle mechanics
- four crafting recipes to uncover from wise bosses
- common, rare, and epic gems to become stronger and change the battle outcome in your favour


Both Classic and RPG flavours are supported in online and offline mode.
But for those who can play sub100 ping can severely affect playability.

For a ios/android app there is also a full offline mode supported, which means you can play while commutting through the underground or other places where network is unreachable.

There is our [youtube channel](https://www.youtube.com/channel/UCEvqfPKGtfqfyeMCnw7B_zA) with some videos that some general describe or release-specific

### ok, so what's the plan?

#### Plans for release 1.3 (end of February 2019):
- asynchronous fights with more balanced mechanics
- rare gems and recipes that can be found deeper
- pvp

#### Further plans are to see whether somebody is going to play this stuff, and to maybe consider developing a bigger and nicer looking game out of this.

## cool, how do I play this stuff?

1. You can play directyl by clicking [global.minesnf.com](http://global.minesnf.com/ui5) link or picking the server link from the list of servers

2. Download the stable release from [Google play](https://play.google.com/store/apps/details?id=com.minesnf.openui5) or [App Store](https://itunes.apple.com/app/id1448244535)

3. Or access beta versions via [Google Play Beta](https://play.google.com/apps/testing/com.minesnf.openui5) or [iOS TestFlight](https://testflight.apple.com/join/wORyXZqw) 

### and what if I still want to play multiplayer games with low latency and some friends? ###
You can setup your own server and connect your mobile app to it. Here's a [wiki article](https://github.com/myakinkii/minesNF/wiki/Run-backend-locally) that explains how to run the backend locally or to [setup clean box](https://github.com/myakinkii/minesNF/wiki/Run-own-backend) (some old ubuntu in this example).

### how can I find somebody to play with or just give a feedback?
Join our [discord server](https://discord.gg/uWnVeZE)

### list of available servers
* [eu1.minesnf.com](http://eu1.minesnf.com/ui5) (Amsterdam, NL) -> global
* [tor1.minesnf.com](http://tor1.minesnf.com/ui5) (Toronto, CA)
* [blr1.minesnf.com](http://blr1.minesnf.com/ui5) (Bangalore, IN)
* [ru1.minesnf.com](http://ru1.minesnf.com/ui5) (Moscow, RU)

## how can I support the project?

Current goal is to try to attract the community and see what happens next 

So, for now you can just spread the word if you love this game, or host your local server (if reasonable uptime can be guaranteed) so that it would be added to the list of official servers.

## can I use the code?
Yes, you can. 

The code is available under the MIT license at github.

Check out the github repos for [legacy backend](https://github.com/myakinkii/minesNF) and current [openui5 based prototype](https://github.com/myakinkii/ui5client)

It is worth mentioning though, that the code quality is pretty low for any productive usage.

