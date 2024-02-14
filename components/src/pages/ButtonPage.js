import Button from "../components/Button";
import { FaBell } from "react-icons/fa";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded className="mb-5"><FaBell /> Click here!</Button>
      </div>
      <div>
        <Button primary rounded outline>Click here!</Button>
      </div>
      <div>
        <Button secondary>Click</Button>
      </div>
      <div>
        <Button success>Click</Button>
      </div>
      <div>
        <Button warning>Click</Button>
      </div>
      <div>
        <Button danger>Click</Button>
      </div>
    </div>
  );
}

export default ButtonPage;