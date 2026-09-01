import { OysterIcon } from "../icons/Oyster";

function Divider({ bgColor = "white", my = 0, type = "base" }) {
  if (type === "base")
    return (
      <div
        className="w-full flex flex-col items-center"
        style={{ marginTop: my, marginBottom: my }}
      >
        <div className="h-1 w-24" style={{ backgroundColor: bgColor }} />
      </div>
    );

  return (
    <div className="w-full  flex justify-center items-baseline gap-8 mb-3">
      <div className="-rotate-[25deg]">
        <OysterIcon color="#0d5eba" size="40px" />
      </div>
      <div className="pb-2">
        <OysterIcon color="#0d5eba" />
      </div>
      <div className="rotate-[25deg]">
        <OysterIcon color="#0d5eba" size="40px" />
      </div>
    </div>
  );
}

export default Divider;
