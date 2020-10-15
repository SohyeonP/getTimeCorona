import React from 'react'; 
import axios from 'axios';
import SearchNews from './searchNews';


class Search extends React.Component{
    state = {
        isLoading:true,
        news:[],
        value:""
    };
    

    getSearchNews = async ()=>{
        console.log('search News');
        const ID_KEY = 'yjPWFe6GAuDbZ3fF1PAH';
        const SECRET_KEY = 'yjPWFe6GAuDbZ3fF1PAH';
        const search = this.state.value;
        try{
            if(search ===""){
                this.setState({news:[],isLoading:false})
            }else{
                const{data:{
                    items
                }} = await axios.get("/v1/search/news.json",{
                    params:{
                        query:search,
                        display:10,
                    },
                    headers:{
                        'X-Naver-Client-Id':ID_KEY,
                        'X-Naver-Client-Secret':SECRET_KEY
                    }
                });
                this.setState({news:items,isLoading:false});
            }
        }catch(error){
            console.log(error);
        }
    };

    componentDidMount(){
        this.getSearchNews();
    };
    
    handleChange = (e: any)=>{
        this.setState({value:e.target.value});
    }
    handleSubmit = (e: any)=>{
        e.preventDefault();
        this.getSearchNews();
    };

    render(){
        const {news,isLoading} = this.state;

        return(
            <section className="container">
                {
                    isLoading ?
                     (<div className="loader">
                        <span className="loader__text">..Loading</span>
                    </div>)
                    :
                    (
                        <form onSubmit={this.handleSubmit}>
                        <div>
                          <div className="input_div">
                            <h1>뉴스 검색</h1>
                          <input className="input_search" type="text" value={this.state.value} onChange={this.handleChange} placeholder="뉴스를 검색해 보세요." />
                          </div>
                          <div className="news">
                          {news.map(news => ( console.log(news),
                            <SearchNews
                                key={news.link}
                                id={news.id}
                                pubDate={news.pubDate}
                                title={news.title}
                                originallink={news.originallink}
                                link={news.link}
                                description={news.description}
                              />))}
                          </div>
                        </div>
                      </form>
                    )
                }
            </section>
        );
    }
}
export default Search;