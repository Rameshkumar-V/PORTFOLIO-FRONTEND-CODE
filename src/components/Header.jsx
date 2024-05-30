import { useState } from "react";
import "./css/Header.css"

function Header(){
    const [showNav,SetNav]=useState(false);
    return (
        
        <header>
            


            <div className="menu-icon">
               {showNav ? <button onClick={()=>{
                    SetNav(false);
                }}> <img   src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAAAXNSR0IArs4c6QAAA2pJREFUWEe1mLtuFTEQhj+nzFNBhxQhgShpEKKJeANEBU+AhE6BAgU1LVUkLqLmYZAiRVGITLy+rC9je/acsFXiM57555+Z3941HPAYwCr213buf/ekvYKjfMlIgZq1ARqD/1EDNpj20+rECUlNUnFuKxMtizOi5348DapncTbMZR5OH6i0bEGmWOGPIvYdAZmhFaqWtvwXCF2n/oeSAwO27G5XbHW51+QlhitqNmTbTHrNsvHjMHgU0VyillfAe+DPrJIChqAM/Vh7MFmEcfvPgOfAb+AehgtjdfqpTagAWeYiZdZM0QfgRRbsB3BfGzxvIVeOQuAzJwlkHr6G5ytaNHTOYHT3F3gEfG1EdYJ61lQby53UMpY4hr8GHnuA25+JAMwGpwkoMegAngDnjQKEhRlTclpr/RRMphBDgPsBEbIowvkuVYBcHLUADdfGcmILBnulHo+k0PONhMyaSGLw6lZyHpYl9m5S10r3MGE6Z/0YfbZXnPKw+uh0MHPmAD641UQnN5VQ5ApQhT+gH3y5MweVrx1wmpAYrrASwMrJBslpscsrPZfumHtZ/fgG+D7rjxKyDxpDTwi9AX7VBRIHx8DOLgz2XeZB/QxW1s3WsDBCabjEcixcsJtdT4AvElvGGGx1lcpa4S4O7EvgOKZbE1HH2oE5bQ7DuoGndffiEpmemkMA2Y6krid9Wm+Bbzo1VEBqBeDGFj259vPAm9mBVU53ppOCNLnXUrFTOkpVS+qsiItOZnFbnRwPg6pXhy7WE0I4DgI5Bs6sA7qalCfOFqHeYhuYESVIqL+zS9ezcNb624/hXPwysAeYnuK1IMfSKN0j+0C1syP25bqoZTKGKxgNJ8u1TfdJDX0am54EZXsnbhqgwEE389nrRslkVydyIhdxloBm7zht2Pz0SB6k7zY5iWFTAtk98kRa3Ru7dYfJJ+BZ5vfn8lq7zzMoX+fTn3wgNnzCEfAZeJreu+GiwThtw3GvreWeOopVjhfbtOEIw2ss7+QvGCrHWV5ZjUOorCdlZ+pVwbBYkhwp8TcSVO4rtUr6mpss6oAaAEObMvY+bV7t0SAahelRs15aWuWMvRD29r6Hb4a2eYOXsqbcXcTCaCfbUfADejEP2U7WQQ0Q8674F6dIR23wqDBWmJTMLoKvukvOuvUf8j0yQEut31IAAAAASUVORK5CYII=" alt="m"/> </button>
                :
                <button onClick={()=>{
                    SetNav(true);
                }}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAAAXNSR0IArs4c6QAAAuJJREFUWEe1WDt2HCEQLELFTp3vERT7QH7PR3Lgg+gIChXqCLrB+MEM0F9omJWC1e5AdxfV3QVDQv1LAI7269aXJ7oqOLK/8nFcnxxdD3c3sG0fe1pAnkATjlUqRYzIQiJzZHIbyJX8fgu/A/Qk3Vfa6eSUgIMXKmc8yssEQQ0hp12/40xWB44jnYnoAoSlEYfU5Dl5qcEVjpVCsBbBn9VEptrb36BEK2Veuxfp0ET56d7MlomsRmFpIg8nsVi6af2OUr9SlhYzM4pzc2Y+JR7L7ieAfzOH1nhbRC6mK5IiURf/HwDvnj/ynLXWA8DHEETbCHodxatEzfwF4M2Mp/uxPXkg4aO3ezz8DvsAHJBn8g0my6OS7q7nDsgd7LZNSzctl0xSBxkI5k0JmDYizLnR7h57cXaFfDBpOyeJtIPkPOWYu4mvk9nC0Q/ma4XGJSY6MQXkVhynktkBRBaXA5I2r3VgHDCJFwCvfbsk5sbpaEhSiIX0Dhxflh8HZEn1A4etk5sS45pdazglyFjQiEkt5iFG/CVMzH0xlzJJtjF3x9lmctxxJshsMmqcFyC9Lp4wt/GXfTvhSx5oG8g7nk3bm2VRfBJlqKciIkpZnfNPfUwZxXbHmBLsoe+NI+ybb8vvXixF+kjJxImi4iTMOTJwXiAQlsu8Ovn6P1vAYNwcul5wvJL8AeB3tF5n2LQfZfEXwOc5j49pnezjNyTIvg+Z6mRKb/09v8/WjdOXfAOkw7/fXbluiE7OmOz++zsOkYOn6CbBQL6ydxwKs6VbL5LSfZaJuHGZSOR6lXr1z2oypjaim41Ct4J5kIe3eUQw5puGE0HpnH9OFg27xrLu7qjmaKUQZxX/vnMpFxOdXIFryRu3N8jjVe9flXEmvbS619UBqbE7uRmW4Un2/XQH60sr2uDy0EQkPSQc4gWQgIwUc6z/1+tkrAeCyUlunhOdeAnkmd1gLADwNY/vR3JeJFcWjP+xfg0/KlJ1BwAAAABJRU5ErkJggg==" alt="m"/></button>
                }
           </div>

            <nav>
                <ul className={showNav ? "navbar-show" : "navbar-hide"}>
                    
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Myskills">Skills</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;