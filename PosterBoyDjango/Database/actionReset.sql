DROP FUNCTION IF EXISTS actionReset;
CREATE FUNCTION actionReset(bid int) RETURNS void AS $$
DECLARE
    resettime timestamp;
    sincereset interval;
    resetthreshold interval;
BEGIN
    SELECT lastreset INTO resettime from boards where id = bid;
    SELECT now() - resettime INTO sincereset;
    IF (sincereset > resetthreshold OR resettime IS NULL) THEN
        INSERT INTO ActionArchive
        SELECT id, U.postid, U.userid, U.boardid, U.action, now()
        FROM UserActions U
        WHERE U.boardid = bid;
        DELETE FROM UserActions *;
        UPDATE boards SET lastreset = now() WHERE id = bid;
    END IF;
    RETURN;
END
$$ LANGUAGE plpgsql;