import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    // Style
    className?: string;
    bgColor?: string;
    textColor?: string;
    rounded?: boolean;
    fullWidth?: boolean;
    paddingX?: string;
    paddingY?: string;
    // Icon
    rightIcon?: ReactNode;

    // Animation
    animation?: boolean;
}

export default function Button({
    children,
    onClick,
    href,
    className = "",
    bgColor = "bg-transparent",
    textColor = "text-white",
    rounded = false,
    fullWidth = false,
    paddingX = "px-5",
    paddingY = "py-3",

    rightIcon,
    animation = true,
}: ButtonProps) {

    const content = (
        <>
            {animation ? (
                <div className="h-6 overflow-hidden">
                    <div className="flex flex-col transition-transform duration-300 ease-in-out group-hover:-translate-y-6">
                        <span className="h-6 leading-6">{children}</span>
                        <span className="h-6 leading-6">{children}</span>
                    </div>
                </div>
            ) : (
                <span>{children}</span>
            )}

            {rightIcon && (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                    {rightIcon}
                </span>
            )}
        </>
    );

    const classes = `
        group
        cursor-pointer
        inline-flex
        items-center
        justify-center
        gap-2
        overflow-hidden
        transition-all
        duration-300    
        ${paddingX}
        ${paddingY}
        ${bgColor}
        ${textColor}
        ${rounded ? "rounded-md" : ""}
        ${fullWidth ? "w-full" : ""}
        ${className}
        `;

    if (href) {
        return (
            <Link
                href={href}
                onClick={onClick}
                className={classes}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={classes}
        >
            {content}
        </button>
    );
}