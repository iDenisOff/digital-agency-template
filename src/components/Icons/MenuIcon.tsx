import React from "react";

type MenuIconProps = {
    width?: number;
    height?: number;
};

export const MenuIcon: React.FC<MenuIconProps> = ({ width = 40, height = 40 }) => (
    <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
            fill="#F5F6F7"
        />
        <path d="M11 14V15.8H29V14H11ZM11 19.4V21.2H29V19.4H11ZM11 26.6V24.8H29V26.6H11Z" fill="black" />
    </svg>
);
