import'./header.css';

export default function Header()
{
    return(
        <div className="header">
            <div className='part'>
                <i className="fa-solid fa-h" style={{color:"#a76040"}}></i>
                <i className="fa-solid fa-o" style={{color:"#a76040"}}></i>
                <i className="fa-solid fa-m" style={{color:"#a76040"}}></i>
                <i className="fa-solid fa-e" style={{color:"#a76040"}}></i>
            </div>
            <div className='part'>        
                <i className="fa-solid fa-d" style={{color:"#a76040"}}></i>
                <i className="fa-solid fa-e" style={{color:"#a76040"}}></i>
                <i className="fa-solid fa-c" style={{color:"#a76040"}}></i>
                <i className="fa-solid fa-o" style={{color:"#a76040"}}></i>
                <i className="fa-solid fa-r" style={{color:"#a76040"}}></i>
            </div>
        </div>
    )
}