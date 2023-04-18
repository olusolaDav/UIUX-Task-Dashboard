
import addIcon from "../../assets/icons/PlusIcon.svg";
import Button from "../shared/button/Button";



function LogoComponent() {
    
    return (
      <Button className="p-[1.6rem] bg-onPrimary text-white mt-auto">
        <img src={addIcon} alt="" />
        <p className="uppercase font-light leading-[1.9rem] line-clamp-1 xl:line-clamp-none">
          New project
        </p>
      </Button>
    );
}

export default LogoComponent;
