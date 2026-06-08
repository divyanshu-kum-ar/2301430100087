import axios from 'axios';
const API_URL="http://4.224.186.213/evaluation-service/logs"
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaXZ5YW5zaHU5NzU2NzdAZ21haWwuY29tIiwiZXhwIjoxNzgwOTAzMzE0LCJpYXQiOjE3ODA5MDI0MTQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5N2M4YTk0ZC00Nzk4LTRiYzUtYTg0ZC0yZTU5NjNlODQzNjciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJkaXZ5YW5zaHUga3VtYXIiLCJzdWIiOiI5M2EzYjk3Yi0wZDM0LTRmODItOTA3OC00NGVmZTExNGZiMGIifSwiZW1haWwiOiJkaXZ5YW5zaHU5NzU2NzdAZ21haWwuY29tIiwibmFtZSI6ImRpdnlhbnNodSBrdW1hciIsInJvbGxObyI6IjIzMDE0MzAxMDAwODciLCJhY2Nlc3NDb2RlIjoibnlYUU11IiwiY2xpZW50SUQiOiI5M2EzYjk3Yi0wZDM0LTRmODItOTA3OC00NGVmZTExNGZiMGIiLCJjbGllbnRTZWNyZXQiOiJ3d25Kek5UQ1JxaE5WZUNQIn0.D6nhE2GhlrksPyJkwUNrCw6wXeVZuEGp14ljCIp3Weo"

const topNotifications = [];

const getTopNotifications = async() => {
    try {
        const response = await axios.get(NOTIFICATION_API_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`
            }
        });

        // console.log('Fetched notifications:', response.data.notifications);

        const notifications = response.data.notifications;
        // console.log('Notifications array:', notifications);
        
        const placements = notifications.filter(
            notification => notification.Type === 'Placement'
        );

        const results = notifications.filter(
            notification => notification.Type === 'Result'
        );

        const events = notifications.filter(
            notification => notification.Type === 'Event'
        );

        const topNotifications = [
            ...placements,
            ...results,
            ...events
        ].slice(0, 10);
        
        console.log('Top notifications:', topNotifications);
    }
    catch {
        console.error('Failed to fetch notifications from the server');
    }
}

getTopNotifications();