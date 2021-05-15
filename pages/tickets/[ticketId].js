import {useRouter} from "next/router";

const TicketDetailPage = () => {
    const router = useRouter();
    const ticketId = router.query.ticketId
    return (
        <>
            <div className="text-4xl w-full h-screen text-center">Event Detail: <span className="text-primary">{ticketId}</span></div>
        </>
    );
}

export default TicketDetailPage;