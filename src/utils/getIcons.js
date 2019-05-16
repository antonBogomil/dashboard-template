import icons from "../data/icons";
export default function (name) {
    return icons[name] && icons[name]()
}