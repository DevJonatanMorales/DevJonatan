export const IconSolial = ({link, children, downloadable }) => {
  return (
    <a className="social-icon" href={link} {...(downloadable ? { download: true } : {})}>
      {children}
    </a>
  );
};
