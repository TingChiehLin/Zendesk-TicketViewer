import ErrorMessage from "../components/ui/ErrorMessage";
import OverlayBackground from "../components/ui/OverlayBackground";

export default function Custom404() {
    return (
            <div className="h-96">
                <OverlayBackground/>
                <ErrorMessage message="Zendesk can not authenticate you or invalid page"/>
            </div>
        )
}