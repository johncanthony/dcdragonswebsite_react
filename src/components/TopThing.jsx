import { Navbar,Dropdown,Button,Indicator, Badge } from "react-daisyui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane,faPhone, faBars, faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";


function TopNavBar() {

    return (
    <div>
     <Navbar className="shadow-xl bg-base-300 max-h-[3rem] ">
      <Navbar.Start>
        <Dropdown>
          <Button tag="label" color="ghost" tabIndex={0} className="">
            <FontAwesomeIcon icon={faBars} className="text-xl"/>
          </Button>
          <Dropdown.Menu tabIndex={0} className="w-52 menu-sm mt-3 z-[1]">
            <li>
            <a href="#classes">Classes</a>
            <a href="#schedule">Schedule</a>
            <a href="#recentEvents">Recent Events</a>
            <a href="#contact">Contact</a>
            </li>
          </Dropdown.Menu>
        </Dropdown>
        
      </Navbar.Start>
      
      <Navbar.End>
      
      
      <Button tag="a" href="tel:901-585-3738" color="" size="md" className="mr-2" shape="circle">
          <FontAwesomeIcon icon={faPhone} className=""/>
            
        </Button>

        <Indicator horizontal="end" vertical="top">
          <Badge color="warning" className={Indicator.Item.className()}>!</Badge>
          <Button tag="a" href="#contact" color="" size="md" shape="circle">
            <FontAwesomeIcon icon={faPaperPlane} className=""/>
            
          </Button>
        </Indicator>
      </Navbar.End>
     </Navbar>
    </div>
    );

}

export default TopNavBar;