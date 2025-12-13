export default function RotatingDice() {
  return (
    <div className="relative w-[260px] h-[260px] mx-auto flex items-center justify-center perspective-[1200px]">
      
      <div className="dice-rotate relative w-[140px] h-[140px]">

        {/* Cube 1 */}
        <div className="absolute w-[70px] h-[70px] bg-gradient-to-br from-cyan-400 to-blue-600 
                        rounded-xl shadow-xl top-0 left-0" />

        {/* Cube 2 */}
        <div className="absolute w-[70px] h-[70px] bg-gradient-to-br from-purple-500 to-pink-500 
                        rounded-xl shadow-xl top-0 right-0" />

        {/* Cube 3 */}
        <div className="absolute w-[70px] h-[70px] bg-gradient-to-br from-orange-500 to-yellow-400 
                        rounded-xl shadow-xl bottom-0 left-0" />

        {/* Cube 4 */}
        <div className="absolute w-[70px] h-[70px] bg-gradient-to-br from-emerald-400 to-teal-500 
                        rounded-xl shadow-xl bottom-0 right-0" />

      </div>
    </div>
  );
}
