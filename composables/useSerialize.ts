

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
                    case 'h2':
                        html += `<h2>${element.children.map(child => child.text).join('')}</h2>`;
                        break;
                    case 'ul':
                        html += `<ul>${element.children.map(child => jsonToHtml([child])).join('')}</ul>`;
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
                // Handle text nodes
                if ('text' in element) {
                    html += element.text;
                }
            }
        }

        return html;
    };

    return {
        jsonToHtml,
    };
}