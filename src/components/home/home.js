import React, { Component } from 'react';
import { TabBar } from 'antd-mobile'
import Main from '../main/main';
import News from '../news/news';

import Chat from '../chat/chat';
import Mine from '../mine/mine';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true
        }
    }
    renderContent = pageText => {

        return (
            <div>
                <Main />
                <News />
                <Chat />
                <Mine />
            </div>
        )
    }
    render() {
        return (
            <div
                style={
                    this.state.fullScreen
                        ? { position: 'fixed', height: '100%', width: '100%', top: 0 }
                        : { height: 400 }
                }
            >
                <TabBar
                    unselectedTintColor="#949494"
                    //选中字体颜色
                    tintColor="#33A3F4"
                    //背景颜色
                    barTintColor="white"
                    hidden={this.state.hidden}
                    //位置
                    tabBarPosition="bottom"
                    
                >
                    <TabBar.Item
                        title="Life"
                        key="Life"
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                                }}
                            />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab'
                            })
                        }}
                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                            />
                        }
                        title="Koubei"
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab'
                            })
                        }}
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                            />
                        }
                        selectedIcon={
                            <div
                                style={{
                                    width: '22px',
                                    height: '22px',
                                    background:
                                        'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                            />
                        }
                        title="Friend"
                        key="Friend"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab'
                            })
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri:
                                'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg'
                        }}
                        selectedIcon={{
                            uri:
                                'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg'
                        }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab'
                            })
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}
export default Home