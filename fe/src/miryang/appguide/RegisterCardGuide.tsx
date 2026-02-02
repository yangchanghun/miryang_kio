import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeButton from "../../utils/HomeButton";

function RegisterCardGuide() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [currentPage, setCurrentPage] = useState("main"); // 'main', 'password', 'terms', 'camera', 'cardinfo'
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        background: "linear-gradient(135deg, #f472b6, #fda4af, #e9d5ff)",
      }}
    >
      <HomeButton address={"milyang"} />
      {currentPage === "main" ? (
        <>
          <MilyangApp_1
            windowHeight={windowHeight}
            onCardRegister={() => setCurrentPage("password")}
          />
          <audio src="/milyangvoice/2/1.mp3" autoPlay></audio>
          <div
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              backgroundColor: "#FFB5D6",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            카드 등록을 위해 카드 등록 버튼을 클릭해주세요
          </div>
        </>
      ) : currentPage === "password" ? (
        <>
          <PasswordPage
            windowHeight={windowHeight}
            onBack={() => setCurrentPage("main")}
            onComplete={() => setCurrentPage("terms")}
          />
          <audio src="/milyangvoice/2/2.mp3" autoPlay></audio>

          <div
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              backgroundColor: "#FFB5D6",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            회원가입시에 입력됐던 보안 비밀번호를 입력해주세요 (6자리 아무 번호
            입력하면 다음페이지로 이동됩니다)
          </div>
        </>
      ) : currentPage === "terms" ? (
        <>
          <TermsPage
            windowHeight={windowHeight}
            onBack={() => setCurrentPage("password")}
            onNext={() => setCurrentPage("camera")}
          />
          <audio src="/milyangvoice/2/3.mp3" autoPlay></audio>

          <div
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              backgroundColor: "#FFB5D6",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            동의서를 읽어보시고 서비스 약관에 동의해주세요!
          </div>
        </>
      ) : currentPage === "camera" ? (
        <>
          <CameraPage
            windowHeight={windowHeight}
            onBack={() => setCurrentPage("terms")}
            onComplete={() => setCurrentPage("cardinfo")}
          />
          <audio src="/milyangvoice/2/4.mp3" autoPlay></audio>

          <div
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              backgroundColor: "#FFB5D6",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            카메라 권한을 허용하시고 밀양사랑카드를 틀안에 맞게 촬영해주세요!
          </div>
        </>
      ) : currentPage === "cardinfo" ? (
        <>
          <CardInfoPage
            windowHeight={windowHeight}
            onBack={() => setCurrentPage("camera")}
            onComplete={() => setCurrentPage("complete")}
          />
          <audio src="/milyangvoice/2/5.mp3" autoPlay></audio>

          <div
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              backgroundColor: "#FFB5D6",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            카드 정보가 맞는지 확인하시고 카드등록을 선택해주세요!
          </div>
        </>
      ) : (
        <>
          <CompletePage windowHeight={windowHeight} navigate={navigate} />
          <audio src="/milyangvoice/2/6.mp3" autoPlay></audio>

          <div
            style={{
              marginTop: "20px",
              padding: "15px 25px",
              backgroundColor: "#FFB5D6",
              borderRadius: "10px",
              textAlign: "center",
              fontSize: "30px",
              fontWeight: "600",
              color: "#333",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            카드 등록이 완료되었습니다!
          </div>
        </>
      )}
      {currentPage === "complete" && (
        <button onClick={() => navigate("/miryang/appguide/main")}>
          교육 마치기
        </button>
      )}
    </div>
  );
}

