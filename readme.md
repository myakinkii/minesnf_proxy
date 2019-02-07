# minesnf - cooperative non-flagging minesweeper (with a twist)

## what is this all about?
This stuff is a love letter to the original minesweeper game some of us used to play long time ago (and still continues to play) and some others are yet to discover

But this is also my manifest against pay-2-win games that treat players with a drug dealer's attitude. And by that I mean this stuff is not going to provide you with some little fun for free and demand insane amount of money to continue getting fun later. It is going to be free as beer and provide player with game mechanics that woulc challenge and reward him for being skillful.

Basically, *non-flagging* means you can not put flags to mark possible mines and instead can just left click/tap to open cells with no mines (if you are lucky) and  *cooperative* obviously means it is somehow can be played along with somebody else )

So, thats why it has a backend written some very long time ago with nodejs and websockets (awful code, kids don't do that).

Currently it supports two 'classic' modes
* **cooperative** - just open the board together
* **versus** - open the board and win if you scored more points opening cells

Unfortunately, for those who can play it sub100 (have the sum of small, medium and big board less than 100 seconds) ping can severely affect playability.

### and thats where the twist is
There is a **local mode** which does not use backend at all, thus providing you with an option for having as fast response as possible.

For a ios/android app there is also a full offline mode supported, which means you can play while commutting through the underground or other places where network is unreachable.

But apart from that this local mode actually adds some grind->fight->craft->repeat behaviour of some online rpgs we used to play.

So, basically it is all about the digits which are resources to grind. And as you play, you get more of them. And then you spend it to craft gems. And gems you equip to boost your powers while fighting the bosses which prevent you from completing the board and getting the resources you mined (pun intended)

To be honest, not only local mode provides you with resources to craft stuff, but also classical cooperative modes, so you can definitely give it a try if you feel like you cannot advance solo.

To make this all more clear I hope to record some letsPlays and post it to youtube or somewhere.

### ok, so what's the plan?

Well, currently the plan is to release this cordova and openui5 based app with local rpg mode as a prototype and see what happens next.

In the upcoming months I plan to move that stuff to the backend so that the actual minesweeper+morpg would come true

The idea for the setting is to turn to mud or rogue-like rpgs where the party can descend to the endless mines and do pve (and somehow pvp) stuff.

This way the rpg abstraction can be imagined as clearing out the traps (which are bombs) and obtaining mined resources (digits) some possible additional loot after defeating the floor boss

As for the gem crafting, now there are 4 hardcoded gem recipes and effects they produce: 2s-> speed, 3s-> maxhp, 4s->pdef, and 5s->patk. 
And this is expected to change as well by periodically resetting the equipment crafted and recipes for the new cycle (season)

And of course by adding more effects like magic spells etc, so that game mechanics would cover typical rpg classess/roles like tank/dd/heal

Thus, gems crafted would define your character, and the recipes will be either discovered by trial and error or by descending low enough to get it from the loot.

And after that maybe there will be some 'not so ugly' client created for that

## cool, how do I play this stuff?
1. You can play directyl by clicking [global.minesnf.com](http://global.minesnf.com/ui5) link or picking the server link from the list of servers
2. You can wait until the Google play and Appstore apps are released 
3. Or access open beta versions via the [iOS TestFlight](https://testflight.apple.com/join/wORyXZqw) or [Google Play Beta](https://play.google.com/apps/testing/com.minesnf.openui5)

### and what if I still want to play multiplayer games with low latency and some friends? ###
You can setup your own server and connect your mobile app to it. Here's a [wiki article](https://github.com/myakinkii/minesNF/wiki/Run-backend-locally) that explains how to run the backend locally or to [setup clean box](https://github.com/myakinkii/minesNF/wiki/Run-own-backend) (some old ubuntu in this example).

### how can I find somebody to play with or just give a feedback?
join our [discord server](https://discord.gg/uWnVeZE)

### list of available servers
* [eu1.minesnf.com](http://eu1.minesnf.com/ui5) (Amsterdam) -> global
* [blr1.minesnf.com](http://blr1.minesnf.com/ui5) (Bangalore)
* [ru1.minesnf.com](http://ru1.minesnf.com/ui5) (Moscow)

## how can I support the project?

For now you can just spread the word if you love this game, or host your local server (if reasonable uptime can be guaranteed) so that it would be added to the list of official servers.

As I have some money to spend on developing this, the initial goal is to try to attract the community, because this is what brings a project into live

## can I use the code?
Yes, you can. 

The code is available under the MIT license at github.

Check out the github repos for [legacy backend](https://github.com/myakinkii/minesNF) and current [openui5 based prototype](https://github.com/myakinkii/ui5client)

It is worth mentioning though, that the code quality is pretty low for any productive usage.

