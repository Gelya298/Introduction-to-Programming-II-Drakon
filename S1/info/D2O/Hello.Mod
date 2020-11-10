MODULE Hello;

IMPORT
	Strings, Commands, WMGraphics, WMMessages, WMComponents, WMStandardComponents,
	Modules, KernelLog, WMRectangles, WMGraphicUtilities, Random, Kernel, WMDialogs,
	WM := WMWindowManager;


PROCEDURE World*(context: Commands.Context);
BEGIN
  context.out.String("Hello World");
  context.out.Ln
END World;

END Hello.

Hello.World ~
