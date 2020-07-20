import React, {Component} from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
//import mditor from 'mditor';
import Background from '../../assets/img/background2.png';

var mditor = require("mditor");

import styles from './MarkdownEdit.less';

class App extends Component {
  componentDidMount(){


    var editor = new mditor(this.refs.md_editor,{
      //自定义显示效果class
      previewClass : 'article'
    });
  }

  render() {
    return (
      <div>
        <textarea ref="md_editor"></textarea>
      </div>
    );
  }
}

const sectionStyle = {
  float: 'left',
  width: '100%',
  height: '900px',
  // makesure here is String确保这里是一个字符串，以下是es6写法
  backgroundImage: `url(${Background})`,
};

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <div style={sectionStyle}>
      <div className={styles.headerStyle}>
        <textarea name="editor" id="editor"></textarea>
        <App></App>
      </div>
    </div>
  </PageHeaderWrapper>
);
