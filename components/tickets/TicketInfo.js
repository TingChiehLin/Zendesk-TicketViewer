import PageNumber from "../ui/PageNumber";

const TicketInfo = ({ticketTotal, ticketPerPage, paginate}) => {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(ticketTotal / ticketPerPage); i++) {
        pageNumber.push(i)
    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <div className="text-2xl">
                    {`Total Tickets: ${ticketTotal}`}
                </div>
                <div>
                    {
                        pageNumber.map((e, index) => {
                            index++
                            return (
                                <PageNumber key={index} number={index} paginate={paginate}/>
                            )
                        })
                    }
                        </div>
                        </div>
                        <hr className="mb-8"/>
                        </>
                        );
                    };

export default TicketInfo;