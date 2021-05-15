import TicketItem from "./TicketItem";

const TicketList = ({tickets}) => {
    return (
        <ul data-testid="ticket-list">
            {tickets.map((ticket) => {
                return <TicketItem
                    key={ticket.id}
                    id={ticket.id}
                    subject={ticket.subject}
                    time={ticket.created_at}
                />
            })}
        </ul>
    );
}

export default TicketList