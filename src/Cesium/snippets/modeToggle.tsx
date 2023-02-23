import React, { useState } from 'react'
import Button from '@mui/material/Button'

interface Props {
    onClick: () => void
}

const ModeToggleButton: React.FunctionComponent<Props> = ({ onClick }) => {
    const [togglebutton, setToggleButton] = useState('+')

    const changeToggle = () => {
        if (togglebutton === '+') {
            setToggleButton('X')
            onClick()
        } else {
            setToggleButton('+')
            onClick()
        }
    }

    return (
        <div className="toggleIcon open">
            <Button className="btn toggleButton" onClick={changeToggle}>
                {togglebutton}
            </Button>
        </div>
    )
}

export default ModeToggleButton
