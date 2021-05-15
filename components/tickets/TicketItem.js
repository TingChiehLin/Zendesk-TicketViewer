import Button from '../ui/Button';

const TicketItem = ({id, subject, time}) => {
    const ticketLink = `/tickets/${id}`
    return <li>
        <div className="mb-4" data-testid="ticket-item">
            <div className="flex justify-between items-center">
                <div>
                    <h1>{subject}</h1>
                    <div className="text-sm font-extralight">{time}</div>
                </div>
                <Button link={ticketLink}>Explore Tricket</Button>
            </div>
            <div className="mb-4"></div>
        </div>
    </li>
}

export default TicketItem;