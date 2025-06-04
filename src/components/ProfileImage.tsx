interface props {
  src: string;
  logoSrc?: string;
}
function ProfileImage({ src, logoSrc }: props) {
  return (
    <div className="relative w-18">
      <div className="h-18 w-18 rounded-full overflow-hidden  ">
        <img src={src} />
      </div>
      {logoSrc && <img src={logoSrc} className="absolute right-0 bottom-0" />}
    </div>
  );
}

export default ProfileImage;
