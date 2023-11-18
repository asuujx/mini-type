function Footer() {
  return (
    <div className="w-screen fixed bottom-5 flex gap-1 justify-center">
      <p>Created by</p>
      <a
        href="https://github.com/asuujx"
        target="blank"
        className="relative group"
      >
        <span className="font-semibold text-primary-100">Piotr Balon</span>
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded bg-primary-100 transition-all delay-150 group-hover:w-full"></span>
      </a>
    </div>
  );
}

export default Footer;
