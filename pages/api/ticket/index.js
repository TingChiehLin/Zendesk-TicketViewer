import axios from 'axios';
const API_TOKEN = process.env.API_TOKEN;
const EMAIL = process.env.EMAIL;
const url = `https://${process.env.SUBDO_MAIN}.zendesk.com/api/v2/tickets`

const TicketHandler = async (req, res) => {
    const authString = `${EMAIL}/token:${API_TOKEN}`
    const encodedString = Buffer.from(authString).toString('base64')
    try {
        const response = await axios.get(url, {
            headers: {
                 Authorization: `Basic ${encodedString}`
            }
        })
        res.status(200).json(response.data);
    } catch (error) {
        console.log(error.response.data)
        res.status(500).json({message: "Connecting to Zendesk Server fail or can not authenticate you"});
        return;
    }
}

export default TicketHandler;
