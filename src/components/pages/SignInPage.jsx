import MemberFrame from "../layouts/frames/MemberFrame";
import SignInContent from "../layouts/contents/SignInContent";

const SignInPage = () => {
    return (
        <MemberFrame content={<SignInContent/>}/>
    )
}
export default SignInPage;