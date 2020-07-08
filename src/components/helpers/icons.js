import {
    faBars,
    faFacebook,
    faTwitter,
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add(faBars, faFacebook, faTwitter, faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faEnvelope, faMapMarkedAlt, faLock );
  };
  
  export default Icons;