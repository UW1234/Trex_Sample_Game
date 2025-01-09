T-Rex Game
This JavaScript code defines a simple yet engaging game inspired by the classic "T-Rex Runner" game from Google Chrome. In this game, the player controls a T-Rex character running across a scrolling landscape, jumping over obstacles and collecting points.

The game operates with two states: PLAY and END. Initially, the game is in the PLAY state, allowing the T-Rex to run, jump, and avoid obstacles. The player's score increases over time, with a checkpoint sound played every 100 points as a small reward. The trex sprite changes animation when it collides with obstacles, signaling the end of the game.

The game uses several helper functions like spawnObstacles and spawnClouds to add visual elements dynamically. The obstacles are randomly selected from six images, adding variety to the challenge. The game also incorporates sound effects for actions like jumping and game over, enhancing the player's experience.

Upon losing, the game transitions to the END state, halting movement and displaying "Game Over" and "Restart" buttons. The reset function allows the player to restart the game, resetting the score and animations while clearing the obstacles and clouds.

This code offers a solid foundation for an interactive, endless runner game, with opportunities to add more features like power-ups, different levels, or even customization for the T-Rex character.
