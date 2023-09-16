import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return (
    <footer>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={"instagram-square"} />

      <h1>© 2023 MovieBox by Nade</h1>
    </footer>
  );
}
