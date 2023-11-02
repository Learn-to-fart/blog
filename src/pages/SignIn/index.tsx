import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button, Input, Form } from 'antd';
import { userSignIn } from '@/store/user';
import styles from './index.module.scss';
import { useAppDispatch } from '@/hooks';

interface IProps {
  children?: ReactNode;
}

type FieldType = {
  userName?: string;
  passWord?: string;
};

const SignIn: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const switchSignUp = () => {
    navigate('/signUp');
  };
  const onFinish = (values: FieldType) => {
    // @ts-ignore
    dispatch(userSignIn(values));
  };

  return (
    <div className={styles.container}>
      <Card className={styles.content}>
        <div className={styles.contentLeft}>
          <h2 className={styles.contentTitle}>欢迎登录</h2>
          <div className={styles.contentIntro}>请登录到您的账户，以便享受本网站所有服务</div>
          <div className={styles.contentForm}>
            <Form name="login" layout="vertical" onFinish={onFinish} autoComplete="off">
              <Form.Item<FieldType> name="userName" rules={[{ required: true, message: '请输入账号!' }]}>
                <Input size="large" />
              </Form.Item>

              <Form.Item<FieldType> name="passWord" rules={[{ required: true, message: '请输入密码!' }]}>
                <Input.Password size="large" />
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
        <div className={styles.contentRight}>
          <h2 className={styles.contentTitle}>你好，新朋友</h2>
          <div className={styles.contentIntro}>请注册一个账户，享受更多服务</div>
          <div className={styles.contentButton}>
            <Button type="primary" onClick={switchSignUp}>
              切换注册
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SignIn;
