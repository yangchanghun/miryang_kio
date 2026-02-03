import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import KakaoTGuideBtn from "./modal/KakaoTGuideBtn";
import KakaoTGuide from "./modal/KakaoTGuide";
import HomeButton from "../../utils/HomeButton";
interface KakaoPlace {
  place_name: string;
  address_name: string;
  x: string;
  y: string;
}

interface Place {
  place_name: string;
  address_name: string;
  x: string;
  y: string;
}

export default function KakaoSearch() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentX = location.state?.currentX as string | undefined;
  const currentY = location.state?.currentY as string | undefined;

  const [modal, setModal] = useState(false);
  const [_, setCurrentAddress] = useState("");
  const [startInput, setStartInput] = useState("");
  const [destInput, setDestInput] = useState("");
  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const [activeInput, setActiveInput] = useState<"start" | "dest" | null>(null);
  const [finalStart, setFinalStart] = useState("");
  const [finalDest, setFinalDest] = useState("");
  const [startCoords, setStartCoords] = useState({
    x: currentX ?? "",
    y: currentY ?? "",
  });
  const [destCoords, setDestCoords] = useState({ x: "", y: "" });
  const [isLoading, setIsLoading] = useState(false);

  const startRef = useRef<HTMLInputElement>(null);
  const destRef = useRef<HTMLInputElement>(null);

  const BASE_URL = "https://smartkio.kioedu.co.kr";

  /* =====================
     현재 위치 주소 변환
  ===================== */
  useLayoutEffect(() => {
    if (!window.kakao?.maps?.services || !currentX || !currentY) return;

    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.coord2Address(
      Number(currentX),
      Number(currentY),
      (res, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const addr = res[0].address.address_name;
          setCurrentAddress(addr);
          setStartInput(addr);
          setFinalStart(addr);
          setStartCoords({ x: currentX, y: currentY });
        }
      },
    );
  }, [currentX, currentY]);

  /* =====================
     주소 검색
  ===================== */
  const searchAddress = (keyword: string) => {
    if (!keyword.trim() || !window.kakao?.maps?.services) {
      setSearchResults([]);
      return;
    }

    const places = new window.kakao.maps.services.Places();
    places.keywordSearch(keyword, (data, status) => {
      if (status === window.kakao.maps.services.Status.OK) {
        setSearchResults(data.slice(0, 5));
      } else {
        setSearchResults([]);
      }
    });
  };

  /* =====================
     경로 검색
  ===================== */
  const searchRoute = async () => {
    if (!finalStart || !finalDest || !startCoords.x || !destCoords.x) return;

    setIsLoading(true);

    try {
      const res = await axios.post(`${BASE_URL}/api/navigation/directions/`, {
        origin: `${startCoords.x},${startCoords.y}`,
        destination: `${destCoords.x},${destCoords.y}`,
        priority: "RECOMMEND",
      });

      navigate("/miryang/kakaot/result", {
        state: {
          routeData: res.data,
          startLocation: { name: finalStart, coords: startCoords },
          destLocation: { name: finalDest, coords: destCoords },
        },
      });
    } catch {
      alert("경로 검색 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (finalStart && finalDest && startCoords.x && destCoords.x) {
      searchRoute();
    }
  }, [finalStart, finalDest, startCoords, destCoords]);

  /* =====================
     입력 처리
  ===================== */
  const handleChange = (type: "start" | "dest", value: string) => {
    if (type === "start") {
      setStartInput(value);
    } else {
      setDestInput(value);
    }

    setActiveInput(type);
    searchAddress(value);
  };

  const selectPlace = (place: Place) => {
    if (activeInput === "start") {
      setStartInput(place.place_name);
      setFinalStart(place.place_name);
      setStartCoords({ x: place.x, y: place.y });
      startRef.current?.blur();
    } else {
      setDestInput(place.place_name);
      setFinalDest(place.place_name);
      setDestCoords({ x: place.x, y: place.y });
      destRef.current?.blur();
    }
    setSearchResults([]);
    setActiveInput(null);
  };

  return (
    <div className="mx-auto min-h-screen max-w-[785px] bg-white">
      <audio
        src="/kakaot/audio/도착지 입력란에 가시고자 하는 목적지.m4a"
        autoPlay
      />

      {/* HEADER */}
      <header className="flex items-center px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded hover:bg-gray-100"
        >
          ←
        </button>
      </header>

      {/* INPUTS */}
      <div className="px-6">
        <div className="rounded-xl border shadow">
          <div className="flex items-center gap-4 px-5 py-4 border-b">
            <span className="h-2 w-2 rounded-full bg-gray-600" />
            <input
              ref={startRef}
              value={startInput}
              placeholder="출발지를 입력하세요"
              onChange={(e) => handleChange("start", e.target.value)}
              className="flex-1 text-lg outline-none"
            />
          </div>

          <div className="flex items-center gap-4 px-5 py-4">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <input
              ref={destRef}
              value={destInput}
              placeholder="도착지를 입력하세요"
              onChange={(e) => handleChange("dest", e.target.value)}
              className="flex-1 text-lg text-red-500 outline-none"
            />
          </div>
        </div>

        {/* SEARCH RESULTS */}
        {searchResults.length > 0 && (
          <div className="mt-4 rounded-lg border shadow">
            {searchResults.map((p, i) => (
              <div
                key={i}
                onClick={() => selectPlace(p)}
                className="flex justify-between gap-4 px-5 py-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              >
                <div>
                  <p className="font-medium">{p.place_name}</p>
                  <p className="text-sm text-gray-500">{p.address_name}</p>
                </div>
                <span className="text-blue-500 font-semibold">
                  {activeInput === "start" ? "출발" : "도착"}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* LOADING */}
        {isLoading && (
          <div className="mt-20 flex flex-col items-center text-gray-500">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
            <p className="mt-4">경로를 검색하고 있습니다...</p>
          </div>
        )}
      </div>

      <KakaoTGuideBtn setModal={setModal} />
      {modal && <KakaoTGuide setModal={setModal} />}
      <HomeButton />
    </div>
  );
}
