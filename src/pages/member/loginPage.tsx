import LoginComponent from "../../components/member/loginComponent";
import BasicMenu from "../../components/menus/bascMenu";

function LoginPage() {
    return (  
        <div className='fixed top-0 left-0 z-[1055] flex flex-col h-full w-full'>
          <BasicMenu/>
           <div className="flex flex-wrap w-full h-full justify-center items-center border-2"> 
                <LoginComponent/>
            </div> 
        </div>
    );
}

export default LoginPage;