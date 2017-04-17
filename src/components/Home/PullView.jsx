/**
 * Created on 09/04/2017.
 */

import React from 'react';
import PreviewList from './PreviewList';
import Loading from '../Loading/Loading';

/**
 * PullView组件暂时只需实现上滑加载功能
 */
export default class PullView extends React.Component {

  static defaultProps = {
    mountScrollTop: 0,
    toBottom: 0,
  };

  static propTypes = {
    onScrollUp: React.PropTypes.func,  // 向上滑动事件，例如可以显示Header
    onScrollDown: React.PropTypes.func,  // 向下滑动事件，例如可以隐藏Header
    onScrollToBottom: React.PropTypes.func, // 滑动到页面底部事件，当滑动到距离底部toBottom时触发，例如可以加载更多
    onPullViewUnmount: React.PropTypes.func, // 当unmount PullView组件时触发，例如记录当前阅读的位置，下次进入直接跳转
    mountScrollTop: React.PropTypes.number, // 初始化时的滚动位置
    toBottom: React.PropTypes.number, // 滑动到toBottom时，触发onScrollToBottom事件
  };

  constructor(props) {
    super(props);

    this._onScroll = this._onScroll.bind(this);
  }

  lastScrollPos = undefined;
  container = document.body;

  componentDidMount() {
    const {props: { mountScrollTop }, container} = this;

    // 滚动到初始位置
    container.scrollTop = mountScrollTop;
    this.lastScrollPos = mountScrollTop;
    window.addEventListener('scroll', this._onScroll);
  }

  componentWillUnmount() {
    const { props: { onPullViewUnmount }, container } = this;
    // 记录unmount时位置
    onPullViewUnmount && onPullViewUnmount(container.scrollTop);

    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll() {
    // 使用requestAnimationFrame优化scroll性能
      window.requestAnimationFrame( function() {
        const { props: { onScrollUp, onScrollDown, onScrollToBottom, toBottom }, container } = this;
        const scrollTop = container.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollHeight = container.scrollHeight;
        if ((toBottom + scrollTop + windowHeight) >= scrollHeight) {
          onScrollToBottom && onScrollToBottom();
        }
        // 向下滑动
        if (scrollTop > this.lastScrollPos) {
          onScrollDown && onScrollDown();
        } else {
          // 向上滑动
          onScrollUp && onScrollUp();
        }

        this.lastScrollPos = scrollTop;

      }.bind(this));
  }


  render() {
    return (
      <div className="pull-view">
        <PreviewList articleList={this.props.articleList} loadArticles={this.props.onScrollToBottom} push={this.props.push}/>
        <Loading/>
      </div>
    );
  }
}

