DROP TRIGGER IF EXISTS post_trg ON posts;
DROP FUNCTION IF EXISTS post_trgf;

CREATE FUNCTION post_trgf() RETURNS TRIGGER AS $$
DECLARE 
	actions int;
	limits int;
BEGIN
	SELECT count(*) INTO actions FROM UserActions WHERE userid = NEW.userid AND boardid = NEW.boardid;
	SELECT actions INTO limits FROM Boards WHERE id = NEW.boardid;
	IF actions >= limits THEN
		NEW := NULL;
	ELSE
		INSERT INTO UserActions VALUES(DEFAULT, NEW.id, NEW.userid, NEW.boardid, "post", now());
	END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER post_trg BEFORE INSERT ON posts
	FOR EACH ROW EXECUTE FUNCTION post_trgf();