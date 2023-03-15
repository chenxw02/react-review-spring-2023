import React, { Component } from 'react'

export default class App extends Component {

    text = React.createRef()
    state = {
        list: []
    }

    render() {
        return (
            <div>
                <input ref={this.text}></input>
                <button onClick={() => {
                    this.handleClick()
                }
                }>add</button>

                <br />
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/* 大括号内部不支持解析代码：防止被攻击 */}
                                {/* {item.text} */}
                                {/* 强制在大括号内解析代码，注意传入的是一个对象 */} 
                                {/* 可用于解析富文本 */}
                                <span dangerouslySetInnerHTML={
                                    {
                                        __html: item.text
                                    }
                                }></span>
                                <button onClick={() => {
                                    this.handleDel(index)
                                }
                                }>del</button>
                            </li>)
                    }
                </ul>
                {/* 条件渲染：动态创建和删除节点 */} 
                {/* list.length 获取数组长度 */}
                { this.state.list.length === 0 ? <div>暂无待办事项</div> : null}
                {/* 使用&&：前面为真，后面才有机会执行 */}
                {/* { this.state.list.length === 0 && <div>暂无待办事项</div>} */}

                {/* 条件切换className实现样式转变 */}
                {/* <div className={this.state.list.length === 0 ? 'hidden': 'normal'}>111</div> */}
            </div>
        )
    }

    // 不用传参：this可以直接访问到外部的ref.current.value
    handleClick = () => {
        // 不要直接修改状态，可能会造成不可预期的问题
        // this.state.list.push(this.text.current.value)

        // js引用复制，相当于取别名，影响的还是原来的那个数组
        // let newList = this.state.list
        // newList.push(this.text.current.value)

        // 深复制
        // 使用slice()
        let newList = this.state.list.slice()
        let item = {
            id: uuid(),
            text: this.text.current.value
        }
        newList.push(item)
        // 对原始数据进行展开，放在[]里
        // newList = [...this.state.list]
        this.setState(
            {
                // 不能直接在这 list: this.state.list.push()
                // list: this.state.list
                list: newList
            }
        )

        this.text.current.value = ''
    }

    handleDel = (index) => {
        console.log(index)
        let newList = this.state.list.slice()
        // 从index开始，删除一个元素
        newList.splice(index, 1)
        this.setState(
            {
                list: newList
            }
        )
    }
}

function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}