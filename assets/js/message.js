function body_load() {
    return true;
}

function send(event) {
    event.preventDefault();
    
    const form = document.querySelector('.input form');
    const formData = new FormData(form);

    fetch('http://y0rfa1se.iptime.org:8000/message/post', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Server response error:', response);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        
        if (data.status === 'success') {
            console.log('form submitted:', data);
            window.location.href = window.location.href;
        } else {
            console.error('form is not submitted', data);
            alert('Failed to submit the form. Please try again.');
        }
    })
    .catch(error => {
        console.error('server error', error);
        alert('Server error. Please try again later.');
    });

    body_load();
}

document.querySelector('.input form').addEventListener('submit', function(event) {
    send(event);
});
