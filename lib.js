export const html = (templateString) => {
  return new DOMParser()
    .parseFromString(templateString, 'text/html')
    .body
}

export const render = (nodeToRenderTo, nodeToRender) => {
  nodeToRenderTo.innerHTML = ''
  nodeToRenderTo.appendChild(nodeToRender)
}
