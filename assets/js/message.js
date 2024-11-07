async function template_message(message) {
    if (message.has_image) {
        return `
<div>
    <h3>${message.nickname}</h3>
    <p>
        <a href="${message.imgur_url}"><img src="${message.imgur_url}" alt="${message.imgur_url}"></a>
        <br>
        ${message.content}
    </p>
    <details>
        <summary>delete</summary>
        <form onsubmit="delete_request(event)">
            <input type="hidden" name="index" value="${message.idx}">
            <input type="password" name="password" placeholder="password">
            <input type="submit">
        </form>
    </details>
</div>
`

    } else {
        return `
<div>
    <h3>${message.nickname}</h3>
    <p>
        ${message.content}
    </p>
    <details>
        <summary>delete</summary>
        <form onsubmit="delete_request(event)">
            <input type="hidden" name="index" value="${message.idx}">
            <input type="password" name="password" placeholder="password">
            <input type="submit">
        </form>
    </details>
</div>
`;
    }
}

async function body_load() {
    try {
        const response = await fetch('http://y0rfa1se.iptime.org:8000/message/get');
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log('Received data:', data);

        draw_page(data);

        return true;
    } catch (error) {
        console.error('Request failed', error);
        alert('Failed to load data.');

        return false;
    }
}

async function draw_page(data) {
    for (const message of data) {
        const idx = message.idx;
        const nickname = message.nickname;
        const imgur_url = message.imgur_url;
        const content = message.content;

        const html = await template_message(message);
        document.querySelector('.body').innerHTML += html;
    }
}

async function post(event) {
    event.preventDefault();
    
    const form = event.target;
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

async function delete_request(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('http://y0rfa1se.iptime.org:8000/message/delete', {
            method: 'POST',
            body: formData
        });
    
        if (!response.ok) {
            throw new Error(`Server response error: ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'success') {
            console.log('Form submitted successfully:', data);
            window.location.href = window

        } else {
            console.error('Form submission failed:', data);
            alert('Failed to submit the form. Please try again.');
        }

    } catch (error) {
        console.error('Server error:', error);
        alert('Server error. Please try again later.');
    }
}

window.onload = async function() {
    await body_load();
};