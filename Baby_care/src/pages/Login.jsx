import InputField from "../components/InputField";

function Login (){

    const formData = [{name:"userName",placeholder:"userName",id:1},{name:"password",placeholder:"password", id:2},{name:"password",placeholder:"password", id:2}];

    return(<>
    <h1>This is Login</h1>
    <form >
    <InputField props = {formData}/>    
    </form>
    </>)
};

export default Login;