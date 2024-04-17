function getChildsByTag(node, tag) {
  const children = Array.from(node.childNodes);

  for (const child of children) {
    if (child.nodeName.toUpperCase() === tag.toUpperCase()) {
      child.style.color = 'red';
    }
  }
}

function changeSelectedChildrenColors(targetId) {
  const selection = document.getElementById('selection');
  const node = document.getElementById(targetId);

  getChildsByTag(node, selection.value);
}
