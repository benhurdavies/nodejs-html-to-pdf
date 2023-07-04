import {Attributes, Node} from './Node';

export function getHtmlParserHandler() {
  const virtualDOM = new Node('document');
  let currentNode = virtualDOM;

  const handleOpenTag = (name: string, attributes: Attributes) => {
    const newNode = new Node(name, attributes);

    newNode.parent = currentNode;
    currentNode.children.push(newNode);

    currentNode = newNode;
  };

  // Handle text nodes
  const handleText = (text: string) => {
    currentNode.children.push(text);
  };

  // Handle closing tag
  const handleCloseTag = () => {
    if (currentNode.parent) currentNode = currentNode.parent;
  };

  return {
    getVirtualDOM: () => virtualDOM,
    htmlParserHandlers: {
      onopentag: handleOpenTag,
      ontext: handleText,
      onclosetag: handleCloseTag,
    },
  };
}
