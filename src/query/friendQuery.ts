export const findUser = 'select mail from user where mail=?';
export const findTargetUser = 'select username from user where mail=?';
export const insertUser = 'insert into user (username,mail,password) value(?,?,?)';
export const findfriendstate = 'select state from where sender=?,receiver=?';

// 초대 이미받은지 체크
export const findReceiverState = 'select state from Tinvite where  sender=? and receiver=? ';
export const insertInvite = 'insert into Tinvite (receiver,sender,state) value(?,?,?)';
export const findOnlyReceiverState = 'select state from Tinvite where receiver=?';
export const insertFriend = 'insert into Tinvite (receiver,sender,state) value(?,?,?)';

export const findFriendList = 'select receiver from Tinvite where sender=? and state=? limit 1';
// export const findLastState = 'select state from Tinvite where receiver=? order by id desc limit 1';
export const InviteList = 'select sender from Tinvite where receiver=? and state=? order by id desc limit 1';
export const friendUpdate = 'select sender from Tinvite where receiver=? and state=?';
// export const deleteInvite = 'delete from Tinvite where receiver=? and sender=? and state = ? limit 1';

export const accept = 'insert into Tinviter (receiver,sender,state) value(?,?,?)';
export const addFriend = 'insert into Tfriend (username,friendname) value(?,?)';
export const checkFriend = 'select friendname from Tfriend where username=? and friendname=?';
export const friendList = 'select friendname from Tfriend where username=?';
export const deleteInvite = 'delete from Tinvite where sender=? and receiver=?';
