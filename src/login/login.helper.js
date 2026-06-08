
const axios = require("axios");
const API_URL="http://4.224.186.213/evaluation-service/logs"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaXZ5YW5zaHU5NzU2NzdAZ21haWwuY29tIiwiZXhwIjoxNzgwOTAzMzE0LCJpYXQiOjE3ODA5MDI0MTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5N2M4YTk0ZC00Nzk4LTRiYzUtYTg0ZC0yZTU5NjNlODQzNjciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJkaXZ5YW5zaHUga3VtYXIiLCJzdWIiOiI5M2EzYjk3Yi0wZDM0LTRmODItOTA3OC00NGVmZTExNGZiMGIifSwiZW1haWwiOiJkaXZ5YW5zaHU5NzU2NzdAZ21haWwuY29tIiwibmFtZSI6ImRpdnlhbnNodSBrdW1hciIsInJvbGxObyI6IjIzMDE0MzAxMDAwODciLCJhY2Nlc3NDb2RlIjoibnlYUU11IiwiY2xpZW50SUQiOiI5M2EzYjk3Yi0wZDM0LTRmODItOTA3OC00NGVmZTExNGZiMGIiLCJjbGllbnRTZWNyZXQiOiJ3d25Kek5UQ1JxaE5WZUNQIn0.D6nhE2GhlrksPyJkwUNrCw6wXeVZuEGp14ljCIp3Weo"

 const createLog = async (stack, level, packageName, message) => {
    try {
        const response = await axios.post(API_URL, {
            stack,
            level,
            package: packageName,
            message
        }, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        })

        console.log('Log sent to the server successfully');
        console.log(response.data);
    }
    catch (error) {
        console.error('Failed to send log to the server');
        console.error(error.response?.data || error.message);
    }
}

createLog("frontend", "error", "component", "Failed to load component data");