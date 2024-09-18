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

## Epic: User Engagement

1. User Story: Login Options

   As a user, I want to log in using Apple, Google, or anonymously, so that I can access the app with my preferred method.
   
   Acceptance Criteria:
   - User can log in with Apple ID
   - User can log in with Google account
   - User can log in anonymously
   - Anonymous users have the option to identify themselves later

## Epic: Challenge System

1. User Story: Balloon Magic Button

   As a user, I want to tap a balloon magic button to earn XP and access challenges, so that I can engage with the app and progress.
   
   Acceptance Criteria:
   - User earns 1 XP point per tap on the balloon button
   - Holding the button triggers an animation
   - Animation leads to a random challenge screen

2. User Story: Challenge Screen

   As a user, I want to view challenge details and decide whether to accept or reject it, so that I can choose challenges that interest me.
   
   Acceptance Criteria:
   - Challenge screen displays challenge picture and details
   - User can see potential rewards for completing the challenge
   - User can view a list of other users who have completed the challenge
   - Challenge duration is clearly displayed
   - User can choose to Accept or Reject the challenge

3. User Story: Challenge Timer

   As a user, I want to track my progress during a challenge, so that I know how much time I have left.
   
   Acceptance Criteria:
   - After accepting a challenge, a seek bar shows the time progression
   - Minutes are counted down
   - A stop button is available to end the challenge early

4. User Story: Challenge Completion

   As a user, I want to be notified when the challenge time is up and have the option to continue, so that I can complete the challenge successfully.
   
   Acceptance Criteria:
   - A popup appears when the challenge time is up
   - The popup message reads: "Time's up! Great job on your progress. Would you like to wrap up your challenge?"
   - A "Continue" button is available on the popup

5. User Story: Challenge Finish Screen

   As a user, I want to see a finish screen after completing a challenge, so that I can review my accomplishment.
   
   Acceptance Criteria:
   - After pressing "Continue," a Finish screen is displayed
   - The Finish screen summarizes the challenge and rewards earned
