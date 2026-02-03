import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessModal from "./modal/SuccessModal";

type Message = {
  id: number;
  sender: "me" | "other";
  type: "text" | "image";
  content: string | string[];
  time: string;
};

export default function KakaoChat() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [successModal, setSuccessModal] = useState(false);

  const albumImages = [
    "/puppy/dog1.jpg",
    "/puppy/dog2.jpg",
    "/puppy/dog3.jpg",
    "/puppy/dog4.jpg",
    "/puppy/dog5.jpg",
    "/puppy/dog6.jpg",
    "/puppy/dog7.jpg",
    "/puppy/dog8.jpg",
    "/puppy/dog9.jpg",
  ];

  const nowTime = () =>
    new Date().toLocaleTimeString("ko-KR", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const sendMessage = () => {
    if (!inputText.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "me",
        type: "text",
        content: inputText,
        time: nowTime(),
      },
    ]);
    setInputText("");

    if (!localStorage.getItem("messagemission")) {
      localStorage.setItem("messagemission", "true");
      setSuccessModal(true);
    }
  };

  const sendImages = () => {
    if (selectedImages.length === 0) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        sender: "me",
        type: "image",
        content: selectedImages,
        time: nowTime(),
      },
    ]);

    setSelectedImages([]);
    setShowAlbum(false);
    setShowMenu(false);

    if (!localStorage.getItem("imagemission")) {
      localStorage.setItem("imagemission", "true");
      setSuccessModal(true);
    }
  };

  return (
    <div className="mx-auto flex h-screen max-w-[785px] flex-col bg-[#B2C7DA]">
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-[#B2C7DA] px-4 py-3 flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="text-xl">
          ←
        </button>
        <span>2</span>
        <h1 className="flex-1 text-center font-semibold">김홍삼</h1>
        <div className="flex gap-2">
          {["🔍", "📋", "☰"].map((i) => (
            <button
              key={i}
              onClick={() => alert("비활성화")}
              className="text-lg"
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      {/* MESSAGES */}
      <div
        className={`flex-1 overflow-y-auto px-4 py-5 space-y-3 ${
          showMenu ? "pb-[360px]" : "pb-[100px]"
        }`}
      >
        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center text-gray-500">
            대화를 시작해보세요!
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex ${
              m.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-[70%]">
              <div
                className={`rounded-2xl px-4 py-2 ${
                  m.sender === "me" ? "bg-[#FFE617]" : "bg-white"
                }`}
              >
                {m.type === "text" ? (
                  <p>{m.content}</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {(m.content as string[]).map((img) => (
                      <img
                        key={img}
                        src={img}
                        className="h-24 w-24 rounded-lg object-cover"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-1 text-xs text-gray-600 text-right">
                {m.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div
        className={`fixed bottom-0 z-40 w-full max-w-[785px] bg-white px-3 py-2 flex items-center gap-2 transition-all ${
          showMenu ? "bottom-[280px]" : "bottom-0"
        }`}
      >
        <button
          onClick={() => {
            setShowMenu(!showMenu);
            setShowAlbum(false);
          }}
          className="text-2xl font-bold"
        >
          {showMenu ? "×" : "+"}
        </button>

        <input
          className="flex-1 rounded-full border px-4 py-2"
          placeholder="메시지 입력"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button onClick={sendMessage} className="text-xl">
          ⬆️
        </button>
      </div>

      {/* BOTTOM MENU */}
      {showMenu && (
        <div className="fixed bottom-0 z-30 w-full max-w-[785px] bg-white h-[280px] border-t p-4 grid grid-cols-4 gap-4">
          <button
            onClick={() => {
              setShowAlbum(true);
              setShowMenu(false);
            }}
            className="flex flex-col items-center"
          >
            <div className="h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center">
              📈
            </div>
            <span className="text-sm">앨범</span>
          </button>
        </div>
      )}

      {/* ALBUM */}
      {showAlbum && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <button onClick={() => setShowAlbum(false)}>✕</button>
            <h2 className="font-semibold">앨범</h2>
            <button
              onClick={sendImages}
              disabled={!selectedImages.length}
              className="rounded-full bg-[#FFE617] px-4 py-1 disabled:bg-gray-300"
            >
              전송
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1 p-2 overflow-y-auto">
            {albumImages.map((img) => (
              <div
                key={img}
                onClick={() =>
                  setSelectedImages((prev) =>
                    prev.includes(img)
                      ? prev.filter((i) => i !== img)
                      : [...prev, img],
                  )
                }
                className={`relative aspect-square ${
                  selectedImages.includes(img) ? "ring-4 ring-[#FFE617]" : ""
                }`}
              >
                <img src={img} className="h-full w-full object-cover" />
                {selectedImages.includes(img) && (
                  <div className="absolute top-1 right-1 h-6 w-6 rounded-full bg-[#FFE617] flex items-center justify-center text-sm font-bold">
                    {selectedImages.indexOf(img) + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {successModal && <SuccessModal setSuccessModal={setSuccessModal} />}
    </div>
  );
}
