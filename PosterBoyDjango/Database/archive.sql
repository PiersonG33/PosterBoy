DELETE TRIGGER IF EXISTS archiver_trg;
DELETE FUNCTION IF EXISTS archiver_trgf;

CREATE FUNCTION archiver_trgf() RETURNS TRIGGER as $$
BEGIN
    IF NEW.score <= 0 THEN 
        INSERT INTO postarchive (DEFAULT, NEW.user_id, NEW.board_id, NEW.message, NEW.message_type, NOW);
        NEW := NULL;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER archiver_trg before UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION archiver_trgf();