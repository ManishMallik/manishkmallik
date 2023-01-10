import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

const BottomBar = () => {
    
    return (
        <div>
            <h1>Contact information!</h1>
            <br/>
            <a className="button-icons" href='https://github.com/ManishMallik' target="_blank" rel="noreferrer"><GitHub/></a>
            <a className="button-icons" href='https://www.linkedin.com/in/manishmallik/' target="_blank" rel="noreferrer"><LinkedIn/></a>
        </div>
    );
}

export default BottomBar;