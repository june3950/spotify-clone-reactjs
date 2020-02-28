import styled, { css } from "styled-components";

/* containers */
export const NavContainer = styled.nav`
  --color: red;
  height: 60px;
  padding: 0 2rem;
  width: 100%;
  position: sticky;
  top: 0;
  transition: background-color 0.25s;
  opacity: 1;

  ::before,
  ::after {
    content: "";
    position: fixed;
    height: 60px; /* nav height */
    top: 0;
    left: 230px; /* sidebar width */
    right: 0;
    background-color: var(--color);
    z-index: 0;
    opacity: var(--opacity);
  }

  ::after {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: var(--opacity);
  }
`;

export const NavSubcontainer = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

// wrappers
export const NavLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: auto; */
`;

// Right side

export const UpgradeButton = styled.a`
  background-color: transparent;
  border-radius: 100px;
  border: 2px solid #fff;
  padding: 0.5rem 2.125rem;
  margin-right: 2rem;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    transform: scale(1.06);
  }
`;

export const UpgradeText = styled.p`
  font-family: "Circular-Sp", sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2.3px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  background-color: #282828;
  border-radius: 100px;
  padding: 0.25rem 0.5rem 0.25rem 0.25rem;
  cursor: pointer;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 100%;
`;

export const Name = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 0.8rem;
  margin-left: 0.5rem;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const ArrowDownIconContainer = styled.div`
  display: flex;
  margin-left: 0.5rem;
`;

// left
export const ArrowsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowIconContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border: 0;
  outline: 0;
  border-radius: 50%;
  background-color: #000000;
  margin-right: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? css`
          opacity: 0.6;
          cursor: not-allowed;
        `
      : null}
`;
