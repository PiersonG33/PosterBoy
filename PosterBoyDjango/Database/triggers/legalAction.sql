DELETE TRIGGER IF EXISTS legal_action_trg;
DELETE FUNCTION IF EXISTS legal_action_trgf;

CREATE FUNCTION legal_action_trgf() RETURNS TRIGGER as $$
DECLARE
    done int;
    daily int;
    score int;
    num int;
BEGIN
    done = SELECT COUNT(*) FROM UserActions WHERE user_id == NEW.user_id AND board_id == NEW.board_id;
    daily = SELECT actions FROM boards WHERE board_id == NEW.board_id;

    IF done - daily <= 0 THEN
        NEW := NULL;
    ELSE
        num := 0;
        IF NEW.actions LIKE "promote" THEN 
            num := 1;
        ELSE
            num := -1;
        END IF;
        UPDATE posts WHERE post_id == NEW.post_id SET score := score + num;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER legal_action_trg before INSERT ON UserActions
    FOR EACH ROW EXECUTE FUNCTION legal_action_trgf();