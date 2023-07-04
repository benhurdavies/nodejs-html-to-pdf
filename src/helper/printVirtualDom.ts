import {Node} from '../Node';

export function printVirtualDom(dom: Node) {
  const printJson: any = fillPrintJson(dom);
  console.log(JSON.stringify(printJson));
}

function fillPrintJson(parent: Node) {
  const target: any = {};
  target.attributes = parent.attributes;
  target.name = parent.name;

  target.children = parent.children.map(child => {
    if (child instanceof Node) {
      return fillPrintJson(child);
    }
    return child;
  });

  return target;
}
