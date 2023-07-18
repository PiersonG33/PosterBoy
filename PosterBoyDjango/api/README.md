**API documentation**

The API is found at (PosterBoy instance URL)/api/.

**/api/** is not associated with any API request functions.

**/api/getboard/(board search)/(userid)** supports a GET request 
which returns the set of all boards whose topic names match the 
given string (board search) and the status of the user with id 
(userid) for each of those boards.

**/api/get_posts/(bid)** supports a GET request which returns the 
set of all posts currently on the board with id (bid).

**/api/add_post/** supports a POST request which creates a new post
with the given data.

**/api/lower_score/(pid)** supports a request which lowers the score
of the post with id = (pid).

**/api/get_user_actions/(uid)/(bid)** supports a GET request which
returns the list of actions the user (uid) has taken on the board (bid). 