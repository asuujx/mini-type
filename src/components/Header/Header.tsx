import Logo from "./Logo";
import Profile from "./Profile";

function Header() {
   return (
      <div className="w-screen shadow-md">
         <div className="w-full p-5 flex justify-between tablet:max-w-2xl tablet:mx-auto laptop:mx-auto laptop:max-w-4xl desktop:mx-auto desktop:max-w-6xl transition-all ease-in-out place-items-center">
            <Logo />
            <Profile />
         </div>
      </div>
   );
}

export default Header;
