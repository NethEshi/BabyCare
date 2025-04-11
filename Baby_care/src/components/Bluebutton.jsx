
function Bluebutton({name, stat}) {
  return (
    <>
    <button className= {`w-[275px] h-[78.05px] bg-NavyBlue text-white font-poppins ${!stat ? "bg-opacity-40" : "hover:scale-105"} rounded-full`} disabled = {!stat} >{name}</button>
    </>
  );
}

export default Bluebutton;