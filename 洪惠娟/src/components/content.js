import React from 'react';
import Background from '../img/home-banner.png';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

var styleB = {
    backgroundColor: "#000",
    color: "#fff",
    paddingBottom:100
}
var styleC = {
    height: 900,
}
// 内容1样式设置
var styleA1 = {
    textAlign: "center",
    marginTop: 100
}
var styleA2 = {
    textAlign: "center",
    backgroundImage: `url(${Background})`,
    height: 500,
    width:"100%"
}
var styleA3 = {
    height: 360,
    width: 700,
    marginTop: 135,
    marginLeft: -80,
    backgroundColor: "#000"
}
// 内容2样式设置
var styleB1 = {
    paddingTop: 150,
    textAlign: "center",
}
var styleB2 = {
    paddingTop: 100,
    textAlign: "center",
}
var styleB3 = {
    marginTop: 50,
}
// 内容3样式设置
var styleCf = {
    paddingTop: 200,
    textAlign: "center",
    marginBottom: 150
}
var styleCp = {
    backgroundColor: "#000",
}
var styleCC = {
    backgroundColor: "#000",
    color: "#fff"
}
var styleC1 = {
    height: 250,
    width: 450,
    marginLeft: 30,
    marginTop: -100,
    backgroundColor: "#000"
}
var styleC2 = {
    marginLeft: 50,
    marginRight: 20,
    marginTop: 80,
    textAlign: "center",
    paddingBottom: 80,
}
// 内容4开始
var styleD1 = {
    marginTop: 150,
    marginBottom: 50,
    textAlign: "center"
}
var styleD2 = {
    padding:"50 0",
    backgroundColor: "#000",
    color: "#fff"
}
var styleD3= {
    paddingTop:80,
    paddingBottom:80,
    textAlign:"center"
}
export default class Content extends React.Component {//导出header组件
    render() {
        return (
            <div>
                {/* 内容1开始 */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12" style={styleA1}>
                                <h1>以技术赋能创意<br />将灵感变为现实</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12" style={styleA2}>
                                <div style={styleA2}>
                                    <video src="src/img/index-video.mp4" controls style={styleA3}></video>
                                </div>
                            </div>
                        </div>
                    </div>
            


                {/* 内容2开始 */}
                <div className="container" style={styleB}>
                    <div className="row" >
                        <div className="col-lg-12" style={styleB1}>
                            <h1>公司业务</h1>
                        </div>
                    </div>
                    <div className="row" style={styleB2} >
                        <div className="col-lg-4 B2">
                            <h4>数字创意</h4><br />
                            <h6>用科技表达奇思妙想</h6>
                            <img src="src/img/B1.png" style={styleB3} />
                        </div>
                        <div className="col-lg-4 B2">
                            <h4>办公效率</h4><br />
                            <h6>用软件提升工作效率</h6>
                            <img src="src/img/B2.png" style={styleB3} />
                        </div>
                        <div className="col-lg-4 B2">
                            <h4>公司管理</h4><br />
                            <h6>用数据记录工作生活</h6>
                            <img src="src/img/B3.png" style={styleB3} />
                        </div>
                    </div>
                </div>


                {/* 内容3开始 */}
                <div className="container" style={styleC}>
                    <div className="row" >
                        <div className="col-lg-12" style={styleCf}>
                            <h1>更多信息</h1>
                        </div>
                    </div>
                    <div className="row" style={styleCp}>
                        <div className="col-lg-6">
                            <img src="src/img/c1.png" style={styleC1}></img>
                        </div>
                        <div className="col-lg-6">
                            <img src="src/img/c2.png" style={styleC1}></img>
                        </div>
                    </div>
                    <div className="row" style={styleCC}>
                        <div className="col-lg-5" style={styleC2}>
                            <h3>我们的使命</h3>
                            <h5>我们致力于帮助每一个新生代创作者将灵感变为现实，赋能新生代，创意兴未来。</h5>
                            <h6>我们是谁</h6>
                        </div>
                        <div className="col-lg-5" style={styleC2}>
                            <h3>我们的使命</h3>
                            <h5>我们致力于帮助每一个新生代创作者将灵感变为现实，赋能新生代，创意兴未来。</h5>
                            <h6>我们是谁</h6>
                        </div>
                    </div>
                </div>


                {/* 内容4开始 */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" style={styleD1}>
                            <h1>热门产品</h1>
                        </div>
                    </div>
                    <div className="row" style={styleD2}>
                        <div className="col-lg-3" style={styleD3}>
                            <img src="src/img/d1.png" />
                        </div>
                        <div className="col-lg-3" style={styleD3}>
                            <img src="src/img/d2.png"/>
                        </div>
                        <div className="col-lg-3" style={styleD3}>
                            <img src="src/img/d3.png" />
                        </div>
                        <div className="col-lg-3" style={styleD3}>
                            <img src="src/img/d4.png" />
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}