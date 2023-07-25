DROP FUNCTION IF EXISTS actionReset;
CREATE FUNCTION actionReset() RETURNS void AS $$
BEGIN
    INSERT INTO ActionArchive (id, postid, userid, boardid, action, date)
    SELECT id, U.postid, U.userid, U.boardid, U.action, now()
    FROM UserActions U;
    DELETE FROM UserActions *;
    RETURN;
END
$$ LANGUAGE plpgsql;