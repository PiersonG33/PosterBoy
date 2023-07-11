DROP TRIGGER IF EXISTS archiver_trg ON posts;
DROP FUNCTION IF EXISTS archiver_trgf;

CREATE FUNCTION archiver_trgf() RETURNS TRIGGER as $$
BEGIN
    IF NEW.score <= 0 THEN 
        INSERT INTO postarchive VALUES(DEFAULT, NEW.userid, NEW.boardid, NEW.message, NEW.message_type, now());
        DELETE FROM posts WHERE id = NEW.id;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER archiver_trg before UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION archiver_trgf();