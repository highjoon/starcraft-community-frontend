import React from "react";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getCookie } from "../shared";
import { Button } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";
import starcraftImg from "../img/starcraft.png";

const Header = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const is_login = useSelector((state) => state.user.is_login);
    const cookie = getCookie("user_login") ? true : false;

    // const confirmLogOut = () => {
    //     if (window.confirm("로그아웃 하시겠습니까?")) {
    //         dispatch(userActions.logOut());
    //         window.alert("로그아웃 되었습니다.");
    //         history.push("/");
    //     }
    // };

    const checkLogin = () => dispatch(userActions.logInCheckDB());
    const logOut = () => dispatch(userActions.logOutDB());

    return (
        <React.Fragment>
            <Navbar>
                <Logo src={starcraftImg} onClick={() => history.push("/")} />
                <BtnContainer>
                    <Button text="로그인" className="signIn_btn" _onClick={() => history.push("/login")} />
                    <Button text="회원가입" className="signUp_btn" _onClick={() => history.push("/signup")} />
                    <Button text="로그인 체크" className="logInChk_btn" _onClick={checkLogin} />
                    <Button text="로그아웃" className="signOut_btn" _onClick={logOut} />
                </BtnContainer>
            </Navbar>
        </React.Fragment>
    );

    // if (is_login && cookie) {
    //     return (
    //         <React.Fragment>
    //             <Navbar>
    //                 <Logo src={starcraftImg} onClick={() => history.push("/")} />
    //                 <BtnContainer>
    //                     <Button text="로그아웃" className="signOut_btn" _onClick={confirmLogOut} />
    //                 </BtnContainer>
    //             </Navbar>
    //         </React.Fragment>
    //     );
    // } else {
    //     return (
    //         <React.Fragment>
    //             <Navbar>
    //                 <Logo src={starcraftImg} onClick={() => history.push("/")} />
    //                 <BtnContainer>
    //                     <Button text="로그인" className="signIn_btn" _onClick={() => history.push("/login")} />
    //                     <Button text="회원가입" className="signUp_btn" _onClick={() => history.push("/signup")} />
    //                 </BtnContainer>
    //             </Navbar>
    //         </React.Fragment>
    //     );
    // }
};

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
    width: 150px;
    height: 80px;
    line-height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10%;
    cursor: pointer;
`;

const BtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-right: 10%;

    & .signIn_btn {
        margin-right: 20px;
    }
`;

export default Header;
