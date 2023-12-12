

interface TextNode {
    text: string;
}

interface LinkNode extends TextNode {
    children: TextNode[];
    linkType: string;
    newTab: boolean;
    type: string;
    url: string;
}

interface ElementNode {
    children: Array<TextNode | LinkNode | ElementNode>;
    type?: string;
}

export function useSerialize() {
    const jsonToHtml = (elements: ElementNode[]): string => {
        let html = '';

        for (const element of elements) {
            if (element.children && element.children.length > 0) {
                switch (element.type) {
                    case 'h1':
                        html += `<h1>${element.children.map(child => child.text).join('')}</h1>`;
                        break;
                    case 'h2':
                        html += `<h2>${element.children.map(child => child.text).join('')}</h2>`;
                        break;
                    case 'h3':
                        html += `<h3>${element.children.map(child => child.text).join('')}</h3>`;
                        break;
                    case 'h4':
                        html += `<h4>${element.children.map(child => child.text).join('')}</h4>`;
                        break;
                    case 'h5':
                        html += `<h5>${element.children.map(child => child.text).join('')}</h5>`;
                        break;
                    case 'h6':
                        html += `<h6>${element.children.map(child => child.text).join('')}</h6>`;
                        break;
                    case 'ul':
                        html += `<ul>${element.children.map(child => jsonToHtml([child])).join('')}</ul>`;
                        break;
                    case 'ol':
                        html += `<ol>${element.children.map(child => jsonToHtml([child])).join('')}</ol>`;
                        break;
                    case 'li':
                        html += `<li>${element.children.map(child => child.text).join('')}</li>`;
                        break;
                    case 'link':
                        const linkNode = element as LinkNode;
                        html += `<a href="${linkNode.url}"${linkNode.newTab ? ' target="_blank"' : ''}>${linkNode.children.map(child => child.text).join('')}</a>`;
                        break;
                    default:
                        html += element.children.map(child => jsonToHtml([child])).join('');
                }
            } else {

                if ('code' in element && 'text' in element) {
                    html += `<pre>${element.text}</pre>`;
                }
                // Handle text nodes
                else if ('text' in element) {
                    html += `<p>${element.text}</p>`;
                }
            }
        }

        return html;
    };

    return {
        jsonToHtml,
    };
}