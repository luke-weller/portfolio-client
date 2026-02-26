import "./SectionFooterLink.css";
import AppLink from "../appLink/AppLink";

type SectionFooterLinkProps = {
  href: string;
  label: string;
  external?: boolean;
};

function SectionFooterLink({
  href,
  label,
  external = true,
}: Readonly<SectionFooterLinkProps>) {
  return (
    <p className="section-footer-link">
      <AppLink href={href} kind={external ? "external" : "internal"}>
        {label}
      </AppLink>
    </p>
  );
}

export default SectionFooterLink;
