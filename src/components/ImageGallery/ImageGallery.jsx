import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem"
import styles from './ImageGallery.module.css'
export function ImageGallery({imgList}){
    // console.log({imgList})
    
    return (<ul className={styles.ImageGallery}>
        {Array.isArray(imgList) && imgList.map(img => <ImageGalleryItem key={img.id} item={img} />)}
        </ul>)
}