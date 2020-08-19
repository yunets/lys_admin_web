import React, { Component } from 'react';
import {Table, Select, Input, Modal, Form, message, Tag, Button} from 'antd';
const FormItem = Form.Item;
import styles from './Login.less';

@Form.create()
class LoginPage extends Component {




  render() {
    const { form } = this.props;
    return (
      <div className={styles.bodyMain}>
        <div className={styles.main}>
          <FormItem labelCol={{span: 7}} wrapperCol={{span: 15}} label="账号">
            {form.getFieldDecorator('taskName', {
              initialValue: '',
              rules: [{required: true, message: '请输入账号！'}],
            })(<Input placeholder="请输入账号"/>)}
          </FormItem>

          <FormItem labelCol={{span: 7}} wrapperCol={{span: 15}} label="账号">
            {form.getFieldDecorator('taskName', {
              initialValue: '',
              rules: [{required: true, message: '请输入账号！'}],
            })(<Input placeholder="请输入账号"/>)}
          </FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
