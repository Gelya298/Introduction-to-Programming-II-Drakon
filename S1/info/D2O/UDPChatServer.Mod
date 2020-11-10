MODULE UDPChatServer;

(** AUTHOR "SAGE"; PURPOSE "UDP Chat Server" *)

IMPORT
  Base := UDPChatBase, UDP, IP, Dates, Modules,
  Utilities := Strings, Kernel, AosEvents := Events;

CONST
  moduleName = "UDPChatServer";
  (* Event classification as in AosEvents.XML *)
  EventClass = 3; (* UDP Chat *)
  EventSubclass = 3; (* UDP Chat Server *)
  Dr010VtkExit = 0;
  Dr010Vtk0060 = 60;
  Dr010Vtk0073 = 73;
  Dr010Vtk0088 = 88;
  Dr010Vtk0098 = 98;
  Dr010Vtk0066 = 66;

TYPE
  
  String = Utilities.String;
  
  Instance = OBJECT
  VAR
    s: UDP.Socket;
    dt: Dates.DateTime;
    running, terminated: BOOLEAN;
    ip: IP.Adr;
    command, seqNum, messageType: INTEGER;
    uin, receiverUin, port, len, res, receiveBufOffset: LONGINT;
    user: Base.User;
    users: Base.Users;
    clients: Base.List;
    client, receiver: Base.Client;
    sendBuf: Base.Buffer;
    receiveBuf, password, shortName,
    fullName, eMail, message, textCode: String;
    str1, str2: ARRAY 256 OF CHAR;
    ACKReq: Base.ACKRec;

  VAR
    Dr010Vtk: INTEGER;

  PROCEDURE Server_UserStatus(client, receiver: Base.Client;
    status: INTEGER;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    res: LONGINT;
    string: String;
  BEGIN {EXCLUSIVE}
    Base.ServerPacketInit(status,
      receiver.outSeqNum, sendBuf);
    NEW(ACKReq);
    ACKReq.seqNum := receiver.outSeqNum;
    receiver.ACKList.Add(ACKReq);
    INC(receiver.outSeqNum);
    sendBuf.AddInt(client.uin, 4);
    string := sendBuf.GetString();
    s.Send(receiver.ip, receiver.port,
      string^, 0, sendBuf.GetLength(),
      res);
  END Server_UserStatus;

  PROCEDURE Server_ReceiveMessage(client, receiver: Base.Client;
    dt: Dates.DateTime;
    messageType: INTEGER;
    message: String;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    string: String;
    res, len: LONGINT;
  BEGIN {EXCLUSIVE}
    Base.ServerPacketInit(
      Base.RECEIVE_MESSAGE,
      receiver.outSeqNum, sendBuf);
    NEW(ACKReq);
    ACKReq.seqNum :=
      receiver.outSeqNum;
    receiver.ACKList.Add(ACKReq);
    INC(receiver.outSeqNum);
    sendBuf.AddInt(client.uin, 4);
    sendBuf.AddInt(dt.year, 2);
    sendBuf.AddInt(dt.month, 1);
    sendBuf.AddInt(dt.day, 1);
    sendBuf.AddInt(dt.hour, 1);
    sendBuf.AddInt(dt.minute, 1);
    sendBuf.AddInt(messageType, 2);
    len := LEN(message^);
    sendBuf.AddInt(len, 2);
    sendBuf.Add(message^, 0, len,
      TRUE, res);
    string := sendBuf.GetString();
    s.Send(receiver.ip, receiver.port,
      string^, 0, sendBuf.GetLength(),
      res);
  END Server_ReceiveMessage;

  PROCEDURE Server_ACK(client: Base.Client;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    res: LONGINT;
    string: String;
  BEGIN {EXCLUSIVE}
    Base.ServerPacketInit(
      Base.ACK, client.inSeqNum,
      sendBuf);
    string := sendBuf.GetString();
    s.Send(client.ip, client.port,
      string^, 0,
      sendBuf.GetLength(), res);
  END Server_ACK;

  PROCEDURE Server_InfoReply(client: Base.Client;
    user: Base.User;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    string: String;
    res, len: LONGINT;
  BEGIN {EXCLUSIVE}
    Base.ServerPacketInit(
      Base.INFO_REPLY,
      client.inSeqNum,
      sendBuf);
    sendBuf.AddInt(
      user.uin, 4);
    len := Utilities.Length(
      user.shortName) + 1;
    sendBuf.AddInt(len, 2);
    sendBuf.Add(user.shortName,
      0, len, TRUE, res);
    string := sendBuf.GetString();
    s.Send(client.ip, client.port,
      string^, 0,
      sendBuf.GetLength(), res);
  END Server_InfoReply;

  PROCEDURE Server_LoginReply(client: Base.Client;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    res: LONGINT;
    string: String;
  BEGIN {EXCLUSIVE}
    Base.ServerPacketInit(
      Base.LOGIN_REPLY,
      client.inSeqNum, sendBuf);
    sendBuf.AddInt(client.uin, 4);
    string := sendBuf.GetString();
    s.Send(client.ip,
      client.port, string^, 0,
      sendBuf.GetLength (), res);
  END Server_LoginReply;

  PROCEDURE Server_NewUserReply(ip: IP.Adr;
    port: LONGINT;
    uin: LONGINT;
    seqNum: INTEGER;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    res: LONGINT;
    string: String;
  BEGIN {EXCLUSIVE}
    Base.ServerPacketInit(
      Base.NEW_USER_REPLY,
      seqNum, sendBuf);
    sendBuf.AddInt(uin, 4);
    string := sendBuf.GetString();
    s.Send(ip, port, string^, 0,
      sendBuf.GetLength (), res);
  END Server_NewUserReply;

  PROCEDURE MulticastMessage(clients: Base.List;
    client: Base.Client;
    dt: Dates.DateTime;
    messageType: INTEGER;
    message: String;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    i: LONGINT;
    p: ANY;
    receiver: Base.Client;
  BEGIN
    i := 0;
    WHILE i < clients.GetCount() DO
      p := clients.GetItem(i);
      receiver := p(Base.Client);
      Server_ReceiveMessage(
        client, receiver, dt,
        messageType, message,
        sendBuf, s);
      INC(i);
    END; (* WHILE *)
  END MulticastMessage;

  PROCEDURE MulticastStatus(clients: Base.List;
    client: Base.Client;
    status: INTEGER;
    sendBuf: Base.Buffer;
    s: UDP.Socket);
  VAR
    i: LONGINT;
    p: ANY;
    receiver: Base.Client;
  BEGIN
    i := 0;
    WHILE i < clients.GetCount() DO
      p := clients.GetItem(i);
      receiver := p(Base.Client);
      IF client.uin # receiver.uin THEN
        Server_UserStatus(client,
          receiver, status, sendBuf, s);
        IF status = Base.USER_ONLINE THEN
          Server_UserStatus(receiver,
            client, status, sendBuf, s);
        END; (* IF *)
      END; (* IF *)
      INC(i);
    END; (* WHILE *)
  END MulticastStatus;

  PROCEDURE CheckKeepAlive(clients: Base.List);
  VAR
    i: LONGINT;
    p: ANY;
  BEGIN
    i := 0;
    WHILE i < clients.GetCount() DO
      p := clients.GetItem(i);
      client := p(Base.Client);
      IF Kernel.Expired(client.keepAliveTimer) THEN
        MulticastStatus(clients, client,
          Base.USER_OFFLINE, sendBuf, s);
        client.Finalize;
        clients.Remove(client);
      END; (* IF *)
      INC(i);
    END; (* WHILE *)
  END CheckKeepAlive;

  PROCEDURE FindClient(clients: Base.List;
    uin: LONGINT;
    VAR client: Base.Client): BOOLEAN;
  VAR
    i: LONGINT;
    p: ANY;
  BEGIN
    i := 0;
    WHILE i < clients.GetCount() DO
      p := clients.GetItem(i);
      client := p(Base.Client);
      IF uin = client.uin THEN
        RETURN TRUE;
      END; (* IF *)
      INC(i);
    END; (* WHILE *)
    RETURN FALSE;
  END FindClient;

  PROCEDURE FinalizeClients(clients: Base.List);
  VAR
    i: LONGINT;
    p: ANY;
    client: Base.Client;
  BEGIN
    i := 0;
    WHILE i < clients.GetCount() DO
      p := clients.GetItem(i);
      client := p(Base.Client);
      client.Finalize;
      INC(i);
    END; (* WHILE *)
  END FinalizeClients;

  PROCEDURE Destroy;
  BEGIN
    running := FALSE;
    s.Close;
    BEGIN {EXCLUSIVE}
      AWAIT(terminated)
    END;
  END Destroy;

  PROCEDURE &New(udp: UDP.Socket);
  BEGIN
    s := udp;
  END New;

  BEGIN {ACTIVE}
    Dr010Vtk := Dr010Vtk0060;
    WHILE Dr010Vtk # Dr010VtkExit DO
      CASE Dr010Vtk OF
      | Dr010Vtk0060:
        (* Init *)
        NEW(receiveBuf,
          Base.MaxUDPDataLen);
        NEW(sendBuf, 0);
        NEW(clients);
        NEW (users);
        running := TRUE;
        terminated := FALSE;
        Dr010Vtk := Dr010Vtk0073
      | Dr010Vtk0073:
        (* Packet receive *)
        IF running THEN
          CheckKeepAlive(clients);
          s.Receive (receiveBuf^, 0,
            Base.MaxUDPDataLen,
            1, ip, port, len, res);
          IF (res = UDP.Ok) & (len > 0) THEN
            receiveBufOffset := 0;
            (* Version check *)
            IF Base.BufGetInt(receiveBuf, receiveBufOffset) = Base.VERSION THEN
              Dr010Vtk := Dr010Vtk0088
            ELSE
              Dr010Vtk := Dr010Vtk0073
            END; (* IF *)
          ELSE
            Dr010Vtk := Dr010Vtk0073
          END; (* IF *)
        ELSE
          Dr010Vtk := Dr010Vtk0066
        END; (* IF *)
      | Dr010Vtk0088:
        (* Authentication *)
        command := Base.BufGetInt(receiveBuf,
          receiveBufOffset);
        seqNum := Base.BufGetInt(receiveBuf,
          receiveBufOffset);
        uin := Base.BufGetLInt(receiveBuf,
          receiveBufOffset);
        Utilities.IntToStr(seqNum, str1);
        Utilities.Concat(" SeqNum: ", str1, str1);
        Utilities.Concat(str1, " Command: ", str1);
        Utilities.IntToStr(uin, str2);
        Utilities.Concat("User ID: ", str2, str2);
        Utilities.Concat(str2, str1, str1);
        Base.CommandDecode(command, str2);
        Utilities.Concat(str1, str2, str1);
        Log(AosEvents.Information, 0, str1, FALSE);
        IF FindClient(clients, uin, client) THEN
          (* Additional check *)
          IF (IP.AdrsEqual(client.ip, ip)) & (client.port = port) THEN
            Dr010Vtk := Dr010Vtk0098
          ELSE
            Dr010Vtk := Dr010Vtk0073
          END; (* IF *)
        ELSE
          CASE command OF
          | Base.LOGIN:
            password :=
              Base.BufGetString (receiveBuf,
              receiveBufOffset);
            IF users.PasswordCorrect(uin, password) THEN
              NEW(client);
              client.ip := ip;
              client.port := port;
              client.uin := uin;
              client.inSeqNum := seqNum;
              client.outSeqNum := 0;
              Kernel.SetTimer(client.keepAliveTimer,
                Base.clientKeepAliveAwait);
              clients.Add(client);
              Server_LoginReply(client, sendBuf, s);
              MulticastStatus(clients, client,
                Base.USER_ONLINE, sendBuf, s);
            END; (* IF *)
          | Base.NEW_USER_REG:
            password := Base.BufGetString(receiveBuf,
              receiveBufOffset);
            shortName := Base.BufGetString(receiveBuf,
              receiveBufOffset);
            fullName := Base.BufGetString(receiveBuf,
              receiveBufOffset);
            eMail := Base.BufGetString(receiveBuf,
              receiveBufOffset);
            user := users.Add(password, shortName,
              fullName, eMail);
            Server_NewUserReply(ip, port, user.uin,
              seqNum, sendBuf, s);
          ELSE (* CASE *)
          END; (* CASE *)
          Dr010Vtk := Dr010Vtk0073
        END; (* IF *)
      | Dr010Vtk0098:
        (* Packet handle *)
        IF command = Base.ACK THEN
          IF Base.SeqNumInACKList( client.ACKList, seqNum, ACKReq) THEN
            client.ACKList.Remove(ACKReq);
          END; (* IF *)
        ELSE
          IF Base.isNextSeqNum( seqNum, client.inSeqNum) THEN
            client.inSeqNum := seqNum;
            CASE command OF
            | Base.SEND_MESSAGE:
              Server_ACK(client, sendBuf, s);
              receiverUin := Base.BufGetLInt(
                receiveBuf, receiveBufOffset);
              messageType := Base.BufGetInt(
                receiveBuf, receiveBufOffset);
              message := Base.BufGetString(
                receiveBuf, receiveBufOffset);
              dt := Dates.Now();
              IF receiverUin = 0 THEN
                MulticastMessage(
                  clients, client, dt,
                  messageType,
                  message,
                  sendBuf, s);
              ELSE
                IF FindClient(clients, receiverUin, receiver) THEN
                  Server_ReceiveMessage(
                    client, receiver, dt,
                    messageType, message,
                    sendBuf, s);
                END; (* IF *)
              END; (* IF *)
            | Base.KEEP_ALIVE:
              Server_ACK(client, sendBuf, s);
              Kernel.SetTimer(
                client.keepAliveTimer,
                Base.clientKeepAliveAwait);
            | Base.INFO_REQ:
              receiverUin := Base.BufGetLInt(
                receiveBuf, receiveBufOffset);
              user := users.Find(receiverUin);
              IF user # NIL THEN
                Server_InfoReply(
                  client, user,
                  sendBuf, s);
              END; (* IF *)
            | Base.SEND_TEXT_CODE:
              Server_ACK(client, sendBuf, s);
              textCode := Base.BufGetString(
                receiveBuf, receiveBufOffset);
              IF textCode^ = "USER_DISCONNECTED" THEN
                MulticastStatus(clients,
                  client, Base.USER_OFFLINE,
                  sendBuf, s);
                clients.Remove(client);
              END; (* IF *)
            ELSE (* CASE *)
            END; (* CASE *)
          END; (* IF *)
        END; (* IF *)
        Dr010Vtk := Dr010Vtk0073
      | Dr010Vtk0066:
        (* End *)
        users.Store;
        FinalizeClients(clients);
        clients.Clear;
        BEGIN {EXCLUSIVE}
          terminated := TRUE
        END;
        Dr010Vtk := Dr010VtkExit
      ELSE (* CASE *)
      END (* CASE *)
    END (* WHILE *)

  END Instance;

VAR
  instance: Instance;

PROCEDURE Log(type, code: SHORTINT;
  CONST msg: ARRAY OF CHAR;
  showOnKernelLog: BOOLEAN);
VAR
  message: AosEvents.Message;
BEGIN
  COPY(msg, message);
  AosEvents.AddEvent(moduleName,
    type, EventClass, EventSubclass,
    code, message, showOnKernelLog);
END Log;

PROCEDURE Start*;
VAR
  s: UDP.Socket;
  res: LONGINT;
  str: ARRAY 256 OF CHAR;
BEGIN
  IF instance = NIL THEN
    NEW(s, Base.serverPort, res);
    IF res = UDP.Ok THEN
      NEW(instance, s);
      Utilities.IntToStr(
        Base.serverPort, str);
      Utilities.Concat(
        "server started on port: ",
        str, str);
      Log(AosEvents.Information,
        0, str, TRUE);
    ELSE
      Log(AosEvents.Error,
        0, "server NOT started!",
        TRUE);
    END; (* IF *)
  END; (* IF *)
END Start;

PROCEDURE Stop*;
BEGIN
  Cleanup;
END Stop;

PROCEDURE Cleanup;
BEGIN
  IF instance # NIL THEN
    instance.Destroy;
  END; (* IF *)
END Cleanup;

BEGIN
  Modules.InstallTermHandler(Cleanup);
END UDPChatServer.
