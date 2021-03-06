import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";
import starcraftImg from "../img/starcraft.png";

const Header = (props) => {
    const { is_login } = props;
    const history = useHistory();
    const dispatch = useDispatch();

    const confirmLogOut = () => {
        if (window.confirm("로그아웃 하시겠습니까?")) {
            dispatch(userActions.logOutDB());
        }
    };

    if (is_login) {
        return (
            <React.Fragment>
                <Navbar>
                    <Logo src={starcraftImg} onClick={() => history.push("/")} />
                    <BtnContainer>
                        <Button text="로그아웃" width="150px" height="40px" className="signOut_btn" _onClick={confirmLogOut} />
                    </BtnContainer>
                </Navbar>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <Navbar>
                    <Logo src={starcraftImg} onClick={() => history.push("/")} />
                    <BtnContainer>
                        <Button text="로그인" width="150px" height="40px" className="signIn_btn" _onClick={() => history.push("/login")} />
                        <Button text="회원가입" width="150px" height="40px" className="signUp_btn" _onClick={() => history.push("/signup")} />
                    </BtnContainer>
                </Navbar>
            </React.Fragment>
        );
    }
};

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
    width: 150px;
    height: 80px;
    line-height: 80px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10%;
    cursor: pointer;

    ${({ theme }) => theme.device.desktop} {
        width: 120px;
        height: 60px;
    }

    ${({ theme }) => theme.device.tablet} {
        width: 100px;
        height: 50px;
    }

    ${({ theme }) => theme.device.mobile} {
        width: 80px;
        height: 30px;
    }
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
