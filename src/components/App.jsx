import React, { Component } from "react"
import Searchbar from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Circles } from 'react-loader-spinner';
import Notiflix from 'notiflix';

 class App extends Component {
  
  state = {
photos: null,
searchQuery: '',
page: 1,
load:'wait',
totalHits:0
  }
  
  KEY = '36726851-d95c66efa8eaebbb271de5c8c'
  
  
 
  
  componentDidUpdate(){
    console.log(this.state.photos)
  }


  fetchImages = () => {
    
    if(this.state.searchQuery === ''){
      Notiflix.Notify.warning('Введіть щось у поле');
      return
    }
    this.setState({load:'going'})
    const urlApi = `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  
    setTimeout(() =>{(fetch(urlApi)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if(data.totalHits < 1){
          Notiflix.Notify.warning(`Нічого нема за запитом ${this.state.searchQuery}`);
        }
        this.setState( (prevState) => ({ photos: prevState.photos ? [...prevState.photos, ...data.hits]: data.hits,totalHits:data.totalHits }));
      }).finally(this.setState({load:'wait;'}))
      .catch(error => {
        console.log(error);
      }))}, 1000)
  };

  onSubmit = (e) => {
    e.preventDefault();
this.setState({page:1,photos:0})

    console.log(e.target[1].value)
    const searchQuery = e.target[1].value;
    this.setState({ searchQuery: searchQuery }, () => {
      this.fetchImages(searchQuery);
    });
  };

  btnClick = () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => {
        this.fetchImages();
      }
    );
  };

  render(){
return (<>
   <Searchbar onSubmit={this.onSubmit}/>
   {this.state.searchQuery && <ImageGallery imgList={this.state.photos}/>}
   {this.state.load === 'going' && <Circles
  height="80"
  width="80"
  marginLeft="auto" 
  color="grey"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>}
   {this.state.totalHits / this.state.page > 12 && <Button btnClick={this.btnClick}/>}






   {/* 
   
<Modal/> */}
   </>
  );
  }
  
};

export default App
