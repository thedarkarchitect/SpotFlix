
import HeadPage from "./headPage";

export default function SignupPage(){
    return(
        <>
            <HeadPage
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <Signup/>
        </>
    )
}