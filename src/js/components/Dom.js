import React from 'react';

const handleClick = e => {
  e.stopPropagation();
  const target = e.currentTarget;
  if (target.classList.contains('open')) {
    target.classList.remove('open');
  } else {
    target.classList.add('open');
  }
}

const isEmpty = value => value ? !value.trim() : !value;

const List = props => {
  let list = [];
  let nodes = props.nodes;
  for (let x=0; x<nodes.length; x++) {
    const type = (nodes[x].nodeName == 'HEAD' || props.type == 'private') ?
      'private' : 'public';

    if (nodes[x].nodeName != '#text' && nodes[x].nodeName != '#comment') {
      list.push(
        <li key={x} onClick={handleClick}>
          <span className='ico-expand-black' />
          <span className={type == 'private' ? 'ico-folder-red' : 'ico-folder-blue'} />
          {nodes[x].nodeName}
          {nodes[x].childNodes.length ?
            <List nodes={nodes[x].childNodes} type={type} /> : ''
          }
        </li>
      );
    } else {
      if (!isEmpty(nodes[x].nodeValue) && nodes[x].nodeName != '#comment') {
        list.push(
          <li key={x} onClick={handleClick}>
            <span className='ico-expand-white' />
            <span className='ico-file' />
            {nodes[x].nodeValue}
            {nodes[x].childNodes.length ?
              <List nodes={nodes[x].childNodes} type={type} /> : ''
            }
          </li>
        );
      }
    }
  }
  return <ul className='dom-list'>{list}</ul>;
}

export {
  List
};
