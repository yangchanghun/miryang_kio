import { Routes, Route } from "react-router-dom";
import KakaoTalkTutorial from "../miryang/kakaotalk/KakaoTalkTutorial";
import KakaoSignUp_2 from "../miryang/kakaotalk/signup/KakaoSignUp_2";
import KakaoSignUp_1 from "../miryang/kakaotalk/signup/KakaoSignUp_1";
import KakaoSignUp_3 from "../miryang/kakaotalk/signup/KakaoSignUp_3";
import KakaoSignUp_4 from "../miryang/kakaotalk/signup/KakaoSignUp_4";
import KakaoSignUp_5 from "../miryang/kakaotalk/signup/KakaoSignUp_5";
import KakaoSignUp_6 from "../miryang/kakaotalk/signup/KakaoSignUp_6";
import KakaoSignUp_7 from "../miryang/kakaotalk/signup/KakaoSignUp_7";
import KakaoSignUp_8 from "../miryang/kakaotalk/signup/KakaoSignUp_8";

import KakaoFriendAdd from "../miryang/kakaotalk/friendadd/KakaoFriendAdd";
import KakaoFriendQr from "../miryang/kakaotalk/friendadd/KakaoFriendQr";
import KakaoFriendId from "../miryang/kakaotalk/friendadd/KakaoFriendId";
import KakaoFriendPhone from "../miryang/kakaotalk/friendadd/KakaoFriendPhone";
import ConversationMain from "../miryang/kakaotalk/conversation/ConversationMain";
import Conversation_1 from "../miryang/kakaotalk/conversation/Conversation_1";
import KakaoChat from "../miryang/kakaotalk/conversation/KakaoChat";
import BlockFriend from "../miryang/kakaotalk/blockfriend/BlockFriend";
import FriendsSettings from "../miryang/kakaotalk/blockfriend/FriendsSettings";
import BlockedFriends from "../miryang/kakaotalk/blockfriend/BlockedFriends";

export default function KakaoTalkGuide() {
  return (
    <Routes>
      {/* signup */}
      <Route path="main" element={<KakaoTalkTutorial />} />
      <Route path="signup/1" element={<KakaoSignUp_1 />} />
      <Route path="signup/2" element={<KakaoSignUp_2 />} />
      <Route path="signup/3" element={<KakaoSignUp_3 />} />
      <Route path="signup/4" element={<KakaoSignUp_4 />} />
      <Route path="signup/5" element={<KakaoSignUp_5 />} />
      <Route path="signup/6" element={<KakaoSignUp_6 />} />
      <Route path="signup/7" element={<KakaoSignUp_7 />} />
      <Route path="signup/8" element={<KakaoSignUp_8 />} />

      {/*  */}
      <Route path="friendadd/1" element={<KakaoFriendAdd />} />
      <Route path="friendadd/qr" element={<KakaoFriendQr />} />
      <Route path="friendadd/id" element={<KakaoFriendId />} />
      <Route path="friendadd/phone" element={<KakaoFriendPhone />} />

      {/* conversation */}
      <Route path="conversation/1" element={<ConversationMain />} />
      <Route path="conversation/2" element={<Conversation_1 />} />
      <Route path="conversation/3" element={<KakaoChat />} />

      {/* block */}
      <Route path="friendblock/1" element={<BlockFriend />} />
      <Route path="friendblock/2" element={<FriendsSettings />} />
      <Route path="friendblock/3" element={<BlockedFriends />} />
    </Routes>
  );
}
