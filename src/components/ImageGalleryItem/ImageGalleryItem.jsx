import styles from './ImageGalleryItem.module.css'
import React, {Component} from 'react'
import Modal from '../Modal/Modal'


class ImageGalleryItem extends Component {

state = {
  showModal:false,
}
onModal =() => {
this.setState({showModal: !this.state.showModal})
}

  render(){
    const { item } = this.props;
    const { webformatURL } = item;
    return(<li className={styles.ImageGalleryItem}>
      <img onClick={this.onModal} className={styles.ImageGalleryItem_image} src={webformatURL} alt='img' />
      {this.state.showModal && <Modal onClose={this.onModal} image={item}/>}
    </li>)
  }
}

export default ImageGalleryItem