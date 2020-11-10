MODULE Sort;

PROCEDURE QuickSort(VAR a: ARRAY OF INTEGER;
l, r: INTEGER);
VAR
  i, j, x, t: INTEGER;
BEGIN
  i := l;
  j := r;
  x := a[(r+l) DIV 2];
  REPEAT
    WHILE a[i] < x DO
      INC(i)
    END; (* WHILE *)
    WHILE x < a[j] DO
      DEC(j)
    END; (* WHILE *)
    IF i <= j THEN
      t := a[i]; a[i] := a[j]; a[j] := t;
      INC(i); DEC(j)
    END; (* IF *)
  UNTIL i > j;
  IF l < j THEN
    QuickSort(a, l, j)
  END; (* IF *)
  IF i < r THEN
    QuickSort(a, i, r)
  END; (* IF *)
END QuickSort;

END Sort.
