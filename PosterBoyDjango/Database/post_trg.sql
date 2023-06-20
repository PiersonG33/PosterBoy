DELETE TRIGGER IF EXISTS post_trg;
DELETE FUNCTION IF EXISTS post_trgf;

CREATE FUNCTION post_trgf() RETURNS TRIGGER AS $$
DECLARE 
	actions int;
	limit int;
BEGIN
	actions = SELECT count(*) FROM UserActions WHERE userid = NEW.userid AND boardid = NEW.boardid;
	limit = SELECT actions FROM Boards WHERE id = NEW.boardid;
	IF actions >= limit THEN
		NEW := NULL;
	ELSE
		INSERT INTO UserActions VALUES(DEFAULT, NEW.id, NEW.userid, NEW.boardid, "post", now());
	END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER post_trg BEFORE INSERT ON Posts
	FOR EACH ROW EXECUTE post_trgf();