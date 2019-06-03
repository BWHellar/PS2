# Cortium Depletion Calculator
#### This project will calculate the Cortium depletion rates in the game PlanetSide 2 (which I have been playing too much of lately), June/3/2019


#### By _**Brendan Hellar**_

## Description


#### PlanetSide 2 currently does not have a function and visible depletion rate of Cortium levels during base building.  While the game alerts you to when your levels are low it does not tell you what they are currently at.  In addition to this there is no apparent information on the rate of depletion each base module contributes over all. Depletion generally runs at a rate of (2 + .5 * modules) per second (With some larger modules running higher).  Since the depletion rate runs per second this input and timing of this app is generally timed (Unless you've got some crazy fast data input skills).

## Specs
'''
CpS = Cortium Per Second.
Cortium = The resource used for buying and maintaining a base. These resources can be mined by the player
Certs = Skills points that can be used to upgrade various aspects of gameplay. These skill points are gained through play passively.
Modules = Modules are components that can be added to a base like walls, turrets, Cortium silo, etc
'''
| Spec | Input | Output | Reasoning |
| :-------------     | :------------- | :------------- | :----------- |
| **Will allow the user to input starting Cortium** | User input: "10,000" | Output: "You have 10000 Cortium" | Reasoning: The user can input their starting Cortium levels as starting amounts range from 8000-10000 depending on Certs.|
| **Will allow users to add modules** | User input: "AP Turret - Cost: 400" | Output: "You have 9600 Cortium" | Reasoning: Modules have an initial cost amount to place.  When selected it will subtract that amount from the current amount. |
| **Will subtract Cortium levels based upon implemented modules** | User input: "Silo(2CpS), AP Turret(.5CpS), Flail Artillery(1CpS)" | Output: "Cortium loss: 3.5 CpS" | Reasoning: As depletion in game is by the second according to modules the app will constantly decrease the cortium amount based on information provided by user. |




## Setup/Installation Requirements

TBD


## Known Bugs

TBD (I'm sure...)

## Support and contact details

If you have any issues please contact Brendan Hellar at bwhellar@gmail.com

## Technologies Used

Javascript

### License

MIT

Copyright (c) 2019 **Brendan Hellar**
