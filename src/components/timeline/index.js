import React from 'react';

function renderTimelineViewerElements(items) {
  const elems = [];
  items.forEach((item, index) => {
    elems.push((
      <div key={'tlv-' + index}>
        {item.type}
      </div>
    ));
  });
  return elems;
}

function renderTimelineElements(items) {
  const elems = [];
  items.forEach((item, index) => {
    elems.push((
      <div key={'tlc-' + index}>
        {item.content}
      </div>
    ));
  });
  return elems;
}

function Timeline({ items, selectedIndex}) {
  return (
    <div className="aa" style={{minHeight: '100vh'}}>
      <div className="flex flex-wrap">
        <div className="col-1">
          {renderTimelineViewerElements(items)}
          {selectedIndex}
        </div>
        <div className="col-11 p2 bg-darken-1">
          {renderTimelineElements(items)}
        </div>
      </div>
      <footer className="p2 border-top">
        Footer
      </footer>
    </div>
  );
}

Timeline.propTypes = {
  /*
  items: React.PropTypes.arrayOf({
    type: React.PropTypes.oneOf(['work', 'personal']),
    date: React.PropTypes.object,
    content: React.PropTypes.func,
  }),
  */
  items: React.PropTypes.array,
  selectedIndex: React.PropTypes.number,
};

export default Timeline;
