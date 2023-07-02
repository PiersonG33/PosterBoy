::: center
**PosterBoy Database Schema**
:::

Django's default database schema is used to store sitewide user
accounts.\
PosterBoy also stores information about each board, post, user roles on
boards, and user actions on boards.\
![image](Screenshot (56).png)\
ACTIVE DATA TABLES:\
TABLE auth_user:\
1. id integer\
2. password, up to 128 characters\
3. last_login timestamp\
4. is_supervisor bool\
5. username, up to 150 characters\
6. first_name, up to 150 characters\
7. last_name, up to 150 characters\
8. email, up to 254 characters\
9. is_staff bool\
10.is_active bool\
11.date_joined timestamp\
TABLE Posts:\
1. id, integer, primary key\
2. userid, integer, foreign key referencing auth_user(id)\
3. boardid, integer, foreign key references boards(id)\
4. message, up to 200 characters\
5. message_type, integer (identifies whether content is text or image)\
6. date, timestamp\
7. color, integer\
8. score, integer\
9. x, integer\
10. y, integer\
TABLE Boards:\
1. id, integer, primary key\
2. topic_name, up to 50 characters\
3. actions, integer (number of actions per interval of reset)\
4. reset, interval (interval that actions reset on)\
TABLE UserActions:\
1. id, integer, primary key\
2. postid, int, foreign key referencing posts(id)\
3. userid, int, foreign key referencing auth_user(id)\
4. boardid, int, foreign key referencing boards(id)\
5. action, up to 10 characters\
6. date, timestamp\
TABLE UserStatus:\
1. userid, integer, foreign key referencing auth_user(id)\
2. boardid, integer, foreign key referencing boards(id)\
3. role, up to 10 characters\
4. (userid, boardid) forms a primary key\
ARCHIVAL TABLES:\
TABLE PostArchive:\
1. id, integer, primary key\
2. userid, integer, foreign key referencing auth_user(id)\
3. boardid, integer, foreign key references boards(id)\
4. message, up to 200 characters\
5. message_type, integer (identifies whether content is text or image)\
6. date, timestamp (time post was archived at)\
7. color, integer\
8. x, integer\
9. y, integer\
TABLE ActionArchive:\
1. id, integer, primary key\
2. postid, int, foreign key referencing posts(id)\
3. userid, int, foreign key referencing auth_user(id)\
4. boardid, int, foreign key referencing boards(id)\
5. action, up to 10 characters\
6. date, timestamp (archival date)\
TRIGGERS:\
archive() - moves a post from the active posts table to the archive
table when its score goes to 0\
legalAction() - checks whether a user's attempted action is allowed, and
blocks it if not (i.e. do they have enough board actions for the
period)\
post_trg() - When posting or changing a post's score, insert a record of
the action into userActions\
