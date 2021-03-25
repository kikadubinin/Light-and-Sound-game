# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Nikita Dubinin**

Time spent: **3-4** hours spent in total

Link to project:  <https://glitch.com/edit/#!/holistic-silent-fish>

## Required Functionality

The following **required** functionality is complete:

* [+] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [+] "Start" button toggles between "Start" and "Stop" when clicked. 
* [+] Game buttons each light up and play a sound when clicked. 
* [+] Computer plays back sequence of clues including sound and visual cue for each button
* [+] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [+] User wins the game after guessing a complete pattern
* [+] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [+] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [+] Buttons use a pitch (frequency) other than the ones in the tutorial
* [+] More than 4 functional game buttons
* [+] Playback speeds up on each turn
* [+] Computer picks a different pattern each time the game is played
* [+] Player only loses after 3 mistakes (instead of on the first mistake)
* [+] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
[winning game](http://g.recordit.co/YsIt2NP1P5.gif)
[loosing game](http://g.recordit.co/NFIsxOYHA4.gif)
 

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I looked online for some help, but the resources were mainly used from the Prework site and w3 schools.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[Starting this project was in itself a challenge. It took effort to finally sit down and to start doing something or else I wouldn't get to it. One issue I ran into early was switching from language to language
I wasn't that fluent in html/js/css but this project made me realize that they aren't that difficult if done correctly. I overcame that challenge by looking at w3 schools and learning the ins and outs through that.
Another challenge I encountered was creating a ticking clock, my code at first kept calling itself so the page would take up too much cpu power and crash on me. I wouldn't be able to stop the game and had to 
open a new window with my code and keep tinkering. I finally found my issue in calling itself, and instead called it once and it ran smoothyl after. Another issue I had was the images. Since I didn't know much, 
I had to look at other webistes to get an understanding of how I could embed an image under the button, but after about 15 min I was able to get one of them working and the other followed suit. One of my personal issues
with this project was procasitnation, I overcame that by doing a bit at a time and forcing myself to do it rather than wait for the worry to kick in.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[If all games are done on the web, how much further can they be developed? Whats the threshold between a url game and an actual game and how does one code an actual game/specific files?
  Why is it so hard to see your mistakes especially ones where I had backgound instead of background? I am interested in making more projects similair to this, for once in a long time I actually enjoyed
  completing and "assignment" and was keen on finishing it and having it run smoothly(wasnt a question I know). How much procesing can a webpage developer limit test? Does everyone work on a bit of code
  like one group does html while the others take on css/js/any aditional ones or is it one project per person, so all is done by the same person? How hard is webdeveloping? Is it based on how you want it
  to look or what others think is best? ]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I had a few more hours, Id most likely add/understand sound. Another option would be making more calls to functions like playTone and clock and time. Making the functions like the logic of the game differnlty/easier to understand,
or make the code more readable for others, especially if this project will be looked at by others. A feature I wanted to add was a popupp that said "goodjob" after every right answer and would add more time,
while clicking the wrong answer would make a alarming noise and decrease the time left by a significant ammount]



## License

    Copyright [Nikita Dubinin]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.