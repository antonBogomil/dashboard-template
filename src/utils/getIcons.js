import icons from "../data-config/icons";
export default function (name) {
    return icons[name] && icons[name]()
}