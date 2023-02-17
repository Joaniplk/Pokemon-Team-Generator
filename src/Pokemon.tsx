import React from "react";

interface Props {
    name: string,
    url: string
}

function Pokemon(props:Props):JSX.Element{
    return (
        <a href={`https://en.wikipedia.org/wiki/${props.name}`}>
              <div className='image-div'>
                <img className='pokemon-image' alt={props.name} src={props.url}></img>
              </div>
        </a>
    );
}


export {Pokemon};