
function Bluebutton({name, stat}) {
  return (
    <>
    <button className= "w-[275px] h-[78.05px] bg-NavyBlue text-white font-poppins hover:scale-105" disabled = {!stat} >{name}</button>
    </>
  );
}

export default Bluebutton;