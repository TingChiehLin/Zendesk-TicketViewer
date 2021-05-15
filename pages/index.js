import {useState} from "react";
import TicketList from '../components/tickets/TicketList';
import TicketInfo from "../components/tickets/TicketInfo";

export default function Home({tickets}) {

    const [currentPage, setcurrentPage] = useState(1);
    const [ticketPerPage] = useState(25);

    const indexOfLastPost = currentPage * ticketPerPage;
    const indexOfFirstPost = indexOfLastPost - ticketPerPage;
    const currentPosts = tickets.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = ticketPerPage => setcurrentPage(ticketPerPage)

    return (
        <>
            <TicketInfo ticketTotal={tickets.length} ticketPerPage={ticketPerPage} paginate={paginate}/>
            <TicketList tickets={currentPosts}/>
        </>
    )
};

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/ticket')
    const data = await response.json()

    if (response.status != 200 || data.length === 0) {
        return (
            {
                notFound: true
            }
        )
    }

    return (
        {
            props: {
                tickets: data.tickets,
            }
        }
    );
}
