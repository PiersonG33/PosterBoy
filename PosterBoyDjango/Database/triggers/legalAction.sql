DROP TRIGGER IF EXISTS legal_action_trg ON UserActions;
DROP FUNCTION IF EXISTS legal_action_trgf;

CREATE FUNCTION legal_action_trgf() RETURNS TRIGGER as $$
DECLARE
    max int;
    spent int;
BEGIN
    SELECT COUNT(*) INTO spent FROM UserActions WHERE userid = NEW.userid AND boardid = NEW.boardid;
    SELECT actions INTO max FROM boards WHERE id = NEW.boardid;

    IF spent >= max THEN
        NEW := NULL;
    ELSE
        IF NEW.action LIKE 'promote' THEN 
            UPDATE posts SET score = score + 1 WHERE id = NEW.postid;
        ELSIF NEW.action LIKE 'demote' THEN
            UPDATE posts SET score = score - 1 WHERE id = NEW.postid;
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER legal_action_trg before INSERT ON UserActions
    FOR EACH ROW EXECUTE FUNCTION legal_action_trgf();