"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendList = exports.checkFriend = exports.addFriend = exports.accept = exports.friendUpdate = exports.InviteList = exports.findFriendList = exports.insertFriend = exports.findOnlyReceiverState = exports.insertInvite = exports.findReceiverState = exports.findfriendstate = exports.insertUser = exports.findTargetUser = exports.findUser = void 0;
exports.findUser = 'select mail from user where mail=?';
exports.findTargetUser = 'select username from user where mail=?';
exports.insertUser = 'insert into user (username,mail,password) value(?,?,?)';
exports.findfriendstate = 'select state from where sender=?,receiver=?';
// 초대 이미받은지 체크
exports.findReceiverState = 'select state from Tinvite where  sender=? and receiver=? ';
exports.insertInvite = 'insert into Tinvite (receiver,sender,state) value(?,?,?)';
exports.findOnlyReceiverState = 'select state from Tinvite where receiver=?';
exports.insertFriend = 'insert into Tinvite (receiver,sender,state) value(?,?,?)';
exports.findFriendList = 'select receiver from Tinvite where sender=? and state=? limit 1';
// export const findLastState = 'select state from Tinvite where receiver=? order by id desc limit 1';
exports.InviteList = 'select sender from Tinvite where receiver=? and state=? order by id desc limit 1';
exports.friendUpdate = 'select sender from Tinvite where receiver=? and state=?';
// export const deleteInvite = 'delete from Tinvite where receiver=? and sender=? and state = ? limit 1';
exports.accept = 'insert into Tinviter (receiver,sender,state) value(?,?,?)';
exports.addFriend = 'insert into Tfriend (username,friendname) value(?,?)';
exports.checkFriend = 'select friendname from Tfriend where username=? and friendname=?';
exports.friendList = 'select friendname from Tfriend where username=?';
//# sourceMappingURL=friendQuery.js.map