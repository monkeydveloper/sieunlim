import React from 'react';


export default class InfiniteScroll extends React.Component {

       
    
    constructor(props) {
        super(props);
      
    }

    componentDidMount() {
        this.refs.iScroll.addEventListener("scroll", () => {
          if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight - 20){
            this.loadMoreItems();
          }
        });
      }
    
      displayItems() {
        var items = [];
        for (var i = 0; i < this.state.items; i++) {
          items.push(<li key={i}>Item {i}</li>);
        }
        return items;
      }
    
      loadMoreItems() {
         if(this.state.loadingState){
             return;
         }
        this.setState({ loadingState: true });
        setTimeout(() => {
          this.setState({ items: this.state.items + 10, loadingState: false });
        }, 1000);
      }

    render() {
   
            return (<tbody>{this.props.render}</tbody>);
        
    }


    
}


// const Scroll = (i) => {
    
//         const { innerHeight } = window;
//         const { scrollHeight } = document.body;
//         // IE에서는 document.documentElement 를 사용.
//         const scrollTop =
//           (document.documentElement && document.documentElement.scrollTop) ||
//           document.body.scrollTop;
//         // 스크롤링 했을때, 브라우저의 가장 밑에서 100정도 높이가 남았을때에 실행하기위함.
//         if (scrollHeight - innerHeight - scrollTop < 100) {
//           console.log("test");
//         }
    
// }