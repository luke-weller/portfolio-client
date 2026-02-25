import "./SectionFooterLink.css";

type SectionFooterLinkProps = {
  href: string;
  label: string;
};

function SectionFooterLink({ href, label }: Readonly<SectionFooterLinkProps>) {
  return (
    <p className="section-footer-link">
      <a href={href} target="_blank" rel="noreferrer">
        <span>{label}</span>
        <span className="section-footer-link__arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </p>
  );
}

export default SectionFooterLink;
