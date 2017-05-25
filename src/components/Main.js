require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';

//获取图片相关数据
let imageDatas = require('json!../data/imageData.json');

//定义一个函数遍历图片文件名，自执行来把文件信息转化成URL路径信息
imageDatas = ((imageDatasArr) => {
  for (let i = 0, j = imageDatasArr.length; i < j; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

//定义一个图片组件
// class ImgFigure extends React.Component {
//   render() {
//     return(
//       <figure>
//         <img/>
//         <figcaption>
//           <h2></h2>
//          </figcaption>
//       </figure>
//     );
//   }
// }

class GalleryByReactApp extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

//符合common.js规范的引入方式，每个文件是一个模块，每个模块是一个作用域

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
