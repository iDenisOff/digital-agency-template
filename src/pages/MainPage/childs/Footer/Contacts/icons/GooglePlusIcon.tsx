import React from "react";

type GooglePlusIconProps = {
    color?: string;
    width?: number;
    height?: number;
};

export const GooglePlusIcon: React.FC<GooglePlusIconProps> = ({ color = "#FFD723", width = 60, height = 60 }) => (
    <svg width={width} height={height} fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path
            d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M12,21c-3.314,0-6-2.686-6-6 c0-3.314,2.686-6,6-6c1.56,0,2.981,0.596,4.047,1.573l-1.434,1.404C13.912,11.369,13,11,12,11c-2.209,0-4,1.791-4,4 c0,2.209,1.791,4,4,4c1.981,0,3.622-1.442,3.94-3.333H12v-2h5.843l0.033,0.133C17.956,14.188,18,14.589,18,15 C18,18.314,15.314,21,12,21z M23,16v2h-2v-2h-2v-2h2v-2h2v2h2v2H23z"
            fill={color}
        />
    </svg>
);
