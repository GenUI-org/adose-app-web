Here's an explanation of the updates:
1. Added a RewardConfig interface to define the structure of rewards.
2. Updated the LearningResource interface to include reward and hormone properties.
3. Created a UserLevel enum to represent different user levels.
4. Added userLevelMilestones to define XP thresholds for each level.
5. Updated the learningResourcesDemo array to include reward configurations for each resource.

The reward system now includes:

- XP points gained for viewing the resource
- Required user level to access the resource
- An unlock milestone title for achieving the reward

Users can progress through levels by accumulating XP points. Each learning resource is associated with a specific hormone and has a reward configuration that includes XP points, a required user level, and an unlock milestone.


----------

### Prompt ask AI create User Stories

help me create an agile userstory for this task:
- when user Login by Apple, Google, or Anonymous. If user logged by Anonymous there're options to identify them later.
- When user tap a ballon magic button on screen: plus to their account 1 point xp per tap. when they hold button an animation showing and lead them to random challenge
- At Challenge screen: users have 2 button: Accept, Reject
User can see challenge picture, challenge details and reward they got after done. They can see list of other users have been done this challenge. They can see duration time of challenge.
- After tap Accept button: Next screen an seek bar show user time is going on, and minutes counting, stop button.
- after time is done an popup show ask them again time's up, please help define message for me. There's button: Continue
- After press contine show Finish screen.

-------------------

