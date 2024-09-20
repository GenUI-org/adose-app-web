## Epic: User Engagement

**As a** user,  
**I want** to log in using Apple, Google, or anonymously,  
**so that** I can access the app with my preferred method.
#### Acceptance Criteria:

1. **Apple ID Login:**
    
    - User is presented with an option to log in using their Apple ID.
    - Upon selecting Apple ID, the user is redirected to the Apple authentication page.
    - After successful authentication, the user is redirected back to the app, logged in with their Apple account.
      
2. **Google Account Login:**
    
    - User is presented with an option to log in using their Google account.
    - Upon selecting Google, the user is redirected to the Google authentication page.
    - After successful authentication, the user is redirected back to the app, logged in with their Google account.
      
3. **Anonymous Login:**
    
    - User is presented with an option to log in anonymously.
    - Upon selecting anonymous login, the user is granted access to the app without providing personal details.
    - Anonymous users have access to limited features and data storage.
      
4. **Identify Anonymous Users:**
    
    - Anonymous users are prompted with an option to create an account at a later time.
    - A screen is displayed asking the user to enter their email and password to create a user account.
    - Upon successful account creation, the user's data from the anonymous session is linked to their new account.
      
5. **General Requirements:**
    
    - All login options are presented clearly on the login screen.
    - The transition between login options is seamless.
    - User data is securely handled and stored according to privacy standards.

#### Additional Notes:

- Ensure accessibility standards are met for all login options.
- Provide clear instructions and feedback for each step of the login process.
- Implement error handling for failed login attempts and display appropriate messages.
-----------
