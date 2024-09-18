import './text.css'

const Text = (props) => {
    return (
        <div>
            <p className='text'>{props.label} </p>
        </div>
    )
}

export {Text}