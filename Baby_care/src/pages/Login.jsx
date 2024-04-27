import InputField from "../components/InputField";

function Login() {
  const formData = [
    { name: "userName", placeholder: "userName", id: 1 },
    { name: "password", placeholder: "password", id: 2 },
    { name: "password", placeholder: "password", id: 3 },
  ];

  return (
    <>
      <h1 className = "text-4xl p-60 lm-100">Sign In for Account</h1>
      <div className = "text-2xl ">
        <form>
          <InputField dataArr={formData} />
        </form>
      </div>
    </>
  );
}

export default Login;
