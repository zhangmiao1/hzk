import React, { Component } from 'react';
import { Flex, WingBlank, WhiteSpace, NavBar, List, InputItem, Button, Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import './login.css'
import axios from '../../http'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uname: '',
            pwd: ''
        }
    }
    changeUsername = (e) => {
        
        this.setState({
            uname: e
        })
    }
    changePwd = (e) => {
        this.setState({
            pwd: e
        })
    }
    handleLogin = async () => {
        const { history } = this.props
        const res = await axios.post(`users/login`, this.state)
        const { meta: { msg, status } } = res.data
        if (status === 200) {
            history.push('/home')
        } else {
            Toast.fail(msg, 1)
        }
    }
    render() {
        return (
            <Flex direction='column' justify='center'>
                <Flex.Item>
                    <WhiteSpace size="lg" />
                    <WingBlank>
                        <NavBar mode='dark'>登录</NavBar>
                    </WingBlank>

                </Flex.Item>
                <Flex.Item>
                    <WhiteSpace size='lg' />

                    <List>
                        <WingBlank>

                            <InputItem
                                clear
                                onChange={this.changeUsername}
                                value={this.state.uname}
                            >姓名</InputItem>
                            <InputItem
                                clear
                                onChange={this.changePwd}
                                value={this.state.pwd}
                            >密码</InputItem>
                        </WingBlank>
                        <WingBlank>
                            <Button onClick={this.handleLogin} type="primary" style={{ marginTop: '4px' }}>
                                登录
                            </Button>
                        </WingBlank>

                    </List>


                </Flex.Item>
            </Flex>
        )
    }
}
export default Login