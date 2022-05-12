import { Component } from 'react';

class TOC extends Component{
    render(){
      console.log('TOC render')
      var lists = [];
      var data = this.props.data
      var i = 0;
      while(i < data.length){
        // key 값을 지정해 주어야 오류가 발생하지 않음
        lists.push(<li key = {data[i].id}>
            <a 
              href = {"/contents/" + data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
              > {data[i].title} </a>
          </li>);
        i = i + 1;
      }
      return(
        <ul>  
          {lists}
        </ul>
      );
    }
  }

  export default TOC;