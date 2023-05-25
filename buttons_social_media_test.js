const button_component = ({ img_url, img_alt, link_url }) => {
    return `
    <a class="social_networks_button" href="${link_url}" target="_blank">
        <img src="${img_url}" alt="${img_alt}">
    </a>
        `
}

// const button_open = `<button`


const buttons = [{
    img_alt: 'facebook_icon',
    img_url: './images/fb.png',
    link_url: 'https://www.facebook.com/'
},
{
    img_alt: 'instagram_icon',
    img_url: './images/ins.png',
    link_url: 'https://www.instagram.com/'

},
{
    img_alt: 'WhatsApp_icon',
    img_url: './images/wp.png',
    link_url: 'https://www.whatsapp.com/'

}]

const DEFAULT_STYLES = `
#button_chat_social_networks {
    all: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 10px;
    margin-bottom: 10px;
}

#button_chat_social_networks:hover #social_networks_buttons {
    transform: scale(1);
}

#button_chat_social_networks img {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

#social_networks_buttons {
    transition-duration: 500ms;
    overflow: hidden;
    position: fixed;
    bottom: 40px;
    right: 0;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px 2px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px -2px #343434;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    transform: scale(0);
}

#social_networks_buttons .social_networks_button {
    all: unset;
    cursor: pointer;
    transition-duration: 500ms;
}

#social_networks_buttons .social_networks_button:hover {
    transform: scale(1.05);
    filter: drop-shadow(2px 2px 5px #455b57);
}

#social_networks_buttons .social_networks_button img {
    width: 60px;
    height: 60px;
    object-fit: contain;
}
`

const body = document.querySelector('body');
const button_open = document.createElement('button');
const buttons_container = document.createElement('section');
const styles_container = document.createElement('style');

buttons_container.setAttribute('id', 'social_networks_buttons');
button_open.setAttribute('id', 'button_chat_social_networks');
button_open.innerHTML = `
<img src="https://raw.githubusercontent.com/R00rss/scripts_modulos/main/images/chat.png" alt="open_buttons_chat">
    <p>chatea con nosotros</p> 
</img>

`;
buttons_container.innerHTML = buttons.map(button => { return button_component(button) }).join('')
styles_container.innerHTML = DEFAULT_STYLES;

body.appendChild(button_open);
body.appendChild(styles_container);
button_open.appendChild(buttons_container);