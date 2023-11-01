import React, { ReactNode } from 'react';
import { Card, Button, Input, Form } from 'antd';
import { userLogin } from '@/store/user';
import styles from './index.module.scss';
import { useAppDispatch } from '@/hooks';

interface IProps {
  children?: ReactNode;
}

type FieldType = {
  userName?: string;
  passWord?: string;
};

const LogIn: React.FC<IProps> = () => {
  const dispatch: any = useAppDispatch();

  const onFinish = (values: any) => {
    dispatch(userLogin(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.content}>
        <div className={styles.contentLeft}>
          <h2 className={styles.contentTitle}>欢迎登录</h2>
          <div className={styles.contentIntro}>请登录到您的账户，以便享受本网站所有服务</div>
          <div className={styles.contentButton}>
            <Button type="primary">切换注册</Button>
          </div>
        </div>
        <div className={styles.contentRight}>
          <h2 className={styles.contentTitle}>欢迎登录</h2>
          <div className={styles.contentIntro}>请登录到您的账户，以便享受本网站所有服务</div>
          <div className={styles.contentForm}>
            <Form name="login" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
              <Form.Item<FieldType> name="userName" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
              </Form.Item>

              <Form.Item<FieldType> name="passWord" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className={styles.contentButton}>
                  <Button type="primary" htmlType="submit">
                    登录
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LogIn;
