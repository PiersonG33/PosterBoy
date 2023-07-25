**API documentation**

The API is found at (PosterBoy instance URL)/api/.

**/api/** is not associated with any API request functions.

**/api/getboard/(board search)/(userid)** supports a GET request 
which returns the set of all boards whose topic names match the 
given string (board search) and the status of the user with id 
(userid) for each of those boards.

**/api/posts/(bid)** supports a GET request which returns the 
set of all posts currently on the board with id (bid), and supports a 
POST request which creates a new post with the given data.

**/api/user_actions/(uid)/(bid)** supports a GET request which
returns the list of actions the user (uid) has taken on the board (bid), and
a POST request which adds a new user action to the board.