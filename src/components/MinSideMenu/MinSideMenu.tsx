// IMPORT

// Next
import { useRouter } from "next/router";

// React
import { useState } from "react";
// Material UI

// Components

// Styled components
import { styled } from "@mui/system";

// Utils

// Data
import { minSideMenuItems } from "./MinSideMenuItems";

// TYPE/INTERFACE

// Functional component
export const MinSideMenu = () => {
  // State
  const [active, setActive] = useState();
  // Functions

  // Router
  const router = useRouter();

  const currentPath = router.pathname;

  // Styled component
  const Ul = styled("ul")`
    background-color: #fdf1ef;
    width: 80%;
    margin: 30px auto;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    list-style-type: none;
    justify-content: space-evenly;
    border: 1px solid #d8d8d8;
  `;
  const Li = styled("li")`
    display: flex;
    align-items: center;
    padding: 5px;
    margin: 0 15px;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.5s border;
    &:hover {
      border: 1px solid #ee7768;
    }
  `;

  // Return
  return (
    <Ul>
      {minSideMenuItems.map((item) => {
        if (currentPath === item.path) {
          let active = true;
        }
        return (
          <Li
            style={{ textDecoration: active ? "underline" : null }}
            key={item.id}
            onClick={() => {
              router.push(`${item.path}`);
            }}
          >
            {item.icon}
            {item.title}
          </Li>
        );
      })}
    </Ul>
  );
};
