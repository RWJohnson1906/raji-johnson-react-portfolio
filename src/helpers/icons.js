import { faTrash, faSignOutAlt, faEdit, faGear, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faGear, faPlusCircle);
};

export default Icons;
