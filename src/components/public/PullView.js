/**
 * Created on 09/04/2017.
 */

import React from 'react';

/**
 * PullView组件暂时只需实现上滑加载功能
 */
export default class PullView extends React.Component {
  static propType = {
    onScrollUp: PropTypes.func,  // 向上滑动事件，例如可以显示Header
    onScrollDown: PropTypes.func,  // 向下滑动事件，例如可以隐藏Header
    onScrollToBottom: PropTypes.func, // 滑动到页面底部事件，当滑动到距离底部toBottom时触发，例如可以加载更多
    onPullViewUnmount: PropTypes.func, // 当unmount PullView组件时触发，例如记录当前阅读的位置，下次进入直接跳转
    mountScrollTop: PropTypes.number, // 初始化时的滚动位置
    toBottom: PropsTypes.number, // 滑动到toBottom时，触发onScrollToBottom事件
  }

  static DefaultProps = {
    mountScrollTop: 0,
    toBottom: 0,
  };

  constructor(props) {
    super(props);

    this._onScroll = this._onScroll.bind(this);
  }

  lastScrollPos = undefined;
  container = document.body;
  //requestAnimationFrame标识
  ticking = false;

  componentDidMount() {
    const {props: { mountScrollTop }, container} = this;

    //滚动到初始位置
    container.scrollTop = mountScrollTop;
    this.lastScrollPos = mountScrollTop;

    window.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    const { props: { onPullViewUnmount }, container } = this;
    //记录unmount时位置
    onPullViewUnmount && onPullViewUnmount(container.scrollTop);

    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll() {
    const { props: { onScrollUp, onScrollDown, onScrollToBottom, toBottom}, container } = this;
    const scrollTop = container.scrollTop;
    const windowHeight = window.innerHeight;
    const scrollHeight = container.scrollHeight;

    // 使用requestAnimationFrame优化scroll性能
    if (!this.ticking) {
      window.requestAnimationFrame(function() {
        if((toBottom + scrollTop + windowHeight) >= scrollHeight) {
          onScrollToBottom && onScrollToBottom();
        }

        // 向下滑动
        if( scrollTop > this.lastScrollPos ) {
          onScrollDown && onScrollDown();
        } else {
          //向上滑动
          onScrollUp && onScrollUp();
        }

        this.lastScrollPos = scrollTop;
        this.ticking = false;
      });
    }
    this.ticking = true;
  }


  render() {

    return (
      <div className="pull-view">
        {this.props.children}
      </div>
    );
  }
}