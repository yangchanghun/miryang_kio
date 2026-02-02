import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "./layout/MobileLayout";
import CommonModal from "./common/CommonModal";
import HomeButton from "../../utils/HomeButton";

export default function AddressSearchPage() {
  const [onModal, setOnModal] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleCurrentLocation = () => {
    localStorage.setItem("address", "밀양시청");
    localStorage.setItem("latitude", "35.503777640163364");
    localStorage.setItem("longtitude", "128.7465438723983");
    navigate("/miryang/ddangyo/address/detail/");
  };

  return (
    <MobileLayout>
      <div className="flex h-full flex-col bg-white">
        <div className="flex flex-1 flex-col p-6 max-[480px]:p-5">
          {/* 헤더 */}
          <div className="mb-8 text-center">
            <h1 className="text-[24px] font-bold text-[#333] max-[480px]:text-[22px]">
              배달 주소 검색
            </h1>
          </div>

          <audio src="/ddangyo/voice/3.mp3" autoPlay />

          {/* 검색 영역 */}
          <div className="mb-10">
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative flex items-center rounded-[25px] border border-[#e0e0e0] bg-white px-5 py-1 shadow-[0_2px_10px_rgba(0,0,0,0.1)] max-[480px]:px-4">
                <input
                  value={searchValue}
                  onChange={handleSearch}
                  onClick={() => setOnModal(true)}
                  placeholder="지번, 도로명, 건물명을 검색해보세요."
                  className="flex-1 bg-transparent py-[14px] text-[15px] text-[#333] outline-none placeholder:text-[#999] max-[480px]:py-3 max-[480px]:text-[14px]"
                />
                <button
                  type="submit"
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f5f5f5] transition hover:bg-[#e0e0e0] active:scale-95 max-[480px]:h-[36px] max-[480px]:w-[36px]"
                >
                  🔍
                </button>
              </div>
            </form>

            <button
              onClick={handleCurrentLocation}
              className="flex w-full items-center justify-center rounded-[12px] border border-[#e0e0e0] bg-white py-4 text-[15px] font-medium text-[#ff6b35] transition hover:bg-[#fff5f2] hover:border-[#ff6b35] active:translate-y-[1px] max-[480px]:py-3.5 max-[480px]:text-[14px]"
            >
              <span className="mr-2">📍</span>
              현재 위치로 주소 설정
            </button>
          </div>

          {/* 일러스트 */}
          <div className="my-5 flex flex-1 items-center justify-center">
            <div className="relative h-[200px] w-[200px] max-[480px]:h-[180px] max-[480px]:w-[180px]">
              {/* 지도 */}
              <div className="absolute bottom-0 left-1/2 h-[100px] w-[160px] -translate-x-1/2 rounded-[12px] bg-[#e8f5e8] shadow-[0_4px_12px_rgba(0,0,0,0.1)] max-[480px]:h-[85px] max-[480px]:w-[140px]">
                <div className="absolute top-1/2 h-[10px] w-full -translate-y-1/2 bg-[#ddd]" />
                <div className="absolute left-1/2 h-full w-[10px] -translate-x-1/2 bg-[#ddd]" />

                <div className="absolute left-[16px] top-[12px] h-[32px] w-[24px] rounded-[2px] bg-[#ff6b4a]" />
                <div className="absolute right-[20px] top-[16px] h-[28px] w-[20px] rounded-[2px] bg-[#4a90e2]" />

                <div className="absolute left-[48px] top-[20px] h-[12px] w-[12px] rounded-full bg-[#4caf50]" />
                <div className="absolute bottom-[20px] right-[48px] h-[12px] w-[12px] rounded-full bg-[#4caf50]" />
              </div>

              {/* 핀 */}
              <div className="absolute left-[40px] top-[10px] z-10 animate-bouncePin">
                <div className="relative">
                  <div className="h-[32px] w-[32px] rounded-full border-[3px] border-white bg-gradient-to-br from-[#ff6b9d] to-[#ff1744] shadow-[0_2px_8px_rgba(0,0,0,0.2)]" />
                  <div className="absolute bottom-[-6px] left-1/2 h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#ff1744]" />
                </div>
              </div>

              {/* 펭귄 */}
              <div className="absolute right-[15px] top-[60px]">
                <div className="relative h-[75px] w-[60px] rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-[#87ceeb]">
                  <div className="absolute left-1/2 top-[15px] h-[45px] w-[38px] -translate-x-1/2 rounded-full bg-white" />

                  <div className="absolute left-1/2 top-[-12px] h-[45px] w-[45px] -translate-x-1/2 rounded-full border-[2px] border-[#87ceeb] bg-white">
                    <div className="absolute left-[12px] top-[15px] h-[6px] w-[6px] rounded-full bg-[#333]" />
                    <div className="absolute right-[12px] top-[15px] h-[6px] w-[6px] rounded-full bg-[#333]" />
                  </div>

                  <div className="absolute left-[-6px] top-[22px] h-[30px] w-[15px] rotate-[-20deg] rounded-full bg-[#87ceeb]" />
                  <div className="absolute right-[-6px] top-[22px] h-[30px] w-[15px] rotate-[20deg] rounded-full bg-[#87ceeb]" />
                </div>
              </div>
            </div>
          </div>

          {/* 안내 */}
          <div className="mt-5 text-center">
            <p className="text-[16px] leading-[1.4] text-[#666] max-[480px]:text-[15px]">
              주소는 한 번 등록하면
              <br />
              다음부터는 편하게 이용할 수 있어요
            </p>
          </div>
        </div>
      </div>

      <CommonModal
        onModal={onModal}
        setOnModal={setOnModal}
        title="땡겨요 이용하기"
        steps={["배달받을 위치설정을 위해 현재 위치 주소 설정을 선택해주세요"]}
      />

      <button
        onClick={() => setOnModal(true)}
        className="fixed bottom-[200px] right-[20px] rounded-full bg-[#ff6b35] px-4 py-2.5 text-[14px] font-semibold text-white shadow hover:bg-[#e55a2e]"
      >
        사용법 다시보기
      </button>

      <HomeButton />
    </MobileLayout>
  );
}
