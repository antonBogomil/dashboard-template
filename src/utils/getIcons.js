import icons from "../settings/icons";
export default function (name) {
    return icons[name] && icons[name]()
}