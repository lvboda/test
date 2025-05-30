import React, { useState } from 'react';
import { Form, Input, Button, Alert, Typography } from 'antd';
import { useIntl, FormattedMessage } from 'umi';

const { Title } = Typography;

const LoginPage = () => {
  const { formatMessage } = useIntl();
  const [phoneNotExistError, setPhoneNotExistError] = useState('');

  const onFinish = (values) => {

  };

  return (
    <div>
  <Form
    layout="vertical"
    style={styles.form}
    onFinish={onFinish}
  >
    <Form.Item
      name="phone"
      rules={[{
        required: true,
        message: formatMessage({
          id: 'app.login.account.required'
        })
      }]}
    >
      <Input
        placeholder={
          formatMessage({ id: 'app.login.account.placeholder' })
        }
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[{
        required: true,
        message: formatMessage({
          id: 'app.login.password.required'
        })
      }]}
    >
      <Input.Password
        placeholder={
          formatMessage({ id: 'app.login.password.placeholder' })
        }
      />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" style={styles.loginButton}>
        Login
      </Button>
    </Form.Item>
    {phoneNotExistError && (
      <Alert
        message={
          <span>
            
          </span>
        }
        type="error"
        showIcon
        style={{ marginTop: 16, borderRadius: 6 }}
      />
    )}
  </Form>
</div>

)};

const styles = {
  container: {
    maxWidth: 400,
    margin: '80px auto',
    padding: 24,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    textAlign: 'center',
  },
  form: {
    marginTop: 32,
    textAlign: 'left',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#2c2c2c',
    borderColor: '#2c2c2c',
  },
};

export default LoginPage;
