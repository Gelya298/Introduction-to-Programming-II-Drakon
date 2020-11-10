MODULE TuringCoatWnd;

(** Soren Renner / TF *)

IMPORT

  Raster, AosRandom := Random, Objects, WMRectangles, WMGraphics, Modules,
  Utilities := Strings, WM := WMWindowManager, WMMessages;

CONST

  m = 50;
  size = 4;
  WindowWidth = m * size;
  WindowHeight = m * size;
  Dr018VtkExit = 0;
  Dr018Vtk0096 = 96;
  Dr018Vtk0116 = 116;
  Dr018Vtk0102 = 102;

TYPE

  KillerMsg = OBJECT
  END KillerMsg;  

  TCW* = OBJECT(WM.BufferWindow)
  VAR
    mesh1, mesh2, n1 : ARRAY m, m OF REAL;
    random : AosRandom.Generator;
    alive, dead, alpha : BOOLEAN;

  PROCEDURE Generation;
  VAR
    i, j : LONGINT;
  VAR
    Dr018Vtk: INTEGER;
  BEGIN
    Dr018Vtk := Dr018Vtk0096;
    WHILE Dr018Vtk # Dr018VtkExit DO
      CASE Dr018Vtk OF
      | Dr018Vtk0096:
        FOR i := 1 TO m - 2 DO
          n1[i, 0] := mesh1[i - 1, 0] +
            mesh1[i + 1, 0] +
            mesh1[i, m - 1] +
            mesh1[i, 1] +
            mesh1[i - 1, m - 1] +
            mesh1[i + 1, 1] +
            mesh1[i + 1, m - 1] +
            mesh1[i - 1,  1];
          n1[i, m - 1] := mesh1[i - 1, m - 1] +
            mesh1[i + 1, m - 1] +
            mesh1[i, m - 2] +
            mesh1[i, 0] +
            mesh1[i - 1, m - 2] +
            mesh1[i + 1, 0] +
            mesh1[i + 1, m - 2] +
            mesh1[i - 1, 0];
        END; (* FOR *)
        FOR j := 1 TO m - 2 DO
          n1[0, j] := mesh1[m - 1, j] +
            mesh1[1, j] +
            mesh1[0, j - 1] +
            mesh1[0, j + 1] +
            mesh1[m - 1, j - 1] +
            mesh1[1, j + 1] +
            mesh1[1, j - 1] +
            mesh1[m - 1, j + 1];
          n1[m - 1, j] := mesh1[m - 2, j] +
            mesh1[0, j] +
            mesh1[m - 1, j - 1] +
            mesh1[m - 1, j + 1] +
            mesh1[m - 2, j - 1] +
            mesh1[0, j + 1] +
            mesh1[0, j - 1] +
            mesh1[m - 2, j + 1];
        END; (* FOR *)
        Dr018Vtk := Dr018Vtk0116
      | Dr018Vtk0116:
        FOR i := 1 TO m - 2 DO
          FOR j := 1 TO m - 2 DO
            n1[i, j] := mesh1[i - 1, j] +
              mesh1[i + 1, j] +
              mesh1[i, j - 1] +
              mesh1[i, j + 1]  +
              mesh1[i - 1, j - 1] +
              mesh1[i + 1, j + 1] +
              mesh1[i + 1, j - 1] +
              mesh1[i - 1, j + 1];
          END; (* FOR *)
        END; (* FOR *)
        Dr018Vtk := Dr018Vtk0102
      | Dr018Vtk0102:
        FOR i := 1 TO m - 2 DO
          FOR j := 1 TO m - 2 DO
            (* HERE ARE THE DIFFERENCE RULES! *)
            mesh1[i, j] := mesh1[i, j] +
              n1[i, j] / 80 -
              (mesh2[i, j] * mesh2[i, j]);
            mesh2[i, j] := mesh2[i, j] +
              mesh1[i, j] / 20 -
              0.03;
            IF mesh1[i, j] < 0 THEN
              mesh1[i, j] := 0;
            ELSE
              IF mesh1[i, j] > 1 THEN
                mesh1[i, j] := 1;
              END; (* IF *)
            END; (* IF *)
            IF mesh2[i, j] < 0 THEN
              mesh2[i, j] := 0;
            ELSE
              IF mesh2[i, j] > 1 THEN
                mesh2[i, j] := 1;
              END; (* IF *)
            END; (* IF *)
          END; (* FOR *)
        END; (* FOR *)
        Dr018Vtk := Dr018VtkExit
      ELSE (* CASE *)
      END (* CASE *)
    END (* WHILE *)
  END Generation;

  PROCEDURE DrawIt;
  VAR
    i, j, ix, jy : LONGINT;
    pix : Raster.Pixel;
    mode : Raster.Mode;
  BEGIN
    Raster.InitMode(mode, Raster.srcCopy);
    FOR i := 0 TO m - 1 DO
      ix := i * size;
      FOR j := 0 TO m - 1 DO
        jy := j * size;
        IF alpha THEN
          Raster.SetRGBA(pix,
            SHORT((255 - ENTIER(mesh1[i, j] * 255))),
            SHORT((255 - ENTIER(mesh2[i, j] * 255))), 0, 
            SHORT((255 - ENTIER(mesh2[i, j] * 255)) +
            ENTIER(mesh1[i, j] * 255)) MOD 128 + 127);
        ELSE
          Raster.SetRGB(pix,
            SHORT((255 - ENTIER(mesh1[i, j] * 255))),
            SHORT((255 - ENTIER(mesh2[i, j] * 255))), 0);
        END; (* IF *)
        Raster.Fill(img, ix, jy, ix+size, jy+size, pix, mode);
      END; (* FOR *)
    END; (* FOR *)
    Invalidate(WMRectangles.MakeRect(0, 0, GetWidth(), GetHeight()));
  END DrawIt;

  PROCEDURE Draw*(canvas : WMGraphics.Canvas; w, h, q : LONGINT);
  BEGIN
    Draw^(canvas, w, h, 0);
  END Draw;

  PROCEDURE Close;
  BEGIN
    alive := FALSE;
    BEGIN {EXCLUSIVE} AWAIT(dead) END;
    Close^;
    DecCount;
  END Close;

  PROCEDURE Handle(VAR m: WMMessages.Message);
  BEGIN
    IF (m.msgType = WMMessages.MsgExt) & (m.ext # NIL) & (m.ext IS KillerMsg) THEN
      Close;
    ELSE
      Handle^(m);
    END; (* IF *)
  END Handle;

  PROCEDURE Resizing(VAR width, height : LONGINT);
  BEGIN
    width := WindowWidth;
    height := WindowHeight;
  END Resizing;

  PROCEDURE &New(alpha : BOOLEAN);
  VAR
    i, j : LONGINT;
  BEGIN
    Init(WindowWidth, WindowHeight, alpha);
    SELF.alpha := alpha;
    manager := WM.GetDefaultManager();
    manager.Add(100, 100, SELF, {WM.FlagFrame});
    SetTitle(Utilities.NewString("Turing"));
    NEW(random);
    FOR i := 0 TO m - 1 DO
      FOR j := 0 TO m - 1 DO
        mesh1[i, j] := 0;
        mesh2[i, j] := 0;
        n1[i, j] := 0;
      END; (* FOR *)
    END; (* FOR *)
    FOR i := 1 TO m - 2 DO
      FOR j := 1 TO m - 2 DO
        IF random.Dice(100) > 90 THEN
          mesh1[i, j] := random.Dice(1000) / 1000;
        END; (* IF *)
      END; (* FOR *)
    END; (* FOR *)
    IncCount;
  END New;

  BEGIN {ACTIVE}
    alive := TRUE;
    Objects.SetPriority(Objects.Low);
    WHILE alive DO
      Generation;
      DrawIt;
    END; (* WHILE *)
    BEGIN {EXCLUSIVE} dead := TRUE END;

  END TCW;

VAR

  nofWindows : LONGINT;

PROCEDURE OpenAlpha*;
VAR
  window : TCW;
BEGIN
  NEW(window, TRUE);
END OpenAlpha;

PROCEDURE Open*;
VAR
  window : TCW;
BEGIN
  NEW(window, FALSE);
END Open;

PROCEDURE IncCount;
BEGIN {EXCLUSIVE}
  INC(nofWindows);
END IncCount;

PROCEDURE DecCount;
BEGIN {EXCLUSIVE}
  DEC(nofWindows);
END DecCount;

PROCEDURE Cleanup;
VAR
  die : KillerMsg;
  msg : WMMessages.Message;
  m : WM.WindowManager;
BEGIN {EXCLUSIVE}
  NEW(die);
  msg.ext := die;
  msg.msgType := WMMessages.MsgExt;
  m := WM.GetDefaultManager();
  m.Broadcast(msg);
  AWAIT(nofWindows = 0);
END Cleanup;

BEGIN
  Modules.InstallTermHandler(Cleanup);
END TuringCoatWnd.
