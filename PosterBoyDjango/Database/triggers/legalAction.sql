DROP TRIGGER IF EXISTS legal_action_trg ON UserActions;
DROP FUNCTION IF EXISTS legal_action_trgf;

CREATE FUNCTION legal_action_trgf() RETURNS TRIGGER as $$
DECLARE
    done int;
    daily int;
    score int;
    num int;
BEGIN
    SELECT COUNT(*) INTO done FROM UserActions WHERE user_id == NEW.user_id AND board_id == NEW.board_id;
    SELECT actions INTO daily FROM boards WHERE board_id == NEW.board_id;

    IF done - daily <= 0 THEN
        NEW := NULL;
    ELSE
        num := 0;
        IF NEW.actions LIKE "promote" THEN 
            num := 1;
        ELSE
            num := -1;
        END IF;
        UPDATE posts SET score = score + num WHERE post_id == NEW.post_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER legal_action_trg before INSERT ON UserActions
    FOR EACH ROW EXECUTE FUNCTION legal_action_trgf();