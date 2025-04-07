import Link from "next/link";
import React from "react";
import "./LinkAnim.scss";
import Image from "next/image";

export const LinkAnim = ({
  href,
  classes = "",
  text,
  icon = false,
  ...rest
}) => {
  return (
    <Link href={href} {...rest} className={"link-anim " + classes}>
      {icon && (
        <Image
          width={17}
          height={17}
          src={icon}
          alt=""
          className="link-anim__icon"
        />
      )}

      <p className="link-anim__text-wrapper" aria-label={text}>
        <span className="link-anim__text">{text}</span>
      </p>
    </Link>
  );
};
