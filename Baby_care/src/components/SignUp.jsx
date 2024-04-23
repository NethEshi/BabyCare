


const SignUp = () => {
  return (
    <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[42px] max-w-full mq450:gap-[21px]">
      <div className="relative text-15xl-3 font-medium font-poppins text-darkslategray text-left inline-block max-w-full mq450:text-2xl mq750:text-8xl">
        Sign Up for Account
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11px] box-border gap-[43px] max-w-full mq450:gap-[21px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
          <FrameComponent1
            hospitalName="Hospital Name"
            hospitalNamePlaceholder="Hospital Name"
          />
          <FrameComponent1
            hospitalName="District"
            hospitalNamePlaceholder="District"
            propWidth="125.4px"
            propWidth1="49px"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
            <div className="w-[231.8px] flex flex-row items-start justify-start py-0 pr-[3px] pl-[2.7px] box-border">
              <div className="flex-1 relative text-lg font-medium font-poppins text-darkslategray text-left shrink-0">
                Type
              </div>
            </div>
            <div className="self-stretch bg-whitesmoke box-border flex flex-row items-start justify-between pt-3 pb-[13px] pr-5 pl-[26px] max-w-full gap-[20px] border-[1px] border-solid border-gainsboro-200">
              <div className="h-[50px] w-[375px] relative bg-whitesmoke box-border hidden max-w-full border-[1px] border-solid border-gainsboro-200" />
              <div className="relative text-sm font-medium font-poppins text-darkgray text-left inline-block min-w-[44px] z-[1]">
                Select
              </div>
              <img
                className="h-[21px] w-[19px] relative overflow-hidden shrink-0 min-h-[21px] z-[1]"
                alt=""
                src="/iconparkoutlinedown.svg"
              />
            </div>
          </div>
          <FrameComponent1
            hospitalName="Email Address"
            hospitalNamePlaceholder="Your Email"
            propWidth="181.3px"
            propWidth1="141.8px"
          />
          <FrameComponent1
            hospitalName="Password"
            hospitalNamePlaceholder="Your Password"
            propWidth="125.4px"
            propWidth1="141.8px"
          />
          <FrameComponent1
            hospitalName="Confirm Password"
            hospitalNamePlaceholder="Your Password"
            propWidth="231.8px"
            propWidth1="141.8px"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[11px] max-w-full">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
            <input
              className="m-0 w-[25px] h-[25px] relative rounded-10xs box-border border-[1px] border-solid border-dimgray"
              type="checkbox"
            />
          </div>
          <div className="relative text-lg font-medium font-poppins text-left">
            <span className="text-darkslategray">I accept all</span>
            <span className="text-blue">{` `}</span>
            <span className="text-royalblue">terms and condition</span>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-3 pb-[11px] pr-5 pl-[21px] bg-darkslateblue-400 self-stretch flex flex-row items-start justify-center box-border max-w-full hover:bg-darkslateblue-200">
        <div className="h-[50px] w-[375px] relative bg-darkslateblue-400 hidden max-w-full" />
        <div className="relative text-lg font-medium font-poppins text-white text-left inline-block min-w-[74px] z-[1]">
          Register
        </div>
      </button>
    </form>
  );
};

export default SignUp;
