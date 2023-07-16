import { Component } from "react";
import styles from './Searchbar.module.css'

 class Searchbar extends Component{

render(){
    return (<header className={styles.Searchbar}>
    <form onSubmit={this.props.onSubmit} className={styles.SearchForm}>
      <button type="submit" className={styles.SearchForm_button}>
        <span className={styles.SearchForm_button_label}>Search</span>
      </button>
  
      <input
        className={styles.SearchForm_input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>)
}

}
export default Searchbar;