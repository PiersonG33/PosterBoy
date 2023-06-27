DROP TRIGGER IF EXISTS post_trg ON posts;
DROP FUNCTION IF EXISTS post_trgf;

CREATE FUNCTION post_trgf() RETURNS TRIGGER AS $$
DECLARE 
	actionsTrg int;
	limits int;
BEGIN
	SELECT count(*) INTO actionsTrg FROM UserActions WHERE userid = NEW.userid AND boardid = NEW.boardid;
	SELECT actionsTrg INTO limits FROM Boards WHERE id = NEW.boardid;
	IF actionsTrg >= limits THEN
		NEW := NULL;
	ELSE
		INSERT INTO UserActions VALUES(DEFAULT, NEW.id, NEW.userid, NEW.boardid, "post", now());
	END IF;
	RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER post_trg BEFORE INSERT ON posts
	FOR EACH ROW EXECUTE FUNCTION post_trgf();