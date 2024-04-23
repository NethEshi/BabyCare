import InputField from "../components/InputField";

function SignUp() {
  const formData = [
    { name: "Name", placeholder: "Name", id: 1 },
    { name: "Distict", placeholder: "District", id: 2 },
    { name: "Hospital", placeholder: "Hospital", id: 3 },
    { name: "Email Address", placeholder: "Your Emal", id: 4 },
    { name: "Password", placeholder: "Password", id: 5 },
    { name: "Confirm Password", placeholder: "Confirm Password", id: 6 },
  ];

  return (
    <>
    
      <h1 className = "text-4xl p-60 lm-100" >Sign Up for Account</h1>
      <form>
        <InputField dataArr={formData} />
      </form>
    </>
  );
}

export default SignUp;
