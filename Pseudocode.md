
1: Define required constants
    - 1.1 Define the squares that are Mines

2: Define required variables used to track the state of the game
    - 2.1 Mine Location
    - 2.2 markers around the Mine
    - 2.3 Click function for choosing a square
    - 2.4 Click function for play again (after losing)

3: Elements
    - BoardArray
    - player score

4: Upon loading the app should:
    - Generate a board with Mines square
    - Generate a board with square with Mines
    - generate the proximity numbers
        - Proximity appears from under initial board. this tells you Mines location

    4.2 Render those values to the page

    4.3 Wait fro the user to click a square

5: Handle a player clicking a square
    - When a player clicks on a square, it tells you one of these:
        - You died,
        - clear any square that are not in next to a Mines,
        - give you number of Mines around the initial clicked square

6: Handle replay Button
    - If player clears all the non-mine spaces === win
    - If player clicks on square Mines === lose play again
    - resent moard to original state with different Mine locations
