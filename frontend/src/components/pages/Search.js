import React, {useState} from 'react'
const Search = ({history}) => {

    const [keyword, setKeyword] = useState("");
    const searchContrl = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            history.push(`/search/${keyword}`)
        } else {
            history.push(`/`)
        }
    }
    return (
       <form onSubmit={searchContrl}>
        <div>
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Psychics,Category,Topic.."
                    onChange={(e) => setKeyword(e.target.value)} />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
       </form>
    )
}
export default Search
