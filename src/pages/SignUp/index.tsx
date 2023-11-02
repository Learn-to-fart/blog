import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Input, Form } from 'antd';

import { userSignUp } from '@/store/user';
import styles from './index.module.scss';
import { useAppDispatch } from '@/hooks';

interface IProps {
  children?: ReactNode;
}

type FieldType = {
  userName?: string;
  passWord?: string;
  email?: string;
};

const SignUp: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const switchSignIn = () => {
    navigate('/signIn');
  };
  const onFinish = (values: FieldType) => {
    // @ts-ignore
    dispatch(userSignUp(values));
  };
  return (
    <div className={styles.container}>
      <Card className={styles.content}>
        <div className={styles.contentLeft}>
          <h2 className={styles.contentTitle}>欢迎登录</h2>
          <div className={styles.contentIntro}>请登录到您的账户，以便享受本网站所有服务</div>
          <div className={styles.contentButton}>
            <Button type="primary" onClick={switchSignIn}>
              切换登录
            </Button>
          </div>
        </div>
        <div className={styles.contentRight}>
          <h2 className={styles.contentTitle}>注册账户</h2>
          <div className={styles.contentIntro}>请登录到您的账户，以便享受本网站所有服务</div>
          <div className={styles.contentForm}>
            <Form name="login" layout="vertical" onFinish={onFinish} autoComplete="off">
              <Form.Item<FieldType> name="userName" rules={[{ required: true, message: '请输入用户名!' }]}>
                <Input size="large" />
              </Form.Item>

              <Form.Item<FieldType> name="passWord" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input.Password size="large" />
              </Form.Item>

              <Form.Item<FieldType> name="email" rules={[{ required: true, message: '请输入邮箱' }]}>
                <Input size="large" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <div className={styles.contentButton}>
                  <Button type="primary" htmlType="submit">
                    注册
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

export default SignUp;
