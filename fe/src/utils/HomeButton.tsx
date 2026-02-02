import { useNavigate } from "react-router-dom";

interface HomeButtonProps {
  address?: string;
}

export default function HomeButton({ address = "" }: HomeButtonProps) {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate(address === "milyang" ? "/miryang/appguide/main" : "/");
  };

  return (
    <button
      onClick={handleHomeClick}
      aria-label="처음으로"
      className="
        fixed bottom-[70px] right-[20px] z-[1000]
        w-20 h-20 rounded-full
        bg-gradient-to-br from-red-400 to-orange-400
        flex flex-col items-center justify-center
        text-white
        shadow-lg
        transition
        active:scale-95
        hover:-translate-y-1 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-white
      "
    >
      <span className="text-[20px] leading-none mb-[2px]">🏠</span>
      <span className="text-[15px] font-medium leading-none opacity-90">
        처음으로
      </span>
    </button>
  );
}
