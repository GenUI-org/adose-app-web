### User Story: Magic Button Reward System

Title: Magic Button Reward System

**As a** user,
**I want to** click on a Magic Button to receive A-token (Adrenaline Token - bolt yellow icon),
**So that** I can earn rewards for my engagement with the app.

#### Acceptance Criteria:
1. Magic Button Visibility:
- The Magic Button is visible on the app interface.

2. Reward Mechanism:
- Each click on the Magic Button rewards the user with 1 D-coin.

3. Daily Coin Limit Based on User Level:
- The maximum number of A-token a user can earn per day is determined by their level:
- **Novice**: *1000* A-token per day
- **Apprentice**: *2000* A-token per day
- **Adept**: *3000* A-token per day
- **Expert**: *4000* A-token per day
- **Master**: *5000* A-token per day

4. Button Inactivity:
- The Magic Button becomes inactive once the user reaches their daily D-coin limit.
 
5. Daily Counter Display:
- A counter displays the number of A-token earned today and the daily limit.

6. Counter Reset:
- The counter resets at midnight (user's local time).

7. Inactive Users:
- Users with the status 'Inactive' cannot use the Magic Button.
#### Example Scenario:
- **Given** I am a logged-in Adept level user,
- **When** I click the Magic Button 25 times throughout the day,
- **Then** I should receive 25 A-token,
- **And** when I click it 10 more times,
- **Then** I should receive only 5 more A-token, reaching my daily limit of 30.

This user story ensures that users are rewarded for their engagement while maintaining a fair and balanced reward system based on their level.
