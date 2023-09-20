import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

import React, { useState } from 'react'

interface Props {
    onClick: () => void
}

const Like = ({onClick}: Props) => {

    const [status, setStatus] = useState(false);

    const toggle = () => {
        setStatus(!status);
        onClick();
    }
    
    if (status) {
        return (
          <AiFillHeart color='red' onClick={()=> toggle()}/>
        )
    } else {
        return <AiOutlineHeart onClick={()=> toggle()}/>
    }
}

export default Like