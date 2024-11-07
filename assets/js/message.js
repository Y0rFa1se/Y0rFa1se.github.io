async function body_load() {
    try {
        const response = await fetch('http://y0rfa1se.iptime.org:8000/message/get');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log('Received data:', data);

        return data;
    } catch (error) {
        console.error('Request failed', error);
        alert('Failed to load data.');

        return null;
    }
}

async function send(event) {
    event.preventDefault();
    
    const form = document.querySelector('.input form');
    const formData = new FormData(form);

    try {
        const response = await fetch('http://y0rfa1se.iptime.org:8000/message/post', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Server response error: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'success') {
            console.log('Form submitted successfully:', data);
            window.location.href = window.location.href;
        } else {
            console.error('Form submission failed:', data);
            alert('Failed to submit the form. Please try again.');
        }

    } catch (error) {
        console.error('Server error:', error);
        alert('Server error. Please try again later.');
    }
ㅂ
    await body_load();
}

document.querySelector('.input form').addEventListener('submit', function(event) {
    send(event);
});

window.onload = async function() {
    const data = await body_load();

    if (data === null) {
        alert('Returning to the previous page.');
        window.history.back();
    }
};