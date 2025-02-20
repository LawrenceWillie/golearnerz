console.log("timeZone code is loaded")
function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0'); // 24-hour format
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get user's timezone

            document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
            document.getElementById('region').textContent = `Region: ${timeZone}`;
        }

        setInterval(updateClock, 1000);
        updateClock();  // Initial call to set the clock immediately