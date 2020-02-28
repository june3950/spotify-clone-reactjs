import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import { useSelector } from "react-redux";
import {
  NavContainer,
  NavRightWrapper,
  NavLeftWrapper,
  UpgradeLink,
  UpgradeButton,
  Avatar,
  UpgradeText,
  Name,
  ArrowDownIconContainer,
  NavSubcontainer,
  ArrowsContainer,
  ArrowIconContainer,
  UserContainer
} from "./navbarStyles";
import { ReactComponent as ArrowDown } from "../../assets/icons/down-arrow.svg";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/arrow-right.svg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { images, display_name } = useSelector(({ auth }) => auth.user);
  const { pathname } = useLocation();
  return (
    <NavContainer>
      <NavSubcontainer>
        <NavLeftWrapper>
          <ArrowsContainer>
            <ArrowIconContainer>
              <ArrowLeft fill="#fff" width={22} height={22} />
            </ArrowIconContainer>
            <ArrowIconContainer>
              <ArrowRight fill="#fff" width={22} height={22} />
            </ArrowIconContainer>
          </ArrowsContainer>
          {pathname === "/app/search" && <SearchInput />}
        </NavLeftWrapper>
        <NavRightWrapper>
          <UpgradeLink
            href="https://www.spotify.com/premium"
            target="_blank"
            rel="noopener noreferrer"
            title="Upgrade to Premium"
          >
            <UpgradeButton>
              <UpgradeText>upgrade</UpgradeText>
            </UpgradeButton>
          </UpgradeLink>
          <UserContainer>
            {images && <Avatar src={images[0].url} />}
            <Name>{display_name}</Name>
            <ArrowDownIconContainer>
              <ArrowDown fill="#fff" width={16} height={16} />
            </ArrowDownIconContainer>
          </UserContainer>
        </NavRightWrapper>
      </NavSubcontainer>
    </NavContainer>
  );
};

export default Navbar;
