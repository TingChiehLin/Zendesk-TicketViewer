import React from "react";
import {cleanup, render, screen} from '@testing-library/react';

import TicketItem from '../components/tickets/TicketItem';
import TicketList from "../components/tickets/TicketList";

afterEach(() => {
    cleanup();
})

//Test single ticket item
describe("Ticket Item", () => {
    it("Test ticket Item renders correctly", () => {
        const ticketItem = {id: 1, subject: 'Sample ticket', time: '2021-05-03T16:33:17Z'}
        render(<TicketItem id={ticketItem.id} subject={ticketItem.subject} time={ticketItem.time}/>);
        const ticketElement = screen.getByTestId('ticket-item');
        expect(ticketElement).toBeInTheDocument();
        expect(ticketElement).toHaveTextContent('Sample ticket');
    })
});

//Test ticket list
describe("Ticket List", () => {
    const mockData = [
        {
            id: 1,
            subject: 'Sample ticket',
            created_at: '2021-05-03T16:33:17Z'
        },
        {
            id: 2,
            subject: 'I need help',
            created_at: '2021-05-04T01:10:13Z'
        }
    ]

    it("should render TicketList correctly", async () => {
        render(<TicketList tickets={mockData}/>);
        const ticketListElement = screen.getByTestId('ticket-list');
        expect(ticketListElement).toBeInTheDocument();
    })

    it("should render a list of ticket item", async () => {
        render(<TicketList tickets={mockData}/>);
        const tickets = await screen.getAllByTestId('ticket-item');
        expect(tickets).toHaveLength(2);
    })
});

