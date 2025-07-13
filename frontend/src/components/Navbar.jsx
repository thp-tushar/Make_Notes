import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <TypeAnimation
            sequence={[
              "Think Board.", 4500, 
              "Write Your Thoughts.", 2500,  
              "अपने विचार लिखें|", 2500,
              "اكتب أفكارك", 2500,
              "写下你的想法.", 2500,
              "Escribe tus Pensamientos.", 2500,            
            ]}
            speed={60}
            repeat={Infinity}
            className="text-3xl font-bold text-primary font-mono tracking-tight"
          />
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