const MilyangApp_1 = ({ windowHeight, onCardRegister }) => {
  // 화면 높이에 따라 스케일 조정
  const getScale = () => {
    if (windowHeight >= 1000) {
      return 0.75;
    }
    return 0.5;
  };

  const scale = getScale();

  const handleCardRegister = () => {
    onCardRegister();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 720 * scale,
          height: 1280 * scale,
          position: "relative",
          background: "white",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            width: 720 * scale,
            height: 359 * scale,
            left: 0,
            top: 0,
            position: "absolute",
            background: "#FFB5D6",
          }}
        />
        <div
          style={{
            left: 37 * scale,
            top: 31 * scale,
            position: "absolute",
            color: "black",
            fontSize: 35 * scale,
            fontFamily: "Inter",
            fontWeight: "800",
            wordWrap: "break-word",
          }}
        >
          밀양사랑카드
        </div>
        <div
          style={{
            width: 33 * scale,
            height: 33 * scale,
            left: 590 * scale,
            top: 35 * scale,
            position: "absolute",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: 33.11 * scale,
              height: 32.99 * scale,
              left: -0.11 * scale,
              top: 0,
              position: "absolute",
              background: "black",
            }}
          />
        </div>
        <div
          style={{
            width: 30 * scale,
            height: 0,
            left: 650 * scale,
            top: 38 * scale,
            position: "absolute",
            outline: `${2 * scale}px black solid`,
            outlineOffset: `${-1 * scale}px`,
          }}
        ></div>
        <div
          style={{
            width: 30 * scale,
            height: 0,
            left: 650 * scale,
            top: 52 * scale,
            position: "absolute",
            outline: `${2 * scale}px black solid`,
            outlineOffset: `${-1 * scale}px`,
          }}
        ></div>
        <div
          style={{
            width: 30 * scale,
            height: 0,
            left: 650 * scale,
            top: 66 * scale,
            position: "absolute",
            outline: `${2 * scale}px black solid`,
            outlineOffset: `${-1 * scale}px`,
          }}
        ></div>
        <img
          style={{
            width: 139 * scale,
            height: 88 * scale,
            left: 78 * scale,
            top: 142 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/profile.png"
          alt="Profile"
        />

        {/* 반짝이는 카드 등록 버튼 */}
        <div
          onClick={handleCardRegister}
          style={{
            width: 640 * scale,
            height: 75 * scale,
            left: 40 * scale,
            top: 261 * scale,
            position: "absolute",
            background: "linear-gradient(45deg, #E86696, #FF6B9D, #E86696)",
            borderRadius: 10 * scale,
            cursor: "pointer",
            animation:
              "pulse 1.5s infinite, glow 2s ease-in-out infinite alternate",
            backgroundSize: "200% 200%",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(232, 102, 150, 0.4)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(232, 102, 150, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 15px rgba(232, 102, 150, 0.4)";
          }}
        />

        <div
          onClick={handleCardRegister}
          style={{
            left: 259 * scale,
            top: 282 * scale,
            position: "absolute",
            color: "white",
            fontSize: 27 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
            cursor: "pointer",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            animation: "bounce 2s infinite",
          }}
        >
          카드 등록하기 &gt;
        </div>

        <div
          style={{
            left: 250 * scale,
            top: 146 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          박선영님의
          <br />
          카드 신청이 완료되었어요.
          <br />
          카드를 받으시면 등록해 주세요.
        </div>
        <div
          style={{
            width: 640 * scale,
            height: 208 * scale,
            left: 40 * scale,
            top: 387 * scale,
            position: "absolute",
            borderRadius: 5 * scale,
            border: `${2 * scale}px #CDCDCD solid`,
          }}
        />
        <div
          style={{
            width: 640 * scale,
            height: 265 * scale,
            left: 40 * scale,
            top: 618 * scale,
            position: "absolute",
            borderRadius: 5 * scale,
            border: `${2 * scale}px #CDCDCD solid`,
          }}
        />
        <div
          style={{
            width: 640 * scale,
            height: 182 * scale,
            left: 42 * scale,
            top: 905 * scale,
            position: "absolute",
            background: "#D9D9D9",
            borderRadius: 5 * scale,
          }}
        />
        <div
          style={{
            width: 636 * scale,
            height: 96 * scale,
            left: 42 * scale,
            top: 389 * scale,
            position: "absolute",
            background: "#EEEEEE",
            borderTopLeftRadius: 3 * scale,
            borderTopRightRadius: 3 * scale,
          }}
        />
        <div
          style={{ left: 73 * scale, top: 416 * scale, position: "absolute" }}
        >
          <span
            style={{
              color: "black",
              fontSize: 34 * scale,
              fontFamily: "Inter",
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            7월
          </span>
          <span
            style={{
              color: "black",
              fontSize: 30 * scale,
              fontFamily: "Inter",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            {" "}
            혜택
          </span>
        </div>
        <div
          style={{
            left: 78 * scale,
            top: 647 * scale,
            position: "absolute",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          내 쿠폰
        </div>
        <div
          style={{
            left: 588 * scale,
            top: 644 * scale,
            position: "absolute",
            color: "black",
            fontSize: 35 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          0개
        </div>
        <div
          style={{
            left: 588 * scale,
            top: 730 * scale,
            position: "absolute",
            color: "black",
            fontSize: 35 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          0원
        </div>
        <div
          style={{
            left: 78 * scale,
            top: 729 * scale,
            position: "absolute",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          총 받은 혜택
        </div>
        <div
          style={{
            width: 84 * scale,
            height: 37 * scale,
            left: 198 * scale,
            top: 418 * scale,
            position: "absolute",
            background: "#5681F2",
            borderRadius: 22 * scale,
          }}
        />
        <div
          style={{
            left: 209 * scale,
            top: 425 * scale,
            position: "absolute",
            color: "white",
            fontSize: 20 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          제공 중
        </div>
        <div
          style={{
            width: 577 * scale,
            height: 64 * scale,
            left: 71 * scale,
            top: 507 * scale,
            position: "absolute",
            background: "#EEEEEE",
          }}
        />
        <div
          style={{
            width: 590 * scale,
            height: 64 * scale,
            left: 65 * scale,
            top: 796 * scale,
            position: "absolute",
            background: "#F5F5F5",
          }}
        />
        <div
          style={{
            left: 279 * scale,
            top: 525 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          혜택 알아보기 &gt;
        </div>
        <div
          style={{
            left: 94 * scale,
            top: 814 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          7월 받은 혜택
        </div>
        <div
          style={{
            left: 586 * scale,
            top: 812 * scale,
            position: "absolute",
            color: "black",
            fontSize: 27 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          0원
        </div>
        <div
          style={{
            width: 568 * scale,
            height: 0,
            left: 76 * scale,
            top: 706 * scale,
            position: "absolute",
            outline: `${3 * scale}px #EEEEEE solid`,
            outlineOffset: `${-1.5 * scale}px`,
          }}
        ></div>
        <img
          style={{
            width: 640 * scale,
            height: 245 * scale,
            left: 40 * scale,
            top: 902 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/banner.png"
          alt="Banner"
        />
        <div
          style={{
            width: 720 * scale,
            height: 175 * scale,
            left: 0,
            top: 1105 * scale,
            position: "absolute",
            background: "white",
          }}
        />
        <div
          style={{
            width: 101 * scale,
            height: 101 * scale,
            left: 73 * scale,
            top: 1118 * scale,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 101 * scale,
            height: 101 * scale,
            left: 230 * scale,
            top: 1118 * scale,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 101 * scale,
            height: 101 * scale,
            left: 387 * scale,
            top: 1118 * scale,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            width: 101 * scale,
            height: 101 * scale,
            left: 544 * scale,
            top: 1118 * scale,
            position: "absolute",
            background: "#F5F5F5",
            borderRadius: 9999,
          }}
        />
        <div
          style={{
            left: 76 * scale,
            top: 1229 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          카드 소개
        </div>
        <div
          style={{
            left: 222 * scale,
            top: 1229 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          가맹점 신청
        </div>
        <div
          style={{
            left: 369 * scale,
            top: 1229 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          결제매장 찾기
        </div>
        <div
          style={{
            left: 525 * scale,
            top: 1229 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          밀양 홈페이지
        </div>
        <img
          style={{
            width: 53 * scale,
            height: 70 * scale,
            left: 97 * scale,
            top: 1134 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/card 1.png"
          alt="Card"
        />
        <img
          style={{
            width: 80 * scale,
            height: 70 * scale,
            left: 243 * scale,
            top: 1134 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/text 1.png"
          alt="Text"
        />
        <img
          style={{
            width: 80 * scale,
            height: 70 * scale,
            left: 398 * scale,
            top: 1134 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/find 1.png"
          alt="Find"
        />
        <img
          style={{
            width: 79 * scale,
            height: 69 * scale,
            left: 555 * scale,
            top: 1134 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/homepage.png"
          alt="Homepage"
        />
      </div>

      {/* CSS 애니메이션 */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 4px 15px rgba(232, 102, 150, 0.4);
          }
          50% {
            box-shadow: 0 8px 25px rgba(232, 102, 150, 0.8);
          }
          100% {
            box-shadow: 0 4px 15px rgba(232, 102, 150, 0.4);
          }
        }

        @keyframes glow {
          from {
            background-position: 0% 50%;
          }
          to {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </div>
  );
};

const PasswordPage = ({ windowHeight, onBack, onComplete }) => {
  const [password, setPassword] = useState("");

  // 화면 높이에 따라 스케일 조정
  const getScale = () => {
    if (windowHeight >= 1000) {
      return 0.75;
    }
    return 0.5;
  };

  const scale = getScale();

  const handleNumberPress = (number) => {
    if (password.length < 6) {
      const newPassword = password + number;
      setPassword(newPassword);

      // 6자리가 되면 자동으로 다음 페이지로 이동
      if (newPassword.length === 6) {
        setTimeout(() => {
          onComplete();
        }, 500); // 0.5초 후 이동 (사용자가 입력 완료를 확인할 수 있도록)
      }
    }
  };

  const handleDelete = () => {
    setPassword((prev) => prev.slice(0, -1));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 720 * scale,
          height: 1280 * scale,
          position: "relative",
          background: "white",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            left: 195 * scale,
            top: 178 * scale,
            position: "absolute",
            color: "black",
            fontSize: 48 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          보안 비밀번호 입력
        </div>

        {/* 비밀번호 입력 원들 */}
        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            style={{
              width: 36 * scale,
              height: 36 * scale,
              left: (205 + index * 55) * scale,
              top: 257 * scale,
              position: "absolute",
              borderRadius: "50%",
              border: `${3 * scale}px solid ${
                password.length > index ? "#E86696" : "#d1d5db"
              }`,
              backgroundColor:
                password.length > index ? "#E86696" : "transparent",
              transition: "all 0.3s ease",
            }}
          />
        ))}

        {/* 얼굴인증 버튼 */}
        <div
          style={{
            width: 320 * scale,
            height: 56 * scale,
            left: 194 * scale,
            top: 342 * scale,
            position: "absolute",
            border: `${3 * scale}px solid #1e293b`,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#1e293b",
              fontSize: 30 * scale,
              fontFamily: "Inter",
              fontWeight: "500",
            }}
          >
            얼굴인증 사용하기
          </div>
        </div>

        {/* 비밀번호 찾기 */}
        <div
          style={{
            left: 204 * scale,
            top: 635 * scale,
            position: "absolute",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          비밀번호를 잊으셨나요?
        </div>

        {/* 키패드 영역 */}
        <div
          style={{
            width: 720 * scale,
            height: 512 * scale,
            left: 0,
            top: 768 * scale,
            position: "absolute",
            background: "#475569",
          }}
        />

        {/* 보안키보드 헤더 */}
        <div
          style={{
            width: 720 * scale,
            height: 56 * scale,
            left: 0,
            top: 710 * scale,
            position: "absolute",
            background: "#1e293b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 24 * scale,
              fontFamily: "Inter",
              fontWeight: "500",
            }}
          >
            보안키보드 작동 중
          </div>
        </div>

        {/* 숫자 키패드 */}
        {/* 첫 번째 줄: 1, 2, 3 */}
        <div
          onClick={() => handleNumberPress("1")}
          style={{
            position: "absolute",
            left: 550 * scale,
            top: 790 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1
        </div>
        <div
          onClick={() => handleNumberPress("2")}
          style={{
            position: "absolute",
            left: 320 * scale,
            top: 790 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2
        </div>
        <div
          onClick={() => handleNumberPress("3")}
          style={{
            position: "absolute",
            left: 90 * scale,
            top: 790 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          3
        </div>

        {/* 두 번째 줄: 4, 5, 0 */}
        <div
          onClick={() => handleNumberPress("4")}
          style={{
            position: "absolute",
            left: 320 * scale,
            top: 932 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          4
        </div>
        <div
          onClick={() => handleNumberPress("5")}
          style={{
            position: "absolute",
            left: 550 * scale,
            top: 932 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          5
        </div>
        <div
          onClick={() => handleNumberPress("0")}
          style={{
            position: "absolute",
            left: 90 * scale,
            top: 932 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          0
        </div>

        {/* 세 번째 줄: 7, 8, 9 */}
        <div
          onClick={() => handleNumberPress("7")}
          style={{
            position: "absolute",
            left: 90 * scale,
            top: 1061 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          7
        </div>
        <div
          onClick={() => handleNumberPress("8")}
          style={{
            position: "absolute",
            left: 320 * scale,
            top: 1061 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          8
        </div>
        <div
          onClick={() => handleNumberPress("9")}
          style={{
            position: "absolute",
            left: 550 * scale,
            top: 1061 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          9
        </div>

        {/* 네 번째 줄: 6, 삭제 버튼 */}
        <div
          onClick={() => handleNumberPress("6")}
          style={{
            position: "absolute",
            left: 320 * scale,
            top: 1170 * scale,
            color: "white",
            fontSize: 36 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            cursor: "pointer",
            width: 100 * scale,
            height: 100 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          6
        </div>

        {/* 삭제 버튼 */}
        <div
          onClick={handleDelete}
          style={{
            position: "absolute",
            left: 572 * scale,
            top: 1191 * scale,
            width: 56 * scale,
            height: 56 * scale,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30 * scale,
            color: "white",
          }}
        >
          ⌫
        </div>

        {/* 뒤로가기 버튼 */}
        <div
          onClick={onBack}
          style={{
            position: "absolute",
            left: 20 * scale,
            top: 20 * scale,
            width: 50 * scale,
            height: 50 * scale,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30 * scale,
            color: "black",
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          ←
        </div>

        {/* 키패드 구분선들 */}
        <div
          style={{
            width: 720 * scale,
            height: 0,
            left: 0,
            top: 768 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #475569`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />
        <div
          style={{
            width: 720 * scale,
            height: 0,
            left: 0,
            top: 898 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #475569`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />
        <div
          style={{
            width: 720 * scale,
            height: 0,
            left: 0,
            top: 1026 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #475569`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />
        <div
          style={{
            width: 720 * scale,
            height: 0,
            left: 0,
            top: 1154 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #475569`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />

        {/* 세로 구분선들 */}
        <div
          style={{
            width: 0,
            height: 512 * scale,
            left: 242 * scale,
            top: 768 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #475569`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />
        <div
          style={{
            width: 0,
            height: 512 * scale,
            left: 481 * scale,
            top: 768 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #475569`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />
      </div>
    </div>
  );
};

const TermsPage = ({ windowHeight, onBack, onNext }) => {
  const [allAgree, setAllAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);

  // 화면 높이에 따라 스케일 조정
  const getScale = () => {
    if (windowHeight >= 1000) {
      return 0.75;
    }
    return 0.5;
  };

  const scale = getScale();

  const handleAllAgree = () => {
    const newValue = !allAgree;
    setAllAgree(newValue);
    setPrivacyAgree(newValue);
  };

  const handlePrivacyAgree = () => {
    const newValue = !privacyAgree;
    setPrivacyAgree(newValue);
    if (!newValue) {
      setAllAgree(false);
    } else if (newValue) {
      setAllAgree(true);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 720 * scale,
          height: 1280 * scale,
          position: "relative",
          background: "white",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "20px",
        }}
      >
        {/* 체크마크 아이콘 (상단) */}
        <div
          style={{
            width: 176 * scale,
            height: 176 * scale,
            left: 276 * scale,
            top: 324 * scale,
            position: "absolute",
            background: "#d1d5db",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 56 * scale,
              height: 56 * scale,
              background: "white",
              outline: `${2 * scale}px solid black`,
              outlineOffset: `${-1 * scale}px`,
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 30 * scale, color: "green" }}>✓</div>
          </div>
        </div>

        {/* 제목 */}
        <div
          style={{
            left: 200 * scale,
            top: 522 * scale,
            position: "absolute",
            color: "black",
            fontSize: 48 * scale,
            fontFamily: "Istok Web",
            fontWeight: "700",
            wordWrap: "break-word",
          }}
        >
          서비스 약관 동의
        </div>

        {/* 설명 텍스트 */}
        <div
          style={{
            left: 185 * scale,
            top: 596 * scale,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            lineHeight: 1.3,
            wordWrap: "break-word",
          }}
        >
          원활한 서비스 이용을 위해
          <br />
          카드등록 약관 동의 항목에
          <br />
          동의해 주세요.
        </div>

        {/* 구분선 1 */}
        <div
          style={{
            width: 632 * scale,
            height: 0,
            left: 44 * scale,
            top: 873 * scale,
            position: "absolute",
            outline: `${3 * scale}px solid #f4f4f5`,
            outlineOffset: `${-1.5 * scale}px`,
          }}
        />

        {/* 전체 동의 체크박스 */}
        <div
          onClick={handleAllAgree}
          style={{
            width: 56 * scale,
            height: 56 * scale,
            left: 43 * scale,
            top: 901 * scale,
            position: "absolute",
            background: allAgree ? "#fb7185" : "#d1d5db",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {allAgree && (
            <div
              style={{
                width: 44 * scale,
                height: 28 * scale,
                outline: `${6 * scale}px solid white`,
                outlineOffset: `${-3 * scale}px`,
                borderRadius: "4px",
              }}
            />
          )}
        </div>

        {/* 전체 동의 텍스트 */}
        <div
          style={{
            left: 131 * scale,
            top: 911 * scale,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: 1.3,
            wordWrap: "break-word",
            animation: "bounce 2s infinite",
          }}
        >
          전체 동의 (1)
        </div>

        {/* 구분선 2 */}
        <div
          style={{
            width: 632 * scale,
            height: 0,
            left: 44 * scale,
            top: 988 * scale,
            position: "absolute",
            outline: `${3 * scale}px solid #e5e5e5`,
            outlineOffset: `${-1.5 * scale}px`,
          }}
        />

        {/* 필수 항목 텍스트 */}
        <div
          style={{
            left: 43 * scale,
            top: 1010 * scale,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: 1.3,
            wordWrap: "break-word",
          }}
        >
          필수 항목
        </div>

        {/* 개인정보 수집 동의 체크박스 */}
        <div
          onClick={handlePrivacyAgree}
          style={{
            width: 56 * scale,
            height: 56 * scale,
            left: 43 * scale,
            top: 1069 * scale,
            position: "absolute",
            background: privacyAgree ? "#fb7185" : "#d1d5db",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {privacyAgree && (
            <div
              style={{
                width: 44 * scale,
                height: 28 * scale,
                outline: `${6 * scale}px solid white`,
                outlineOffset: `${-3 * scale}px`,
                borderRadius: "4px",
              }}
            />
          )}
        </div>

        {/* 개인정보 수집 동의 텍스트 */}
        <div
          style={{
            left: 133 * scale,
            top: 1061 * scale,
            position: "absolute",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: 1.2,
            wordWrap: "break-word",
          }}
        >
          카드 등록 및 이용을 위한 개인정보 수집·
          <br />
          이용 동의서
        </div>

        {/* 자세히 보기 화살표 */}
        <div
          style={{
            left: 652 * scale,
            top: 1079 * scale,
            position: "absolute",
            color: "black",
            fontSize: 48 * scale,
            fontFamily: "Inter",
            fontWeight: "300",
            cursor: "pointer",
            lineHeight: 1.2,
          }}
        >
          &gt;
        </div>

        {/* 다음 버튼 */}
        <div
          onClick={() => {
            if (allAgree && privacyAgree) {
              onNext();
            } else {
              alert("필수 약관에 동의해주세요.");
            }
          }}
          style={{
            width: 720 * scale,
            height: 80 * scale,
            left: 0,
            top: 1175 * scale,
            position: "absolute",
            background: allAgree && privacyAgree ? "#fb7185" : "#d1d5db",
            cursor: allAgree && privacyAgree ? "pointer" : "not-allowed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 30 * scale,
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: 1.2,
              animation: "bounce 2s infinite",
            }}
          >
            다음
          </div>
        </div>

        {/* 뒤로가기 버튼 */}
        <div
          onClick={onBack}
          style={{
            position: "absolute",
            left: 20 * scale,
            top: 20 * scale,
            width: 50 * scale,
            height: 50 * scale,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30 * scale,
            color: "black",
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          ←
        </div>
      </div>
    </div>
  );
};

const CameraPage = ({ windowHeight, onBack, onComplete }) => {
  const [showPermissionModal, setShowPermissionModal] = useState(true);
  const [showCameraFlash, setShowCameraFlash] = useState(false);

  // 화면 높이에 따라 스케일 조정
  const getScale = () => {
    if (windowHeight >= 1000) {
      return 0.75;
    }
    return 0.5;
  };

  const scale = getScale();

  const handleAllowCamera = () => {
    setShowPermissionModal(false);

    // 2초 후 찰칵 이펙트 실행
    setTimeout(() => {
      setShowCameraFlash(true);

      // 찰칵 소리 효과 (가능한 경우)
      try {
        const audio = new Audio(
          "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+f1snEiCjWL0fPVdyoGw",
        );
        audio.play().catch(() => {}); // 에러 무시
      } catch (e) {}

      // 0.3초 후 플래시 효과 제거하고 다음 페이지로 이동
      setTimeout(() => {
        setShowCameraFlash(false);
        onComplete();
      }, 300);
    }, 2000);
  };

  const handleDenyCamera = () => {
    alert("카메라 권한이 필요합니다.");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 720 * scale,
          height: 1280 * scale,
          position: "relative",
          background: "white",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "20px",
        }}
      >
        {/* 상단 헤더 */}
        <div
          style={{
            width: 720 * scale,
            height: 176 * scale,
            left: 0,
            top: 0,
            position: "absolute",
            background: "white",
          }}
        />

        {/* 바코드 인식 아이콘 */}
        <img
          style={{
            width: 64 * scale,
            height: 64 * scale,
            left: 141 * scale,
            top: 26 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/barcode.png"
          alt="Barcode"
        />

        {/* 바코드 인식 텍스트 */}
        <div
          style={{
            left: 98 * scale,
            top: 104 * scale,
            position: "absolute",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            lineHeight: 1.2,
          }}
        >
          바코드 인식
        </div>

        {/* 직접 입력 텍스트 */}
        <div
          style={{
            left: 476 * scale,
            top: 104 * scale,
            position: "absolute",
            color: "black",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            lineHeight: 1.2,
          }}
        >
          직접 입력
        </div>

        {/* 직접 입력 아이콘 */}
        <img
          style={{
            width: 64 * scale,
            height: 64 * scale,
            left: 505 * scale,
            top: 26 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/pen.png"
          alt="Input"
        />

        {/* 선택된 탭 언더라인 */}
        <div
          style={{
            width: 360 * scale,
            height: 0,
            left: 0,
            top: 171 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #fb7185`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />

        {/* 카메라 영역 (검은 배경) */}
        <div
          style={{
            width: 720 * scale,
            height: 942 * scale,
            left: 0,
            top: 171 * scale,
            position: "absolute",
            background: "black",
          }}
        />

        {/* 하단 영역 */}
        <div
          style={{
            width: 720 * scale,
            height: 160 * scale,
            left: 0,
            top: 1113 * scale,
            position: "absolute",
            background: "#27272a",
          }}
        />

        {/* 카메라 전환 버튼 (하단 중앙) */}
        <div
          style={{
            left: 350 * scale,
            top: 1170 * scale,
            position: "absolute",
            width: 60 * scale,
            height: 60 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <div style={{ color: "white", fontSize: 24 * scale }}>🔄</div>
        </div>

        {/* 안내 텍스트 */}
        <div
          style={{
            left: 128 * scale,
            top: 822 * scale,
            position: "absolute",
            textAlign: "center",
            color: "white",
            fontSize: 30 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: 1.5,
            wordWrap: "break-word",
          }}
        >
          이미 소지하고 있는 실물카드, 제휴카드
          <br />
          뒷면의 바코드를 인식해 주세요.
        </div>

        {/* 바코드 인식 영역 표시선 */}
        <div
          style={{
            width: 601 * scale,
            height: 0,
            left: 59 * scale,
            top: 622 * scale,
            position: "absolute",
            outline: `${4 * scale}px solid #ef4444`,
            outlineOffset: `${-2 * scale}px`,
          }}
        />

        {/* 뒤로가기 버튼 */}
        <div
          onClick={onBack}
          style={{
            position: "absolute",
            left: 20 * scale,
            top: 20 * scale,
            width: 50 * scale,
            height: 50 * scale,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30 * scale,
            color: "black",
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          ←
        </div>

        {/* 카메라 권한 요청 모달 */}
        {showPermissionModal && (
          <>
            {/* 어두운 배경 */}
            <div
              style={{
                width: 720 * scale,
                height: 1280 * scale,
                left: 0,
                top: 0,
                position: "absolute",
                background: "rgba(0,0,0,0.5)",
              }}
            />

            {/* 모달 박스 */}
            <div
              style={{
                width: 506 * scale,
                height: 320 * scale,
                left: 107 * scale,
                top: 457 * scale,
                position: "absolute",
                background: "#404040",
                borderRadius: 24 * scale,
              }}
            />

            {/* 모달 제목 */}
            <div
              style={{
                left: 170 * scale,
                top: 500 * scale,
                position: "absolute",
                textAlign: "center",
                color: "white",
                fontSize: 30 * scale,
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: 1.3,
                wordWrap: "break-word",
              }}
            >
              '밀양사랑카드'이(가)
              <br />
              카메라에 접근하려고 합니다.
            </div>

            {/* 모달 설명 */}
            <div
              style={{
                left: 139 * scale,
                top: 590 * scale,
                position: "absolute",
                textAlign: "center",
                color: "white",
                fontSize: 24 * scale,
                fontFamily: "Inter",
                fontWeight: "500",
                lineHeight: 1.5,
                wordWrap: "break-word",
              }}
            >
              카드등록, 신분증촬영을 위한 카메라 접근
              <br />
              권한이 필요합니다.
            </div>

            {/* 버튼 구분선 */}
            <div
              style={{
                width: 506 * scale,
                height: 0,
                left: 107 * scale,
                top: 692 * scale,
                position: "absolute",
                outline: `${3 * scale}px solid rgba(255,255,255,0.2)`,
                outlineOffset: `${-1.5 * scale}px`,
              }}
            />

            {/* 세로 구분선 */}
            <div
              style={{
                width: 0,
                height: 64 * scale,
                left: 358 * scale,
                top: 691 * scale,
                position: "absolute",
                outline: `${3 * scale}px solid rgba(255,255,255,0.2)`,
                outlineOffset: `${-1.5 * scale}px`,
              }}
            />

            {/* 허용 안 함 버튼 */}
            <div
              onClick={handleDenyCamera}
              style={{
                left: 180 * scale,
                top: 707 * scale,
                position: "absolute",
                textAlign: "center",
                color: "#3b82f6",
                fontSize: 24 * scale,
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: 1.5,
                cursor: "pointer",
                padding: `${10 * scale}px`,
              }}
            >
              허용 안 함
            </div>

            {/* 허용 버튼 */}
            <div
              onClick={handleAllowCamera}
              style={{
                left: 437 * scale,
                top: 707 * scale,
                position: "absolute",
                textAlign: "center",
                color: "#3b82f6",
                fontSize: 30 * scale,
                fontFamily: "Inter",
                fontWeight: "600",
                lineHeight: 1.5,
                cursor: "pointer",
                padding: `${10 * scale}px`,
                animation: "bounce 2s infinite",
              }}
            >
              허용
            </div>
          </>
        )}

        {/* 카메라 플래시 이펙트 */}
        {showCameraFlash && (
          <div
            style={{
              width: 720 * scale,
              height: 1280 * scale,
              left: 0,
              top: 0,
              position: "absolute",
              background: "white",
              animation: "flash 0.3s ease-out",
              zIndex: 1000,
            }}
          />
        )}

        {/* 플래시 애니메이션 CSS */}
        <style jsx>{`
          @keyframes flash {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

const CardInfoPage = ({ windowHeight, onBack, onComplete }) => {
  // 화면 높이에 따라 스케일 조정
  const getScale = () => {
    if (windowHeight >= 1000) {
      return 0.75;
    }
    return 0.5;
  };

  const scale = getScale();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 720 * scale,
          height: 1280 * scale,
          position: "relative",
          background: "white",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "20px",
        }}
      >
        <img
          style={{
            width: 350 * scale,
            height: 400 * scale,
            left: "50%",
            transform: "translateX(-50%)",
            top: "10px",
            position: "absolute",
          }}
          src="/miryang/cardregister/pigcard.png"
          alt="Info"
        />
        {/* 카드 정보 제목 */}
        <div
          style={{
            left: 81 * scale,
            top: 444 * scale,
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontSize: 33 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: 1.1,
            wordWrap: "break-word",
          }}
        >
          카드 정보
        </div>

        {/* 구분선 */}
        <div
          style={{
            width: 574 * scale,
            height: 0,
            left: 73 * scale,
            top: 518 * scale,
            position: "absolute",
            outline: `${2 * scale}px solid #E8E8E8`,
            outlineOffset: `${-1 * scale}px`,
          }}
        />

        {/* 카드 정보 라벨들 */}
        <div
          style={{
            left: 81 * scale,
            top: 544 * scale,
            position: "absolute",
            color: "#888888",
            fontSize: 28 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: 1.6,
            wordWrap: "break-word",
          }}
        >
          카드명
          <br />
          총 보유 금액
          <br />
          유효기간(MM/YY)
        </div>

        {/* 카드 정보 값들 */}
        <div
          style={{
            left: 389 * scale,
            top: 544 * scale,
            position: "absolute",
            textAlign: "right",
            color: "black",
            fontSize: 28 * scale,
            fontFamily: "Inter",
            fontWeight: "700",
            lineHeight: 1.6,
            wordWrap: "break-word",
          }}
        >
          밀양사랑카드(굿바비)
          <br />
          0원
          <br />
          12/34
        </div>

        {/* 정보 아이콘 */}

        {/* 안내 메시지 */}
        <div
          style={{
            left: 122 * scale,
            top: 697 * scale,
            position: "absolute",
            color: "#FE4458",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            lineHeight: 1.9,
            wordWrap: "break-word",
          }}
        >
          카드 등록 시 자동으로 소득공제 신청이 완료됩니다.
        </div>

        {/* 카드등록 버튼 */}
        <div
          onClick={onComplete}
          style={{
            width: 720 * scale,
            height: 113 * scale,
            left: 0,
            top: 1130 * scale,
            position: "absolute",
            background: "#E86696",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#d14d71";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#E86696";
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 32 * scale,
              fontFamily: "Inter",
              fontWeight: "600",
              lineHeight: 1.2,
              animation: "bounce 2s infinite",
            }}
          >
            카드등록
          </div>
        </div>

        {/* 뒤로가기 버튼 */}
        <div
          onClick={onBack}
          style={{
            position: "absolute",
            left: 20 * scale,
            top: 20 * scale,
            width: 50 * scale,
            height: 50 * scale,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 30 * scale,
            color: "black",
            backgroundColor: "rgba(255,255,255,0.8)",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          ←
        </div>
      </div>
    </div>
  );
};

const CompletePage = ({ windowHeight, navigate }) => {
  const getScale = () => {
    if (windowHeight >= 1000) {
      return 0.75;
    }
    return 0.5;
  };

  const scale = getScale();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 720 * scale,
          height: 1280 * scale,
          position: "relative",
          background: "white",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          borderRadius: "20px",
        }}
      >
        {/* 카드관리 텍스트 */}
        <div
          style={{
            left: 22 * scale,
            top: 65 * scale,
            position: "absolute",
            color: "black",
            fontSize: 24 * scale,
            fontFamily: "Inter",
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          카드관리
        </div>

        {/* 상단 아이콘 */}
        <img
          style={{
            width: 46 * scale,
            height: 46 * scale,
            left: 44 * scale,
            top: 18 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/top.png"
        />

        {/* 소득공제 신청 완료 배경 */}
        <div
          style={{
            width: 208 * scale,
            height: 40 * scale,
            left: 256 * scale,
            top: 137 * scale,
            position: "absolute",
            background: "#FF9622",
            borderRadius: 4 * scale,
          }}
        />

        {/* 소득공제 신청 완료 텍스트 */}
        <div
          style={{
            left: 278 * scale,
            top: 143 * scale, // 위치 조정
            position: "absolute",
            color: "white",
            fontSize: 21 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
            textAlign: "center",
          }}
        >
          소득공제 신청 완료
        </div>

        {/* 밀양사랑카드(굿바비) 제목 */}
        <div
          style={{
            left: 192 * scale,
            top: 181 * scale,
            position: "absolute",
            color: "black",
            fontSize: 37 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          밀양사랑카드(굿바비)
        </div>

        {/* 카드 이미지 */}
        <img
          style={{
            width: 350 * scale,
            height: 553 * scale,
            left: 185 * scale,
            top: 250 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/pig_2.png"
        />

        {/* 점선 테두리 */}
        <div
          style={{
            width: 552 * scale,
            height: 553 * scale,
            left: 611 * scale,
            top: 250 * scale,
            position: "absolute",
            border: `${3 * scale}px #CCCCCC solid`,
            borderStyle: "dashed",
          }}
        />

        {/* 카드 정보 버튼 */}
        <div
          style={{
            width: 291 * scale,
            height: 56 * scale,
            left: 214 * scale,
            top: 835 * scale,
            position: "absolute",
            borderRadius: 7 * scale,
            border: `${3 * scale}px #3C3C3C solid`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10 * scale,
          }}
        >
          <div
            style={{
              color: "black",
              fontSize: 27 * scale,
              fontFamily: "Inter",
              fontWeight: "600",
            }}
          >
            카드 정보
          </div>
          <img
            style={{
              width: 42 * scale,
              height: 37 * scale,
            }}
            src="/miryang/cardregister/cardinfo.png"
          />
        </div>

        {/* 사용 가능 금액 배경 */}
        <div
          style={{
            width: 628 * scale,
            height: 105 * scale,
            left: 46 * scale,
            top: 922 * scale,
            position: "absolute",
            background: "#2D3451",
            borderRadius: 15 * scale,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `0 ${30 * scale}px`,
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 27 * scale,
              fontFamily: "Inter",
              fontWeight: "600",
            }}
          >
            사용 가능 금액
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 10 * scale }}
          >
            <div
              style={{
                color: "white",
                fontSize: 32 * scale,
                fontFamily: "Inter",
                fontWeight: "600",
              }}
            >
              0원
            </div>
            <div
              style={{
                width: 34 * scale,
                height: 17 * scale,
                outline: `${4 * scale}px white solid`,
                outlineOffset: `${-2 * scale}px`,
              }}
            />
          </div>
        </div>

        {/* 하단 아이콘들 */}
        <img
          style={{
            width: 89 * scale,
            height: 78 * scale,
            left: 122 * scale,
            top: 1096 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/plus.png"
        />
        <img
          style={{
            width: 89 * scale,
            height: 78 * scale,
            left: 318 * scale,
            top: 1096 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/money.png"
        />
        <img
          style={{
            width: 89 * scale,
            height: 78 * scale,
            left: 514 * scale,
            top: 1096 * scale,
            position: "absolute",
          }}
          src="/miryang/cardregister/percent.png"
        />

        {/* 하단 텍스트들 */}
        <div
          style={{
            left: 141 * scale,
            top: 1181 * scale,
            position: "absolute",
            color: "black",
            fontSize: 28 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          충전
        </div>
        <div
          style={{
            left: 311 * scale,
            top: 1181 * scale,
            position: "absolute",
            color: "black",
            fontSize: 28 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          이용내역
        </div>
        <div
          style={{
            left: 507 * scale,
            top: 1181 * scale,
            position: "absolute",
            color: "black",
            fontSize: 28 * scale,
            fontFamily: "Inter",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          혜택정보
        </div>
      </div>
    </div>
  );
};
export default RegisterCardGuide;
