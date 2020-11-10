MODULE Loops;

PROCEDURE for;
BEGIN
  FOR i := 0 TO 99 DO
    block1;
  END; (* FOR *)
END for;

PROCEDURE repeat;
BEGIN
  REPEAT
    block1;
  UNTIL cond;
END repeat;

PROCEDURE while;
BEGIN
  WHILE ~(cond) DO
    block2;
  END; (* WHILE *)
END while;

PROCEDURE loop;
BEGIN
  LOOP
    block1;
    IF cond THEN EXIT END;
    block2;
  END; (* LOOP *)
END loop;

END Loops.
