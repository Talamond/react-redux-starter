import React from 'react';
import * as ReactDOM from 'react-dom';

/* eslint-disable */

const iconMap = {
  time: 'assets/time.png',
  sport: 'assets/bike.jpeg',
  love: 'assets/heart.png',
  food: 'assets/food.png',
  travel: 'assets/travel.png',
};

export default class Timeline extends React.Component {
  static propTypes = {
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

  onThumbClick(index) {
    const element = ReactDOM.findDOMNode(this.refs['tlc-' + index]);
    element.scrollIntoView();
  }

  renderTimelineViewerElements(items) {
    const elems = [];
    items.forEach((item, index) => {
      elems.push((
        <img className="flex-auto" key={'tlthumb' + index} src={item.thumbUrl || iconMap[item.type]} width="50" height="50" onClick={() => this.onThumbClick(index)}/>
      ));
    });
    return elems;
  }

  renderTimelineElements(items) {
    const elems = [];
    items.forEach((item, index) => {
      elems.push((
        <div key={'tlc-' + index} ref={'tlc-' + index}>
          {item.content}
        </div>
      ));
    });
    return elems;
  }

  render() {
    const { items } = this.props;
    return (
      <div className="aa" style={{minHeight: '100vh'}}>
        <div className="flex flex-wrap">
          <div className="col-1 overflow-scroll" style={{maxHeight: '100vh'}}>
            {this.renderTimelineViewerElements(items)}
          </div>
          <div className="col-11 p2 bg-darken-1" style={{minHeight: '100vh'}}>
            {this.renderTimelineElements(items)}
          </div>
        </div>
        <footer className="p2 border-top">
          Footer
        </footer>
      </div>
    );
  }

}
