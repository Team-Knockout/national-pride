import html from '../libs/html.js';

let template = function() {
    return html`
    <footer>
    © Statecraft | 2018
</footer>
   `;
};

export default class Footer {
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}