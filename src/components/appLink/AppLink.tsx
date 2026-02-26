import type { ReactNode } from "react";
import "./AppLink.css";

type AppLinkKind = "auto" | "internal" | "external";

type AppLinkProps = {
  href: string;
  kind?: AppLinkKind;
  className?: string;
  showArrow?: boolean;
  children: ReactNode;
};

const isLikelyExternalHref = (href: string) =>
  /^(https?:)?\/\//.test(href) ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

function AppLink({
  href,
  kind = "auto",
  className,
  showArrow = true,
  children,
}: Readonly<AppLinkProps>) {
  const isExternal =
    kind === "external" || (kind === "auto" && isLikelyExternalHref(href));
  const arrow = isExternal ? "↗" : "→";
  const combinedClassName = `app-link app-link--${isExternal ? "external" : "internal"}${className ? ` ${className}` : ""}`;

  return (
    <a
      className={combinedClassName}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      {showArrow && (
        <span className="app-link__arrow" aria-hidden="true">
          {arrow}
        </span>
      )}
    </a>
  );
}

export default AppLink;
